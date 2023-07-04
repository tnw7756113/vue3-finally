import { createApp } from 'vue'
// 引入vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入vue3-loading-overlay
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters'
import $httpMessageStatus from './methods/pushMessageStatus'

// 定義全域屬性 filters
const app = createApp(App)
app.config.globalProperties.$filters = {
  currency, date
}
// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.config.globalProperties.$httpMessageStatus = $httpMessageStatus
app.use(VueAxios, axios)
app.use(router)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('LoadingView', Loading)
app.mount('#app')
