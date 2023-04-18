import { createApp } from 'vue'
// 引入vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入vue3-loading-overlay
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'
import $httpMessageStatus from './methods/pushMessageStatus'

// 定義全域屬性 filters
const app = createApp(App)
app.config.globalProperties.$filters = {
  currency, date
}
app.config.globalProperties.$httpMessageStatus = $httpMessageStatus
app.use(VueAxios, axios)
app.use(router)
app.component('LoadingView', Loading)
app.mount('#app')
