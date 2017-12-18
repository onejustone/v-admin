import * as typeDetection from './typeDetection'
import * as vDom from './vdom'

const each = typeDetection.each

const install = Vue => {
  each(typeDetection, (value, key, obj) => {
    /* eslint-disable */
    Vue.prototype[`$_${key}`] = value
  })

  each(vDom, (value, key, obj) => {
    /* eslint-disable */
    Vue.prototype[`$_${key}`] = value
  })
}

export default install

