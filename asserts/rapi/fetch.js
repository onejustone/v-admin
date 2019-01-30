import axios from 'axios'
import { Message } from 'element-ui'
import humps from 'humps'

const fetch = axios.create({
  timeout: 30000
})

fetch.interceptors.response.use(
  response => {
    const res = response
    if (res.status !== 200) {
      // if (res.error && res.error.level < 2) {
      //   Message({
      //     message: response.data.error.message,
      //     type: 'error',
      //     duration: 3 * 1000
      //   })
      // }

      // if (res.error && res.error.level === 2) {
      //   Message({
      //     message: '出错啦～',
      //     type: 'error',
      //     duration: 3 * 1000
      //   })
      // }

      // if (res.error && res.error.code === 10001) {
      //   window.location.assign('/auth/login')
      // }
      return Promise.reject(res.error)
    }
    return Promise.resolve(humps.camelizeKeys(res.data))
  },
  error => {
    Message({
      message: error,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default fetch
