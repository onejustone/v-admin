
import { _import } from './_importModule'

const Layout = _import('layout/Layout')

const constRoutes = [
  { name: 'login', path: '/login', component: _import('auth/login'), meta: { title: 'login' }, hidden: true },
  { name: '404', path: '/404', component: _import('error/error404'), meta: { title: '404' }, hidden: true },

  { path: '', redirect: '/dashboard' }
]

const asyncRoutes = [
  {
    path: '/dashboard', component: Layout, redirect: '/dashboard/index',
    children: [
      {
        name: 'home',
        path: '/dashboard/index',
        component: _import('dashboard/index'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    name: 'components',
    path: '/components',
    component: Layout,
    redirect: '/components/back_to_up',
    meta: { icon: 'document', title: '组件', roles: ['admin'] },
    children: [
      {
        name: 'backto',
        path: '/components/back_to_up',
        component: _import('components/BackToUp'),
        meta: { title: '回到顶部', roles: ['admin'] }
      },
      {
        name: 'list',
        path: '/components/list',
        component: _import('components/list/List'),
        meta: { title: '列表', roles: ['admin'] }
      },
      {
        name: 'test-menu',
        path: '/components/test_menu',
        component: _import('components/TestMenu'),
        meta: { title: 'test-menu' }
      },
      {
        name: 'expand_tree',
        path: '/components/expand_tee',
        component: _import('components/ExpandTree'), meta: { title: '扩展树组件' }
      },
      {
        name: 'cascader',
        path: '/components/cascader',
        component: _import('components/Cascader'),
        meta: { title: 'cascader' }
      },
      {
        name: 'vue',
        path: '/vue',
        component: _import('components/vue/index'),
        meta: { title: 'vue' }
      },
      {
        name: 'rxjsPlayground',
        path: '/rxjs',
        component: _import('rxjs/index'),
        redirect: '/rxjs/side',
        meta: { title: 'rxjsPlayground' },
        children: [
          {
            name: 'rxjsSlide',
            path: '/rxjs/side',
            component: _import('rxjs/Slide'),
            meta: {
              title: 'slide'
            }
          },
          {
            name: 'rxjsCount',
            path: '/rxjs/count',
            component: _import('rxjs/Count'),
            meta: {
              title: 'count'
            }
          },
          {
            name: 'rxjsImage',
            path: '/rxjs/image',
            component: _import('rxjs/Image'),
            meta: {
              title: 'image'
            }
          },
          {
            name: 'rxjsSigned',
            path: '/rxjs/Signed',
            component: _import('rxjs/Signed'),
            meta: {
              title: 'Signed'
            }
          },
          {
            name: 'rxjsForm',
            path: '/rxjs/form',
            component: _import('rxjs/Form'),
            meta: {
              title: 'Form'
            }
          },
          {
            name: 'rxjsOpreator_1',
            path: '/rxjs/opreator_1',
            component: _import('rxjs/operators/Operators1'),
            meta: {
              title: 'opreator_1'
            }
          },
          {
            name: 'rxjsOpreator_3',
            path: '/rxjs/opreator_3',
            component: _import('rxjs/operators/Operators3'),
            meta: {
              title: 'opreator_3'
            }
          },
          {
            name: 'gitHubSearch',
            path: '/rxjs/gitHub',
            component: _import('rxjs/operators/gitHubSearch/index'),
            meta: {
              title: 'gitHubSearch'
            }
          },
          {
            name: 'rxjsDrag',
            path: '/rxjs/drag',
            component: _import('rxjs/demos/SimpleDrag'),
            meta: {
              title: 'simpleDrag'
            }
          }
        ]
      },
      {
        name: 'lazyImagePlayground',
        path: '/lazy_image',
        component: _import('components/LazyImage'),
        meta: { title: 'lazyImagePlayground' }
      },
      {
        name: 'canvas',
        path: '/my_canvas',
        component: _import('components/Canvas'),
        meta: { title: 'myCanvas' }
      },
      {
        name: 'time',
        path: '/time',
        component: _import('components/Time'),
        meta: { title: 'time' }
      }
    ]
  }
]

export {
  constRoutes,
  asyncRoutes
}
