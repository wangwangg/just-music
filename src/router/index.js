import Vue from 'vue'
import VueRouter from 'vue-router'
import Discovery from '@/page/discovery'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discovery',
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
  },
]

const router = new VueRouter({
  routes,
})

export default router
