import dashboard from 'webviews/dashboard/route.js'
import components from 'webviews/components/route.js'
// import tools from 'webviews/tools/route.js'

// 固定路由，也是顶级路由，constRoutes 中的路由不直接挂载到 App.vue 下的 router-view
const constRoutes = [
  { path: '', redirect: '/web/screen' },
  {
    name: '404', path: '/web/404',
    component: () => import('webviews/error/Error404.vue'),
    meta: { title: '404' }
  },
  {
    name: 'screen', path: '/web/screen',
    component: () => import('webviews/screen/main'),
    meta: { title: 'screen' }
  }
  // {
  //   name: 'home',
  //   meta: {
  //     title: '首页'
  //   },
  //   path: '/web/dashboard',
  //   component: () => import('webviews/dashboard/index.vue')
  // }
]

// 需要异步加载的路由列表，在系统初始时会通过 permisson 对该列表中的路由进行权限过滤
// 甚至可以支持服务器端配置
// asyncRoutesList 中所有的路由都是挂载到 Layout 中的 app-main 下 router-view

const asyncRoutesList = [
  dashboard,
  components
  // tools
]

const asyncRoutes = []

for (const item of asyncRoutesList) {
  asyncRoutes.push({
    ...item,
    // Layout.vue 规划了整个应用的布局,
    'component': () => import('webviews/layout/Layout.vue')
  })
}

console.log(asyncRoutes, 'asyncRoutes');

export {
  constRoutes,
  asyncRoutes
}
