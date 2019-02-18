import Hoc from './index.vue'

// const BASICPATH = 'webviews'

const route = {
  name: 'hoc',
  path: '/web/components/hoc',
  redirect: '/web/components/hoc/anchoredHeadingWithJsx',
  meta: { title: 'hoc' },
  component: Hoc,
  children: [
    {
      name: 'anchoredHeadingWithJsx',
      path: '/web/components/hoc/AnchoredHeadingWithJsx',
      component: () => import('webviews/components/hoc/AnchoredHeadingWithJSX/Example.vue'),
      meta: { title: 'headingJSX' }
    },
    {
      name: 'smartList',
      path: '/web/components/hoc/smartList',
      component: () => import('webviews/components/hoc/VueFuncSmartList/Example.vue'),
      meta: { title: 'smartList' }
    },
    {
      name: 'vue_mixins_vs_hoc',
      path: '/web/components/hoc/vue_hoc',
      component: () => import('webviews/components/hoc/vueMixinsVsHoc/index.vue'),
      meta: { title: 'vueMixinsVsHoc' }
    }
  ]
}

export default route
