import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/style/index.scss'

Vue.config.productionTip = false //阻止启动生产消息

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
