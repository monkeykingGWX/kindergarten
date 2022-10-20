import request from '@/utils/request'

export function userReg (data) {
  return request({
    url: '/user/reg',
    data,
    method: 'post',
    headers: {
      needToken: false
    }
  })
}

export function userLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data,
    headers: {
      needToken: false,
      repeatSubmit: false
    }
  })
}

export function getUserInfo () {
  return request({
    url: '/auth/user',
    method: 'get'
  })
}

export function userApply (data) {
  return request({
    url: '/auth/apply',
    method: 'post',
    data
  })
}

export function userSendComment (data) {
  return request({
    url: '/auth/comments',
    method: 'post',
    data
  })
}

export function userComment (params) {
  return request({
    url: '/auth/comments',
    method: 'get',
    params
  })
}

export function modifyUserInfo (data) {
  return request({
    url: '/auth/user',
    method: 'put',
    data
  })
}
