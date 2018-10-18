// import { _import } from 'routeImport'
import dashboard from 'webviews/dashboard/route.js'
import components from 'webviews/components/route.js'

// 固定路由
const constRoutes = [
  // { name: '404', path: '/404', component: import('webviews/error/Error404'), meta: { title: '404' }, hidden: true },
  // { name: 'screen', path: '/screen', component: import('webviews/screen/main'), meta: { title: 'screen' }, hidden: true },
  // { name: 'logOut', path: '/logOut', component: import('webviews/error/Error404'), meta: { title: '404' }, hidden: true },
  { path: '', redirect: '/web/dashboard' }
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
    // Layout 规划了整个应用的布局
    'component': () => import('webviews/layout/Layout')
  })
}

export {
  constRoutes,
  asyncRoutes
}
