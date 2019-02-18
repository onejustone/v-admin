// import dashboard from './index.vue'

const route = {
  name: 'home',
  meta: { title: '首页' },
  path: '/web/dashboard',
  component: () => import('./index.vue'),
  redirect: ''
  // children: [
  //   {
  //     path: '/web/dashboard/index',
  //     name: 'dashboard',
  //     component: () => import('./index.vue'),
  //     // component: _import(`apps/web/src/views/dashboard/index.vue'),
  //     meta: { title: '首页' }
  //   }
  // ]
}

export default route
