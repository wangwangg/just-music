import axios from 'axios'
import { Loading } from 'element-ui'

let loading
let loadingCount = 0
export let request
export default {
  install(Vue) {
    request = axios.create({
      // 创建一个axios实例
      baseURL: '/netease-api'
    })

    request.interceptors.request.use((config) => {
      //请求拦截器（在请求之前进行一些配置）
      loading ||
        (loading = Loading.service({
          target: '#page-content',
          background: 'transparent',
          text: '载入中',
        }))
      loadingCount++
      // console.log(loadingCount, 'loadingCountloadingCount')
      // console.log(config)
      return config
    })

    request.interceptors.response.use((response) => {
      //响应了拦截器（在响应之后对数据进行一些处理）
      loadingCount--
      // console.log(loadingCount, 'loadingCountloadingCount----')

      if (loadingCount === 0) {
        loading.close()
        loading = null
      }
      if (response.status === 200) {
        return response.data
      }
    })

    Vue.prototype.$request = request
  },
}
