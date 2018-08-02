import fetch from './fetch'
import { Observable } from 'rxjs'

// https://hackernoon.com/using-rxjs-to-handle-http-requests-what-ive-learned-4640aaf4646c
export function get$(url, data) {
  return Observable.fromPromise(fetch({
    method: 'get',
    url: url,
    params: data
  })
  )
    .share()
    .catch(res => {
      console.error(res)
      return Observable.empty()
    })
}

export function xget$(url, data) {
  return Observable.fromPromise(fetch({
    method: 'get',
    url: url,
    withCredentials: true,
    params: data
  }))
    .share()
    .catch(res => {
      console.error(res)
      return Observable.empty()
    })
}

export function post(url, data, options) {
  return Observable.fromPromise(fetch({
    method: 'post',
    url,
    data,
    ...options
  }))
    .share()
    .catch(res => {
      console.error(res)
      return Observable.empty()
    })
}

export function put(url, data, options) {
  return Observable.fromPromise(fetch({
    method: 'put',
    url,
    data,
    ...options
  }))
    .share()
    .catch(res => {
      console.error(res)
      return Observable.empty()
    })
}

export function _delete(url, options) {
  return Observable.fromPromise(fetch({
    method: 'delete',
    url,
    ...options
  }))
    .share()
    .catch(res => {
      console.error(res)
      return Observable.empty()
    })
}

export default {
  get$,
  xget$,
  post,
  put,
  _delete
}
