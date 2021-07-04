import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { Loading } from 'element-ui'

import '@/style/index.scss'
import store from './store'
import initAxios from './utils/axios'

Vue.config.productionTip = false //阻止启动生产消息
Vue.use(Loading)
Vue.use(initAxios)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
