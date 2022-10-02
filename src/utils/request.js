import axios from 'axios'
import { Toast } from 'vant'
import { API_BASE_DIR } from '@/config/config'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
  timeout: 10000,
  baseURL: API_BASE_DIR
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 是否需要token
  const notNeedToken = (config.headers || {}).needToken === false
  // 是否防止重复提交
  const repeatSubmit = (config.headers || {}).repeatSubmit === false
  // 请求方式
  const method = config.method

  if (!notNeedToken) {
    // todo 带上请求头
    console.log('todo 带上请求头')
  }

  // todo 如果是post或put请求，讲请求体转换为json格式
  console.log(config)
  // 防止重复提交
  if ((method === 'post' || method === 'put' || method === 'delete') && !repeatSubmit) {
    // todo 防止重复提交
    console.log(' todo 防止重复提交')
  }

  return config
}, error => {
  console.error(error)
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(res => {
  // todo 获取错误码及错误信息 校验错误、一般错误
  const code = res.data.code
  if (code > 0) {
    Toast.fail(res.data.message)
    return Promise.reject(res.data.message)
  }

  // todo 如果是post、put或delete请求，则记录请求地址及请求数据到vuex中
  return res.data
}, error => {
  console.error(error)

  let { message } = error
  if (message === 'Network Error') {
    message = '后端接口连接异常'
  } else if (message.includes('timeout')) {
    message = '系统接口请求超时'
  }

  Toast.fail(message)
  return Promise.reject(error)
})

export default request
