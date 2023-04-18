<template>
  <LoadingView :active="isLoading"></LoadingView>
  <FrontNavbar></FrontNavbar>
  <ToastMessages></ToastMessages>
  <router-view></router-view>
  <FrontFooter></FrontFooter>
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
