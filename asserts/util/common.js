import { isEmptyArray } from './typeDetection'
import utils from 'util'

const deepCloneObj = function _deepCloneObj (sourceObj) {
  if (!sourceObj && typeof sourceObj !== 'object') {
    console.warn('sourceObj type is not object')
    return null
  }

  const targetObj = Array.isArray(sourceObj) ? [] : {}

  for (const key in sourceObj ) {
    const content = sourceObj[key]
    targetObj[key] = (typeof content === 'object') ? _deepCloneObj(content) : content
  }

  return targetObj
}

const getCascaderNode = function _getCascaderNode (_value, _options, _props) {
  if (!_value || isEmptyArray(_value)) {
    console.warn('getCascaderNode value is empty')
    return
  }

  if (!_options || isEmptyArray(_options)) {
    console.warn('getCascaderNode options is empty')
    return
  }

  let options = _options

  // const labelKey = _props.label || 'label'
  const childrenKey = _props.children || 'children'
  const valueKey = _props.value || 'value'

  const currentNode = []

  _value.forEach(value => {
    const targetOption = options && options.find(option => option[valueKey] === value)
    if (targetOption) {
      currentNode.push(targetOption)
      options = targetOption[childrenKey]
    }
  })

  return currentNode
}

const getAncestorNodes = function _getAncestorNodes (currentId, valueKey, titileOptions) {
  let ancestorNodes = []

  const parentNode = getParent(currentId, valueKey, titileOptions)

  if (parentNode[valueKey] !== currentId) {
    if (utils.hasOwn(parentNode, 'children')) {
      ancestorNodes = [
        ..._getAncestorNodes(currentId, valueKey, parentNode.children)
      ]
    } else {
      console.error('error, not find targetNode')
      throw new Error()
    }
  }

  ancestorNodes.push(parentNode)

  return ancestorNodes
}

const getParent = function _getParent (currentId, valueKey, titileOptions) {
  let parentNode = null

  parentNode = titileOptions.find(item => {
    if (item[valueKey] === currentId) {
      return true
    } else if (utils.hasOwn(item, 'children')) {
      return _getParent(currentId, valueKey, item.children)
    }
  })

  return parentNode
}

const getPropByPath = function _getPropByPath (obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    const key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
}

const getValuePropByPath = function _getValuePropByPath (obj, path, strict) {
  return getPropByPath(obj, path, strict).v
}

export {
  deepCloneObj,
  getAncestorNodes,
  getCascaderNode,
  getPropByPath,
  getValuePropByPath
}
