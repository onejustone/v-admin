import { _import } from 'routeImport'

const route = {
  name: 'screenHome',
  path: '/screen_home',
  component: _import('web-views/screen/main'),
  meta: { title: 'screen' }, hidden: true
}

export default route
