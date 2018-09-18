import { _import } from 'router/_importModule'

const route = {
  name: '404',
  path: '/error_404',
  component: _import('error/Error404'),
  meta: { title: 'error_404' }, hidden: true
}

export default route
