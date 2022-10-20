import request from '@/utils/request'

export function getAllNewsCate () {
  return request({
    url: '/newscate',
    method: 'get',
    headers: {
      needToken: false
    }
  })
}
