
import { _import } from './_importModule'

const constRoutes = [
  {
    name: 'login',
    path: '/login',
    component: _import('auth/login'),
    meta: {
      title: 'login'
    }
  },
  {
    name: '404',
    path: '/404',
    component: _import('error/error404'),
    meta: {
      title: '404'
    }
  },
  {
    path: '',
    redirect: '/layout'
  }
]

const asyncRoutes = [
  {
    path: '/layout',
    name: 'layout',
    component: _import('layout/Layout'),
    meta: {
      title: 'dashboard'
    },
    children: [
      {
        name: 'components',
        path: '/layout/component_demo',
        component: _import('componentsDemo/Index'),
        // redirect: 'back_to_up',
        meta: {
          icon: 'document',
          title: '组件',
          roles: ['admin']
        },
        children: [
          {
            name: 'backTo',
            path: '/layout/component_demo/back_to_top',
            meta: {
              title: '回到顶部',
              roles: ['admin']
            },
            component: _import('componentsDemo/BackToUp')
          },
          {
            name: 'test-menu',
            path: '/layout/component_demo/test_menu',
            meta: {
              title: 'test-menu'
            },
            component: _import('componentsDemo/TestMenu')
          }
        ]
      }
    ]
  }
]

export {
  constRoutes,
  asyncRoutes
}
