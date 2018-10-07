import { _import } from 'router/_importModule'

const route = {
  name: 'login',
  path: '/login',
  component: _import('auth/Login'),
  meta: { title: 'login' }, hidden: true
}

export default route
