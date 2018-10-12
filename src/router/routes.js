import { _import } from './_importModule'
import dashboard from 'views/dashboard/route.js'
import components from 'views/components/route.js'

// Layout 规划了整个应用的布局
const Layout = _import('layout/Layout')

// 固定路由
const constRoutes = [
  { name: '404', path: '/404', component: _import('error/Error404'), meta: { title: '404' }, hidden: true },
  { name: 'screen', path: '/screen', component: _import('screen/main'), meta: { title: 'screen' }, hidden: true },
  { name: 'logOut', path: '/logOut', component: _import('error/Error404'), meta: { title: '404' }, hidden: true },
  { path: '', redirect: '/dashboard' }
]

// 需要异步加载的路由列表，在系统初始时会通过 permisson 对该列表中的路由进行权限过滤
// 甚至可以支持服务器端配置
const asyncRoutesList = [
  dashboard,
  components
]

const asyncRoutes = []

for (const item of asyncRoutesList) {
  asyncRoutes.push({
    ...item,
    'component': Layout
  })
}

export {
  constRoutes,
  asyncRoutes
}
