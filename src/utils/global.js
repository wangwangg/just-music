import { Carousel, CarouselItem, Table, TableColumn, Popover } from 'element-ui'
import { formatTime } from './common'
import Icon from '@/base/icon'
export default {
  install(Vue) {
    Vue.component('Icon', Icon) // 全局注册icon组件
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Popover)

    Vue.filter('formatTime', formatTime)
  },
}
