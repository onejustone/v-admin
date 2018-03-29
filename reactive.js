function updateView (params) {
  console.log('updateView')
}

function defReactive (obj, key, value) {
  Object.defineProperty(obj, key, {
    enumerable: true, // 属性是否可以枚举, default: false
    configurable: true, // 属性是否可修改，是否可以被删除, default: false
    get: function reactiveGerrer () {
      return value
    },

    set: function reactiveSetter (newValue) {
      console.log('newValue', newValue)
      console.log('oldValue', value)
      if (newValue === value) return
      value = newValue
      updateView()
    }
  })
}

function observer (obj) {
  if (!obj || typeof obj !== 'object') {
    return
  }

  Object.keys(obj).forEach((key, index, self) => {
    defReactive(obj, key, obj[key])
  })
}

class Vue {
  constructor (options) {
    this._data = options.data || {}
    observer(this._data)
  }
}
/* eslint-disable */
if (typeof exports !== 'undefined') {
  if (module && module.exports) {
    exports = module.exports = Vue
    exports.Vue = Vue
  }
} else if (typeof define === 'function' && define.amd) {
  definde('Vue', [], function () {
    return Vue
  })
} else {
  this.Vue = Vue
}