// () => import { () => import } from 'routeImport'
import hocRoute from './hoc/route'
import lightTale from './lightTable/route'

const route = {
  name: 'components',
  path: '/web/components',
  redirect: '/web/components/back_to_up',
  meta: { icon: 'document', title: '组件', roles: ['admin'] },
  children: [
    lightTale,
    hocRoute,
    {
      name: 'backToTop',
      path: '/web/components/back_to_up',
      component: () => import('webviews/components/BackToUp'),
      meta: { title: '回到顶部', roles: ['admin'] }
    },
    {
      name: 'jsxTest',
      path: '/web/components/jsx',
      component: () => import('webviews/components/jsx/Test'),
      meta: { title: 'testJsx', roles: ['admin'] }
    },
    {
      name: 'catalog',
      path: '/web/components/catalog',
      component: () => import('webviews/components/catalog/index'),
      meta: { title: '嵌套导航目录', roles: ['admin'] }
    },
    {
      name: 'scrollBar',
      path: '/web/components/scroll_bar',
      component: () => import('webviews/components/ScrollBar'),
      meta: { title: '自定义滚动条', roles: ['admin'] }
    },
    {
      name: 'list',
      path: '/web/components/list',
      component: () => import('webviews/components/list/List'),
      meta: { title: '列表', roles: ['admin'] }
    },
    {
      name: 'test-menu',
      path: '/web/components/test_menu',
      component: () => import('webviews/components/TestMenu'),
      meta: { title: 'test-menu' }
    },
    {
      name: 'expand_tree',
      path: '/web/components/expand_tee',
      component: () => import('webviews/components/ExpandTree'), meta: { title: '扩展树组件' }
    },
    {
      name: 'cascader',
      path: '/web/components/cascader',
      component: () => import('webviews/components/Cascader'),
      meta: { title: 'cascader' }
    },
    {
      name: 'vue',
      path: '/web/vue',
      component: () => import('webviews/components/vue/index'),
      meta: { title: 'vue' }
    },
    {
      name: 'flower',
      path: '/web/flower',
      component: () => import('webviews/components/flower/main'),
      meta: { title: 'flower' }
    },
    {
      name: 'rxjsPlayground',
      path: '/web/rxjs',
      component: () => import('webviews/rxjs/index'),
      redirect: '/web/rxjs/side',
      meta: { title: 'rxjsPlayground' },
      children: [
        {
          name: 'rxjsSlide',
          path: '/web/rxjs/side',
          component: () => import('webviews/rxjs/Slide'),
          meta: {
            title: 'slide'
          }
        },
        {
          name: 'rxjsCount',
          path: '/web/rxjs/count',
          component: () => import('webviews/rxjs/Count'),
          meta: {
            title: 'count'
          }
        },
        {
          name: 'rxjsImage',
          path: '/web/rxjs/image',
          component: () => import('webviews/rxjs/Image'),
          meta: {
            title: 'image'
          }
        },
        {
          name: 'rxjsSigned',
          path: '/web/rxjs/Signed',
          component: () => import('webviews/rxjs/Signed'),
          meta: {
            title: 'Signed'
          }
        },
        {
          name: 'rxjsForm',
          path: '/web/rxjs/form',
          component: () => import('webviews/rxjs/Form'),
          meta: {
            title: 'Form'
          }
        },
        {
          name: 'rxjsOpreator_1',
          path: '/web/rxjs/opreator_1',
          component: () => import('webviews/rxjs/operators/Operators1'),
          meta: {
            title: 'opreator_1'
          }
        },
        {
          name: 'rxjsOpreator_3',
          path: '/web/rxjs/opreator_3',
          component: () => import('webviews/rxjs/operators/Operators3'),
          meta: {
            title: 'opreator_3'
          }
        },
        {
          name: 'operator_4',
          path: '/web/rxjs/operator_4',
          component: () => import('webviews/rxjs/operators/Operators4'),
          meta: {
            title: 'operator_4'
          }
        },
        {
          name: 'operator_5',
          path: '/web/rxjs/operator_5',
          component: () => import('webviews/rxjs/operators/Operators5'),
          meta: {
            title: 'operator_5'
          }
        },
        {
          name: 'operator_6',
          path: '/web/rxjs/operator_6',
          component: () => import('webviews/rxjs/operators/Operators6'),
          meta: {
            title: 'operator_6'
          }
        },
        {
          name: 'operator_7',
          path: '/web/rxjs/operator_7',
          component: () => import('webviews/rxjs/operators/Operators7'),
          meta: {
            title: 'operator_7'
          }
        },
        {
          name: 'rxjsDrag',
          path: '/web/rxjs/drag',
          component: () => import('webviews/rxjs/demos/SimpleDrag'),
          meta: {
            title: 'simpleDrag'
          }
        },
        {
          name: 'rxjsPullToRefresh',
          path: '/web/rxjs/pull_to_refresh',
          component: () => import('webviews/rxjs/demos/PullToRefresh'),
          meta: {
            title: 'pullToRefresh'
          }
        },
        {
          name: 'car',
          path: '/web/rxjs/car',
          component: () => import('webviews/rxjs/demos/shoppingCar/ShoppingCar'),
          meta: {
            title: 'shoppingCar'
          }
        },
        {
          name: 'breakout',
          path: '/web/rxjs/breakout',
          component: () => import('webviews/rxjs/demos/breakout/main'),
          meta: {
            title: 'breakout'
          }
        }
      ]
    },
    {
      name: 'charts',
      path: '/web/charts',
      component: () => import('webviews/charts/main'),
      meta: { title: 'charts' },
      redirect: '/web/charts/bar_chart',
      children: [
        {
          name: 'bar_chart',
          path: '/web/charts/bar_chart',
          component: () => import('webviews/charts/barChart/main'),
          meta: { title: 'barChart' }
        },
        {
          name: 'map_chart',
          path: '/web/charts/map_chart',
          component: () => import('webviews/charts/map/main'),
          meta: { title: 'mapChart' }
        },
        {
          name: 'population_map',
          path: '/web/charts/population_map',
          component: () => import('webviews/charts/populationMap/main'),
          meta: { title: 'populationMap' }
        }
      ]
    },
    {
      name: 'lazyImagePlayground',
      path: '/web/lazy_image',
      component: () => import('webviews/components/LazyImage'),
      meta: { title: 'lazyImagePlayground' }
    },
    {
      name: 'canvas',
      path: '/web/my_canvas',
      component: () => import('webviews/components/Canvas'),
      meta: { title: 'myCanvas' }
    },
    {
      name: 'time',
      path: '/web/time',
      component: () => import('webviews/components/Time'),
      meta: { title: 'time' }
    }
  ]
}

export default route
