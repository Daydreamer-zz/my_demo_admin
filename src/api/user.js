import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login/',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info/',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function createUser(data) {
  return request({
    url: '/user_create/',
    method: 'post',
    data
  })
}

export function activateUser(code) {
  return request({
    url: '/user_activate/' + code,
    method: 'get'
  })
}
