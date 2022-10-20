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

export function getCourse () {
  return request({
    url: '/course',
    method: 'get',
    headers: {
      needToken: false
    }
  })
}

export function getDiets () {
  return request({
    url: '/diet',
    method: 'get',
    headers: {
      needToken: false
    }
  })
}

export function getSchoolInfo () {
  return request({
    url: '/school',
    method: 'get',
    headers: {
      needToken: false
    }
  })
}

export function getCommentOfNews (newsId, params) {
  return request({
    url: '/comments/' + newsId,
    method: 'get',
    headers: {
      needToken: false
    },
    params
  })
}
