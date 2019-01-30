// import dashboard from './index.vue'

const route = {
  meta: { title: '首页' },
  path: '/web/dashboard', redirect: '',
  children: [
    {
      path: '/web/dashboard/index',
      name: 'dashboard',
      component: () => import('./index.vue'),
      // component: _import(`apps/web/src/views/dashboard/index.vue'),
      meta: { title: '面板' }
    }
  ]
}

export default route
