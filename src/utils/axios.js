import axios from 'axios'
import { Loading } from 'element-ui'

const BASE_URL = '/netease-api'
let loading
let loadingCount = 0
export let request
export let requestWithoutLoading

const handleError = (e) => {
  throw new Error(e)
}

const handleResponse = (response) => {
  if (response.status === 200) {
    return response.data
  }
  else {
    handleError()
  }
}

export default {
  install(Vue) {
    //没有loading
    requestWithoutLoading = axios.create({
      // 创建一个axios实例
      baseURL: BASE_URL
    })

    //请求拦截
    requestWithoutLoading.interceptors.response.use(handleResponse, handleError)


    //有loading
    request = axios.create({
      // 创建一个axios实例
      baseURL: BASE_URL
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

    const handleLoading = () => {
      loadingCount--
      // console.log(loadingCount, 'loadingCountloadingCount----')

      if (loadingCount === 0) {
        loading.close()
        loading = null
      }
    }


    request.interceptors.response.use(response => {
      //响应了拦截器（在响应之后对数据进行一些处理）
      handleLoading()
      return handleResponse(response)
    }, (e) => {
      handleLoading()
      handleError(e)
    })

    Vue.prototype.$request = request
  },
}
