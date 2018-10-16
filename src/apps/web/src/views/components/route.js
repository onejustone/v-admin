// import { import } from 'routeImport'
import hocRoute from './hoc/route'
import lightTale from './lightTable/route'

const route = {
  name: 'components',
  path: '/components',
  redirect: '/components/back_to_up',
  meta: { icon: 'document', title: '组件', roles: ['admin'] },
  children: [
    lightTale,
    hocRoute,
    {
      name: 'backToTop',
      path: '/components/back_to_up',
      component: import('webviews/components/BackToUp'),
      meta: { title: '回到顶部', roles: ['admin'] }
    },
    {
      name: 'catalog',
      path: '/components/catalog',
      component: import('webviews/components/catalog/index'),
      meta: { title: '嵌套导航目录', roles: ['admin'] }
    },
    {
      name: 'scrollBar',
      path: '/components/scroll_bar',
      component: import('webviews/components/ScrollBar'),
      meta: { title: '自定义滚动条', roles: ['admin'] }
    },
    {
      name: 'list',
      path: '/components/list',
      component: import('webviews/components/list/List'),
      meta: { title: '列表', roles: ['admin'] }
    },
    {
      name: 'test-menu',
      path: '/components/test_menu',
      component: import('webviews/components/TestMenu'),
      meta: { title: 'test-menu' }
    },
    {
      name: 'expand_tree',
      path: '/components/expand_tee',
      component: import('webviews/components/ExpandTree'), meta: { title: '扩展树组件' }
    },
    {
      name: 'cascader',
      path: '/components/cascader',
      component: import('webviews/components/Cascader'),
      meta: { title: 'cascader' }
    },
    {
      name: 'vue',
      path: '/vue',
      component: import('webviews/components/vue/index'),
      meta: { title: 'vue' }
    },
    {
      name: 'flower',
      path: '/flower',
      component: import('webviews/components/flower/main'),
      meta: { title: 'flower' }
    },
    {
      name: 'rxjsPlayground',
      path: '/rxjs',
      component: import('webviews/rxjs/index'),
      redirect: '/rxjs/side',
      meta: { title: 'rxjsPlayground' },
      children: [
        {
          name: 'rxjsSlide',
          path: '/rxjs/side',
          component: import('webviews/rxjs/Slide'),
          meta: {
            title: 'slide'
          }
        },
        {
          name: 'rxjsCount',
          path: '/rxjs/count',
          component: import('webviews/rxjs/Count'),
          meta: {
            title: 'count'
          }
        },
        {
          name: 'rxjsImage',
          path: '/rxjs/image',
          component: import('webviews/rxjs/Image'),
          meta: {
            title: 'image'
          }
        },
        {
          name: 'rxjsSigned',
          path: '/rxjs/Signed',
          component: import('webviews/rxjs/Signed'),
          meta: {
            title: 'Signed'
          }
        },
        {
          name: 'rxjsForm',
          path: '/rxjs/form',
          component: import('webviews/rxjs/Form'),
          meta: {
            title: 'Form'
          }
        },
        {
          name: 'rxjsOpreator_1',
          path: '/rxjs/opreator_1',
          component: import('webviews/rxjs/operators/Operators1'),
          meta: {
            title: 'opreator_1'
          }
        },
        {
          name: 'rxjsOpreator_3',
          path: '/rxjs/opreator_3',
          component: import('webviews/rxjs/operators/Operators3'),
          meta: {
            title: 'opreator_3'
          }
        },
        {
          name: 'operator_4',
          path: '/rxjs/operator_4',
          component: import('webviews/rxjs/operators/Operators4'),
          meta: {
            title: 'operator_4'
          }
        },
        {
          name: 'operator_5',
          path: '/rxjs/operator_5',
          component: import('webviews/rxjs/operators/Operators5'),
          meta: {
            title: 'operator_5'
          }
        },
        {
          name: 'operator_6',
          path: '/rxjs/operator_6',
          component: import('webviews/rxjs/operators/Operators6'),
          meta: {
            title: 'operator_6'
          }
        },
        {
          name: 'operator_7',
          path: '/rxjs/operator_7',
          component: import('webviews/rxjs/operators/Operators7'),
          meta: {
            title: 'operator_7'
          }
        },
        {
          name: 'rxjsDrag',
          path: '/rxjs/drag',
          component: import('webviews/rxjs/demos/SimpleDrag'),
          meta: {
            title: 'simpleDrag'
          }
        },
        {
          name: 'rxjsPullToRefresh',
          path: '/rxjs/pull_to_refresh',
          component: import('webviews/rxjs/demos/PullToRefresh'),
          meta: {
            title: 'pullToRefresh'
          }
        },
        {
          name: 'car',
          path: '/rxjs/car',
          component: import('webviews/rxjs/demos/shoppingCar/ShoppingCar'),
          meta: {
            title: 'shoppingCar'
          }
        },
        {
          name: 'breakout',
          path: '/rxjs/breakout',
          component: import('webviews/rxjs/demos/breakout/main'),
          meta: {
            title: 'breakout'
          }
        }
      ]
    },
    {
      name: 'charts',
      path: '/charts',
      component: import('webviews/charts/main'),
      meta: { title: 'charts' },
      redirect: '/charts/bar_chart',
      children: [
        {
          name: 'bar_chart',
          path: '/charts/bar_chart',
          component: import('webviews/charts/barChart/main'),
          meta: { title: 'barChart' }
        },
        {
          name: 'map_chart',
          path: '/charts/map_chart',
          component: import('webviews/charts/map/main'),
          meta: { title: 'mapChart' }
        },
        {
          name: 'population_map',
          path: '/charts/population_map',
          component: import('webviews/charts/populationMap/main'),
          meta: { title: 'populationMap' }
        }
      ]
    },
    {
      name: 'lazyImagePlayground',
      path: '/lazy_image',
      component: import('webviews/components/LazyImage'),
      meta: { title: 'lazyImagePlayground' }
    },
    {
      name: 'canvas',
      path: '/my_canvas',
      component: import('webviews/components/Canvas'),
      meta: { title: 'myCanvas' }
    },
    {
      name: 'time',
      path: '/time',
      component: import('webviews/components/Time'),
      meta: { title: 'time' }
    }
  ]
}

export default route
