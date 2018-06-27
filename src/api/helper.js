import fetch from './fetch'
import humps from 'humps'

export function get (url, data = {}) {
  const params = humps.decamelizeKeys(data)

  return fetch({
    method: 'get',
    url: url,
    params: params
  })
}

export function xget (url, data = {}) {
  const params = humps.decamelizeKeys(data)

  return fetch({
    method: 'get',
    url: url,
    withCredentials: true,
    params: params
  })
}

export function post (url, data, options) {
  data = humps.decamelizeKeys(data)
  return fetch({
    method: 'post',
    url,
    data,
    ...options
  })
}

export function put (url, data, options) {
  data = humps.decamelizeKeys(data)
  return fetch({
    method: 'put',
    url,
    data,
    ...options
  })
}

export function _delete (url, options) {
  return fetch({
    method: 'delete',
    url,
    ...options
  })
}

export default {
  get,
  xget,
  post,
  put,
  _delete
}
