<template>
  <LoadingView :active="isLoading"></LoadingView>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand text-green" href="#">菓然</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/dashboard/products" class="nav-link">產品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/coupons" class="nav-link">優惠卷</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="logout">登出</a>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    logout () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.$router.push('/')
          }
        })
        .catch((error) => {
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'danger',
            title: error.response.data.message
          })
        })
    }
  }
}
</script>
