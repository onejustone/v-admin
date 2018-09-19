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
      component: _import('components/hoc/SmartList/Example'),
      meta: { title: 'smartList' }
    }
  ]
}

export default route
