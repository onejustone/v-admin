const route = {
  name: 'login',
  path: '/login',
  component: () => import('webviews/auth/Login'),
  meta: { title: 'login' }, hidden: true
}

export default route
