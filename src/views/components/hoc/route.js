import { _import } from 'router/_importModule'
import Hoc from './index.vue'

const route = {
  path: '/components/hoc',
  redirect: '/components/hoc/anchoredHeadingWithJsx',
  meta: { title: 'hoc' },
  component: Hoc,
  children: [
    {
      name: 'anchoredHeadingWithJsx',
      path: '/components/hoc/AnchoredHeadingWithJsx',
      component: _import('components/hoc/AnchoredHeadingWithJSX/Example'),
      meta: { title: 'headingJSX' }
    },
    {
      name: 'smartList',
      path: '/components/hoc/smartList',
      component: _import('components/hoc/VueFuncSmartList/Example'),
      meta: { title: 'smartList' }
    },
    {
      name: 'vue_mixins_vs_hoc',
      path: '/components/hoc/vue_hoc',
      component: _import('components/hoc/vueMixinsVsHoc/index'),
      meta: { title: 'vueMixinsVsHoc' }
    }
  ]
}

export default route
