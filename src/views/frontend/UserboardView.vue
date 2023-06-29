<template>
  <div class="wrapper">
    <LoadingView :active="isLoading"></LoadingView>
    <FrontNavbar/>
    <ToastMessages/>
    <div class="router-view">
      <router-view/>
    </div>
    <FrontFooter/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    FrontNavbar, FrontFooter, ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.router-view {
  flex: 1;
}
</style>
