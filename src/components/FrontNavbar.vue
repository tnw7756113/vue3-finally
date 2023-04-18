<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="d-flex">
        <router-link to="/login" class="nav-link fs-3 p-1 d-lg-none"><i class="bi bi-person-fill"></i></router-link>
        <router-link to="" class="nav-link fs-3 p-1 me-2 d-lg-none"><i class="bi bi-cart4"></i></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="" class="nav-link fs-5">關於我們</router-link>
          <router-link to="/productList" class="nav-link fs-5">產品列表</router-link>
          <router-link to="" class="nav-link fs-5">常見問題</router-link>
        </div>
      </div>
      <router-link to="/login" class="nav-link fs-3 p-1 me-2 d-none d-lg-block"><i class="bi bi-person-fill"></i></router-link>
      <router-link to="" class="nav-link fs-3 p-1 d-none d-lg-block"><i class="bi bi-cart4"></i></router-link>
    </div>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      isLoading: false
    }
  }
}
</script>
