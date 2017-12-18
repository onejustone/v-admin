import { hasOwn } from './typeDetection.js'

const isVnode = function _isVNode (node) {
  return typeof node === 'object' && hasOwn(node, 'componentOptions')
}

const getFirstComponentChild = function _getFirstComponentChild (children) {
  return children && children.filter(c => c && c.tag)[0]
}

export {
  isVnode,
  getFirstComponentChild
}

