const recursivefilterAcceessRoutes = function _recursivefilterAcceessRoutes (asyncRoutes, roles) {
  console.log(asyncRoutes, 'asyncRoutes')
  const accessRoutes = asyncRoutes.filter(route => {
    if (hasRoutePermisson(route, roles)) {
      if (route.children) {
        route.children = _recursivefilterAcceessRoutes(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessRoutes
}

const hasRoutePermisson = function _hasRoutePermission (route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  }
  return true
}

export default {
  recursivefilterAcceessRoutes
}
