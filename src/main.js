import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Loading } from 'element-ui'

import '@/style/index.scss'
import store from './store/index'
import initAxios from './utils/axios'
import global from './utils/global'

Vue.config.productionTip = false //阻止启动生产消息
Vue.use(Loading)
Vue.use(initAxios)
Vue.use(global)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
