import * as typeDetection from './typeDetection'
import * as vDom from './vdom'
import * as common from './common'
import * as generateId from './generateId'

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

  each(generateId, (value, key, obj) => {
    /* eslint-disable */
    Vue.prototype[`$_${key}`] = value
  })

  each(common, (value, key, obj) => {
    /* eslint-disable */
    Vue.prototype[`$_${key}`] = value
  })
}

export default install

