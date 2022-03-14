import aixos from 'axios'
export default class JumRequest {
  constructor(config) {
    this.instance = aixos.create(config)

    // 请求拦截器
    if (config.requestInterceptors) {
      this.instance.interceptors.request.use(
        config.requestInterceptors.success,
        config.requestInterceptors.error
      )
    }

    // 响应拦截器
    if (config.responseInterceptors) {
      this.instance.interceptors.response.use(
        config.responseInterceptors.success,
        config.responseInterceptors.error
      )
    }
  }

  // 请求
  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ method: 'GET', ...config })
  }

  post(config) {
    return this.request({ method: 'POST', ...config })
  }
}
