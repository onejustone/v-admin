import router './router'
import store './store'

const whiteList = ['/404']

router.beforeEach(to, from, next) {
  if (store.permisson.auth.getters.isLogin) {
    if (to.path === '/login' || to.path === '/register') {
      next('/')
    } else if (store.permisson.auth.user.roles.length === 0) {
      store.permisson.auth.actions('getUserInfo').then(data => {
        store.permisson.router.actions('generat')
      })
    }
  else if (whiteList.includes(to.path)) {
    next()
  } else {
    next('/login')
  }
}

