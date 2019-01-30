const route = {
  name: 'tools',
  path: '/web/tools',
  children: [
    {
      path: '/web/tools/sms_bomb',
      name: 'sms_bomb',
      component: () => import('./smsBomb'),
      meta: { title: '短信轰炸' }
    }
  ]
}

export default route
