import { hasOwn } from './util.js'

export function isVNode (node) {
  return typeof node === 'object' && hasOwn(node, 'componentOptions')
}

export function getFirstComponentChild (children) {
  // body...
  return children && children.filter(c => c && c.tag)[0]
}
