
const hasOwn = function _hasOwn (obj, key) {
  return isObject(obj) && Object.prototype.hasOwnProperty.call(obj, key)
}

const isString = function _isString (value) {
  return typeof value === 'string' || value instanceof String
}

const isNativeStringType = function _isNativeStringType (type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern'
}

const isEmptyArray = function _isEmptyArray (value) {
  return Array.isArray(value) && !value.length
}

const isEmptyValue = function _isEmptyValue (value, type) {
  if (value === undefined || value === null) {
    return true
  }
  if (isEmptyArray(value)) {
    return true
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true
  }
  return false
}

const isObject = function _isObject (value) {
  return value && typeof value === 'object' && value.constructor === Object
}

const isEmptyObject = function _isEmptyObject (obj) {
  return Object.keys(obj).length === 0
}

const each = function _each (obj, callback) {
  let i, len
  if (Array.isArray(obj)) {
    for (i = 0, len = obj.length; i < len; i++) {
      if (callback(obj[i], i, obj) === false) {
        break
      }
    }
  } else if (isObject(obj)) {
    const keysArr = Object.keys(obj)
    for (const key of keysArr) {
      if (callback(obj[key], key, obj) === false) {
        break
      }
    }
  }
  return obj
}

export {
  hasOwn,
  isString,
  isNativeStringType,
  isEmptyArray,
  isEmptyValue,
  isEmptyObject,
  each
}
