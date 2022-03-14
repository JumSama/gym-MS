import JumRequest from './request'

// 请求拦截器
const requestInterceptors = {
  success(value) {
    return value
  },
  error(err) {
    console.log(err)
  }
}

// 响应拦截器
const responseInterceptors = {
  success(value) {
    return value
  },
  error(err) {
    console.log(err)
  }
}

export default new JumRequest({
  // baseURL: 'http://127.0.0.1:8800',
  requestInterceptors,
  responseInterceptors
})
