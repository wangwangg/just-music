import { Input, Loading, Carousel, CarouselItem, Table, TableColumn, Popover, Pagination } from 'element-ui'
import * as commonUtils from './common'

// 全局图片错误处理
window.addEventListener('error', function (e) {
  const target = e.target // 当前dom节点

  if (target) {
    const { tagName } = target
    if (tagName && tagName.toUpperCase() === 'IMG') {
      target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }
  }

}, true)

// import Icon from '@/base/icon'
// import NButton from '@/base/button'
// import Tabs from '@/base/tabs'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context('@/base', true, /[a-z0-9]+\.(jsx?|vue)$/i)

export default {
  install(Vue) {
    // 批量注册base组件
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = componentConfig.default.name || ''
      Vue.component(componentName, componentConfig.default || componentConfig)
    })

    Vue.prototype.$ELEMENT = { size: 'small' };
    Vue.prototype.$utils = commonUtils
    Vue.use(Input)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Popover)
    Vue.use(Pagination)
    Vue.use(Loading)
  }
}