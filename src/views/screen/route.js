import { _import } from 'router/_importModule'

const route = {
  name: 'screenHome',
  path: '/screen_home',
  component: _import('screen/main'),
  meta: { title: 'screen' }, hidden: true
}

export default route
