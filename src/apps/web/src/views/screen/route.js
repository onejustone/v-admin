const route = {
  name: 'screenHome',
  path: '/web/screen_home',
  component: () => import('webviews/screen/main'),
  meta: { title: 'screen' }, hidden: true
}

export default route
