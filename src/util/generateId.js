import UUID from 'uuid'

function generateId (perfix = '!') {
  return `${perfix}${String(UUID.v1())}`
}

export {
  generateId
}
