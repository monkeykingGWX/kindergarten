import request from '@/utils/request'

export function getCovers () {
  return request({
    url: '/cover',
    headers: {
      needToken: false
    }
  })
}
