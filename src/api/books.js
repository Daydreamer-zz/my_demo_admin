import request from '@/utils/request'

export function getBooklist(params) {
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

export function updateBook(book_id, data) {
  return request({
    url: '/books/' + book_id + '/',
    method: 'patch',
    data
  })
}
