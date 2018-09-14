// import { _import } from 'router/_importModule'
import Index from './index.vue'

const route = {
  path: '/dashboard', redirect: '/dashboard/index',
  children: [
    {
      name: 'home',
      path: '/dashboard/index',
      component: Index,
      // component: _import('views/dashboard/index'),
      meta: { title: '首页' }
    }
  ]
}

export default route
