import router from './router'
import store from './store'

// 未登录时的白名单
const notLoginWhiteList = ['/404', '/login']

// 已经登录，但是无权限时的白名单
const loginButNoRuleWhiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 用户是否登录的凭证
  const isLogin = store.getters['permission/auth/isLogin']

  // 未登录
  if (!isLogin) {
    if (notLoginWhiteList.includes(to.path)) {
      return next(to.path)
    }

    return next({ path: '/login' })
  }

  // 登录以后进行权限权限判断
  const hasRoles = store.state.permission.auth.user.roles

  if (!hasRoles) {
    // 登录特殊判断
    if (to.path === '/login') next()

    // 如果已经登录，但是没有权限，访问路由在白名单内，直接跳转
    if (loginButNoRuleWhiteList.includes(to.path)) {
      return next(to.path)
    }

    // 如果没有有权限信息，则从新获取权限信息
    try {
      // 获取用户信息
      await store.dispatch('permission/auth/getUserInfo', null, { root: true })
      console.log(hasRoles, 'fetch user info after')

      if (!hasRoles) {
        throw new Error('依然没有获取当前用户相关权限')
      }

      // 根据当前用户角色动态生成路由
      await store.dispatch('permission/router/generatorAsyncRoutes', null, { root: true })

      // 动态挂载路由
      router.addRoutes(store.state.permission.router.routes)

      next({ ...to, replace: true })
    } catch (error) {
      store.dispatch('permission/auth/logOut', null, { root: true }).then(_ => {
        // this.$message.error('验证失败，请重新登录')
        next({ path: '/login' })
      }).catch(e => {
        console.error('fuck', e)
      })
    }
    // next()
    // whiteList.includes(to.path)
  }

  next()
    // else if (!) {
      // .then(roles => {
      //   .then(_ => {
      //     router.addRoutes(store.state.permission.router.routes)
      //     next({ ...to, replace: true })
      //   }).catch(e => {
      //     console.error(e)
      //     store.dispatch('permission/auth/logOut', null, { root: true }).then(_ => {
      //       this.$message.error('验证失败，请重新登录')
      //       next({ path: '/login' })
      //     })
      //   })
      // })
    // } else {
      // next()
    // }
  // } else (whiteList.includes(to.path)) {
  //   next()
  // }
})
