// import { _import } from 'routeImport'
import Hoc from './index.vue'

// const BASICPATH = 'webviews'

const route = {
  path: '/components/hoc',
  redirect: '/components/hoc/anchoredHeadingWithJsx',
  meta: { title: 'hoc' },
  component: Hoc,
  children: [
    {
      name: 'anchoredHeadingWithJsx',
      path: '/components/hoc/AnchoredHeadingWithJsx',
      component: import('webviews/components/hoc/AnchoredHeadingWithJSX/Example.vue'),
      meta: { title: 'headingJSX' }
    },
    {
      name: 'smartList',
      path: '/components/hoc/smartList',
      component: import('webviews/components/hoc/VueFuncSmartList/Example.vue'),
      meta: { title: 'smartList' }
    },
    {
      name: 'vue_mixins_vs_hoc',
      path: '/components/hoc/vue_hoc',
      component: import('webviews/components/hoc/vueMixinsVsHoc/index.vue'),
      meta: { title: 'vueMixinsVsHoc' }
    }
  ]
}

export default route
