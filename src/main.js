import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant
import Vant, { Lazyload, Notify, Dialog } from 'vant'
import 'vant/lib/index.less'

Vue.use(Vant)
Vue.use(Lazyload)
Vue.use(Notify)
Vue.use(Dialog)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
