
import { _import } from './_importModule'

const Layout = _import('layout/Layout')

const constRoutes = [
  { name: 'login', path: '/login', component: _import('auth/login'), meta: { title: 'login' }, hidden: true },

  { name: '404', path: '/404', component: _import('error/error404'), meta: { title: '404' }, hidden: true },

  {
    path: '',
    redirect: '/dashboard'
  }
]

const asyncRoutes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: '/dashboard/index',
        component: _import('dashboard/index'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    component: Layout,
    redirect: '/components/båck_to_up',
    meta: { icon: 'document', title: '组件', roles: ['admin'] },
    children: [
      {
        path: '/components/båck_to_up',
        name: 'backto',
        component: _import('components/BackToUp'),
        meta: {
          title: '回到顶部',
          roles: ['admin']
        }
      },
      {
        path: '/components/test_menu',
        name: 'test-menu',
        component: _import('components/TestMenu'),
        meta: {
          title: 'test-menu'
        }
      }
    ]
  }
]

export {
  constRoutes,
  asyncRoutes
}
