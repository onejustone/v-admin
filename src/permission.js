import router from './router'
import store from './store'

const whiteList = ['/404']

router.beforeEach((to, from, next) => {
  if (store.getters['permission/auth/isLogin']) {
    if (to.path === '/login' || to.path === '/register') {
      next('/')
    } else if (!store.state.permission.auth.user.roles) {
      console.log(store.state.permission.auth.user, 'user')
      store.dispatch('permission/auth/getUserInfo', null, { root: true }).then(roles => {
        store.dispatch('permission/router/generatorAsyncRoutes', null, { root: true }).then(_ => {
          router.addRoutes(store.state.permission.router.addRoutes)
        })
      })
    }
  } else if (whiteList.includes(to.path)) {
    next()
  } else {
    next('/login')
  }
})
