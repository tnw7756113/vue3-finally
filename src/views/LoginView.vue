<template>
  <LoadingView :active="isLoading"></LoadingView>
  <section class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="container">
    <form class="row justify-content-center"
        @submit.prevent="signIn">
        <div class="col-md-6 p-5 border border-brown border-5 text-brown bg-beige">
            <h1 class="fs-3 mb-5 fw-bold">管理者登入平台</h1>
            <div class="mb-2">
              <label for="inputEmail" class="sr-only">Email</label>
              <input type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="請輸入Email"
                  required
                  autofocus
                  v-model="user.username"/>
            </div>
            <div class="mb-2">
            <label for="inputPassword" class="sr-only">密碼</label>
            <input type="password"
                id="inputPassword"
                class="form-control"
                placeholder="請輸入密碼"
                required
                v-model="user.password"/>
            </div>
            <div class="text-end mt-4">
              <button @click="backToIndex" class="btn btn-brown btn-block me-2">返回</button>
              <button @click="signIn" class="btn btn-brown btn-block">登入</button>
            </div>
        </div>
      </form>
  </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    signIn () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.isLoading = false
            const token = res.data.token
            const expired = res.data.expired
            document.cookie = `hexToken=${token};expires=${new Date(expired)};` // 存取cookie
            this.$httpMessageStatus(res, '登入')
            this.$router.push('/dashboard/products')
          } else {
            this.isLoading = false
            this.$httpMessageStatus(res, '登入')
          }
        })
    },
    backToIndex () {
      this.$router.push('/')
    }
  }
}
</script>
