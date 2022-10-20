import axios from 'axios'
import { Toast, Dialog } from 'vant'
import { API_BASE_DIR } from '@/config/config'
import Vuex from '@/store/index'
import { deepCompare } from '@/utils/object'

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
    // 带上Jwt-Token请求头
    const token = Vuex.state.jwtToken.token
    config.headers['Jwt-Token'] = token
  }

  if ((method === 'post' || method === 'put' || method === 'delete')) {
    /* 防止重复提交 记录请求地址及请求数据到vuex中 */
    if (!repeatSubmit) {
      const repeatInfo = Vuex.state.repeatInfo
      const now = Date.now()

      if (repeatInfo.url === config.url &&
        deepCompare(repeatInfo.data, config.data) &&
        now - repeatInfo.timestamp < 2000) {
        Toast.loading({ message: '数据正在处理，请勿重复提交' })
        return Promise.reject(new Error('数据正在处理，请勿重复提交'))
      }

      Vuex.dispatch('storeRepeat', {
        url: config.url,
        data: config.data,
        timestamp: now
      })
    }

    /* loadding */
    Toast.loading({
      duration: 0, // 持续展示
      forbidClick: true,
      loadingType: 'spinner',
      overlay: true
    })
  }

  return config
}, error => {
  console.error(error)
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(res => {
  Toast.clear()
  const code = res.data.code
  if (code > 0) {
    if (code === 81001 || code === 81002 || code === 81003) { // 登陆校验失败
      Dialog.confirm({
        message: '登录凭证已失效，是否重新登陆'
      }).then(() => {
        Vuex.dispatch('clearToken')
        location.href = '/#/login'
      }).catch(() => {
        // do nothing
      })

      return Promise.reject(new Error('登录凭证已失效，请重新登录。'))
    } else { // 其他错误
      Toast.fail({
        message: res.data.message,
        overlay: true
      })
      return Promise.reject(res.data.message)
    }
  }
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
