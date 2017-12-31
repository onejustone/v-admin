import router from './router'
import store from './store'

const whiteList = ['/404', '/login']

router.beforeEach((to, from, next) => {
  if (store.getters['permission/auth/isLogin']) {
    if (to.path === '/login' || to.path === '/register') {
      next({ path: '/' })
    } else if (!store.state.permission.auth.user.roles) {
      console.log(store.state.permission.auth.user)
      store.dispatch('permission/auth/getUserInfo', null, { root: true }).then(roles => {
        store.dispatch('permission/router/generatorAsyncRoutes', null, { root: true }).then(_ => {
          router.addRoutes(store.state.permission.router.routes)
          next({ ...to, replace: true })
        }).catch(_ => {
          store.dispatch('permission/auth/logOut', null, { root: true }).then(_ => {
            this.$message.error('验证失败，请重新登录')
            next({ path: '/login' })
          })
        })
      })
    } else {
      next()
    }
  } else if (whiteList.includes(to.path)) {
    next()
  } else {
    next({ path: '/login' })
  }
})
