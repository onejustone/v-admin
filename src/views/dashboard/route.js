import { _import } from 'router/_importModule'

const route = {
  path: '/dashboard', redirect: '/dashboard/index',
  children: [
    {
      name: 'home',
      path: '/dashboard/index',
      component: _import('dashboard/index'),
      meta: { title: '首页' }
    }
  ]
}

export default route
