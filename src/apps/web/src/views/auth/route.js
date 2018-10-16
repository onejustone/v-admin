import { _import } from 'routeImport'

const route = {
  name: 'login',
  path: '/login',
  component: _import('webviews/auth/Login'),
  meta: { title: 'login' }, hidden: true
}

export default route
