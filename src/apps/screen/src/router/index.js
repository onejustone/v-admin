import Vue from 'vue'
import VueRouter from 'vue-router'
import routeImport from 'routeImport'

// https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/lazy-loading.html#%E6%96%B0%E6%96%B9%E6%A1%88

Vue.use(VueRouter)

const routes = [
  {
    path: '/screen',
    name: 'ScreenHome',
    // import 必须要是顶级的，而 require 不用
    // component: import(../views/Screen.vue')
    component: routeImport('../views/Screen.vue')
  }
]

export default new VueRouter({ routes })
