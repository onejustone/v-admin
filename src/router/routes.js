
import { _import } from './_importModule'

const constRoutes = [
  {
    path: '',
    redirect: '/components-demo'
  },
  {
    name: 'login',
    path: '/login',
    component: _import('auth/login')
  },
  {
    name: '404',
    path: '/404',
    component: _import('error/404'),
    meta: {
      title: '404'
    }
  }
]

const asyncRoutes = [
  {
    name: 'componentsDemo',
    path: '/components-demo',
    component: _import('componentsDemo/Index'),
    redirect: '/components-demo/back-to-up',
    meta: {
      icon: 'document',
      title: '组件'
    },
    children: [
      {
        name: 'backToUp',
        path: 'back_to_up',
        meta: {
          title: '回到顶部',
          roles: ['admin']
        },
        component: _import('componentsDemo/BackToUp')
      },
      {
        name: 'menu',
        path: 'menu',
        meta: {
          title: 'menu'
        },
        component: _import('componentsDemo/Menu')
      }
    ]
  }
]

export {
  constRoutes,
  asyncRoutes
}
