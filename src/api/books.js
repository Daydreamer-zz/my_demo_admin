import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/books',
    method: 'get',
    params
  })
}

export function deleteBook(id) {
  return request({
    url: '/books/' + id + '/',
    method: 'delete'
  })
}
