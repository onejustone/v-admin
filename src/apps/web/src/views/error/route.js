import { _import } from 'routeImport'

const route = {
  name: '404',
  path: '/error_404',
  component: _import('web-views/error/Error404.vue'),
  meta: { title: 'error_404' }, hidden: true
}

export default route
