import { _import } from './config'

const routes = [
  {
    name: 'componentsDemo',
    path: '/components-demo',
    component: _import('componentsDemo/Index'),
    redirect: '/components-demo/back-to-up',
    children: [
      {
        name: 'backToUp',
        path: 'back-to-up',
        component: _import('componentsDemo/BackToUp')
      }
    ]
  }
]

export default routes
