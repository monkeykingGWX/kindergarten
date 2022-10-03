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
