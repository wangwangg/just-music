import { Carousel, CarouselItem } from "element-ui";
import Icon from '@/base/icon'
export default {
  install(Vue) {
    Vue.component('Icon', Icon) // 全局注册icon组件
    Vue.use(Carousel)
    Vue.use(CarouselItem)
  },
}
