const route = {
  name: 'home',
  path: '',
  children: [
    {
      path: '/web/dashboard',
      name: 'dashboard',
      component: () => import('./index.vue'),
      meta: { title: '首页' }
    }
  ]
}

export default route
