import { _import } from 'routeImport'

const route = {
  name: 'screenHome',
  path: '/screen_home',
  component: _import('webviews/screen/main'),
  meta: { title: 'screen' }, hidden: true
}

export default route
