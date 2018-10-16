// import { _import } from 'routeImport'
// import dashboard from './index.vue'

const route = {
  path: '/dashboard', redirect: '/dashboard/index',
  children: [
    {
      name: 'home',
      path: '/dashboard/index',
      component: () => import('./index.vue'),
      // component: _import(`apps/web/src/views/dashboard/index.vue'),
      meta: { title: '首页' }
    }
  ]
}

export default route
