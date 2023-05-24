<template>
  <LoadingView :active="isLoading"></LoadingView>
  <Navbar></Navbar>
  <div class="container-fluid mt-3">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import Navbar from '@/components/NavbarView.vue'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.axios.post(api, this.user).then((res) => {
      console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
