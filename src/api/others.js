import request from '@/utils/request'

export function getCovers () {
  return request({
    url: '/cover',
    method: 'get',
    headers: {
      needToken: false
    }
  })
}

export function getTeachers (params) {
  return request({
    url: '/teacher',
    method: 'get',
    params,
    headers: {
      needToken: false
    }
  })
}
