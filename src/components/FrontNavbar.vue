<template>
  <nav class="navbar navbar-expand-md navbar-light  position-fixed top-0 w-100 p-0 bg-white" style="z-index: 99;">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img class="logo-navbar " src="../assets/imgs/logo_navbar.webp" alt="logo">
      </a>
      <div class="d-flex">
        <router-link to="/login" class="nav-link fs-3 p-1 d-md-none"><i class="bi bi-person-fill"></i></router-link>
        <router-link to="/favourite" class="nav-link fs-3 p-1 me-2 d-md-none position-relative">
          <i class="bi bi-suit-heart-fill"></i>
          <span v-if="faveList.length"
            class="position-absolute start-50 badge rounded-pill bg-danger p-1"
            style="font-size: 12px; width: 25px; height: 20px;">{{ faveList.length }}</span>
        </router-link>
        <router-link to="/userCart" class="nav-link fs-3 p-1 me-2 d-md-none position-relative">
          <i class="bi bi-cart4"></i>
          <span v-if="cartQty"
          class="position-absolute start-50 badge rounded-pill bg-danger p-1"
          style="font-size: 12px; width: 25px; height: 20px;">{{ cartQty }}</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/about" class="nav-link fs-5">關於我們</router-link>
          <router-link to="/productList" class="nav-link fs-5">產品列表</router-link>
          <router-link to="/faq" class="nav-link fs-5">常見問題</router-link>
        </div>
      </div>
      <router-link to="/login" class="nav-link fs-3 p-1 me-2 d-none d-md-block"><i class="bi bi-person-fill"></i></router-link>
      <router-link to="/favourite" class="nav-link fs-3 p-1 me-2 d-none d-md-block position-relative">
        <i class="bi bi-suit-heart-fill"></i>
        <span v-if="faveList.length"
          class="position-absolute start-50 badge rounded-pill bg-danger p-1"
          style="font-size: 12px; width: 25px; height: 20px;">{{ faveList.length }}</span>
      </router-link>
      <router-link to="/userCart" class="nav-link fs-3 p-1 d-none d-md-block position-relative">
        <i class="bi bi-cart4"></i>
        <span v-if="cartQty"
          class="position-absolute start-50 badge rounded-pill bg-danger p-1"
          style="font-size: 12px; width: 25px; height: 20px;">{{ cartQty }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import saveFave from '@/methods/saveFave'
export default {
  data () {
    return {
      faveList: saveFave.getFavorite() || [],
      cartQty: '',
      isLoading: false
    }
  },
  inject: {
    emitter: ['emitter']
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(url).then((res) => {
        if (res.data.success) {
          this.cartQty = res.data.data.carts.length
        }
      })
    },
    updateFave () {
      this.faveList = saveFave.getFavorite()
    }
  },
  created () {
    this.getCart()
  },
  mounted () {
    this.emitter.on('update-cart', this.getCart)
    this.emitter.on('update-fave', this.updateFave)
  }
}
</script>
