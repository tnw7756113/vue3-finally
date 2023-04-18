<template>
  <div class="toast-container position-fixed pe-3 bottom-0 end-0">
    <Toast v-for="(msg, key) in message" :key="key" :msg="msg"></Toast>
  </div>
</template>

<script>
import Toast from '@/components/ToastView.vue'
export default {
  data () {
    return {
      message: []
    }
  },
  components: { Toast },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.message.push({ style, title, content })
    })
  }
}
</script>
