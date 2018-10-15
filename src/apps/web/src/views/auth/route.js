import { _import } from 'routeImport'

const route = {
  name: 'login',
  path: '/login',
  component: _import('web-views/auth/Login'),
  meta: { title: 'login' }, hidden: true
}

export default route
