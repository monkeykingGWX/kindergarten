import request from '@/utils/request'

export function getTopNews () {
  return request({
    url: '/news/top',
    method: 'get',
    headers: {
      needToken: false
    }
  })
}

export function getNewsList (params) {
  return request({
    url: '/news',
    method: 'get',
    params,
    headers: {
      needToken: false
    }
  })
}
