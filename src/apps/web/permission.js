import router from './src/router'
import store from './src/store'

// 未登录时的白名单
const notLoginWhiteList = ['/404', '/login']

// 已经登录，但是无权限时的白名单
const loginButNoRuleWhiteList = ['/test']

router.beforeEach(async (to, from, next) => {
  // 用户是否登录的凭证
  const isLogin = store.getters['permission/auth/isLogin']

  // 未登录
  if (!isLogin) {
    if (notLoginWhiteList.includes(to.path)) {
      return next(to.path)
    }

    return next({ path: '/login' })
  } else {
    if (to.path === '/login' || to.path === '/register') {
      next('/')
    }
  }

  // 登录以后进行权限权限判断
  let hasRoles = store.state.permission.auth.user.roles

  if (!hasRoles) {
    // 如果已经登录，但是没有权限，访问路由在白名单内，直接跳转
    if (loginButNoRuleWhiteList.includes(to.path)) {
      return next(to.path)
    }

    // 如果没有有权限信息，则从新获取权限信息
    try {
      // 获取用户信息
      hasRoles = await store.dispatch('permission/auth/getUserInfo', null, { root: true })

      if (!hasRoles) {
        throw new Error('依然没有获取当前用户相关权限')
      }

      // 根据当前用户角色动态生成路由
      await store.dispatch('permission/router/generatorAsyncRoutes', null, { root: true })

      // 动态挂载路由
      router.addRoutes(store.state.permission.router.routes)

      next({ ...to, replace: true })
      return
    } catch (error) {
      console.error('动态挂载路由时报错了', error)
      store.dispatch('permission/auth/logOut', null, { root: true }).then(_ => {
        console.error('验证失败，请重新登录')
        next({ path: '/login' })
      }).catch(e => {
        console.error('fuck', e)
      })
    }
  }

  next()
})
