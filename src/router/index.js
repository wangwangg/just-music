import Vue from 'vue'
import VueRouter from 'vue-router'

const Discovery = () => import('@/page/discovery')
const SongListDetail = () => import('@/page/song-list-detail')

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
  {
    path: '/song-list-detail/:listId',
    name: 'song-list-detail',
    component: SongListDetail
  }
]

const router = new VueRouter({
  routes,
})

export default router
