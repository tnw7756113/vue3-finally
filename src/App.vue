<template>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/all.scss";

#app {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted () {
    AOS.init({
      duration: 1000,
      anchorPlacement: 'top-bottom'
    })
  }
}
</script>
