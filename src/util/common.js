const deepCopy = function _deepCopy (sourceObj) {
  if (!sourceObj && typeof sourceObj !== 'object') {
    console.warn('sourceObj type is not object')
    return null
  }

  let targetObj = Array.isArray(sourceObj) ? [] : {}

  for (const key in sourceObj ) {
    const content = sourceObj[key]
    targetObj[key] = (typeof content === 'object') ? _deepCopy(content) : content
  }

  return targetObj
}

export {
  deepCopy
}