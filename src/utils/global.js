import { Input, Carousel, CarouselItem, Table, TableColumn, Popover, Pagination } from 'element-ui'
import { formatTime } from './common'
import Icon from '@/base/icon'
import NButton from '@/base/button'
export default {
  install(Vue) {
    Vue.component('Icon', Icon) // 全局注册icon组件
    Vue.component('NButton', NButton)
    Vue.prototype.$ELEMENT = { size: 'small' };

    Vue.use(Input)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Popover)
    Vue.use(Pagination)

    Vue.filter('formatTime', formatTime)
  },
}
