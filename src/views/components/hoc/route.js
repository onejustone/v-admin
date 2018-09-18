import { _import } from 'router/_importModule'
import Hoc from './index.vue'

const route = {
  path: '/components/hoc',
  redirect: '/components/hoc/anchoredHeading',
  meta: { title: 'hoc' },
  component: Hoc,
  children: [
    {
      name: 'anchoredHeading',
      path: '/components/hoc/anchoredHeading',
      component: _import('components/hoc/AnchoredHeading'),
      meta: { title: 'hocAnchoredHeading' }
    }
  ]
}

export default route
