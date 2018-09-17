import Vue from 'vue'
import VueRouter from 'vue-router'

// 此处只挂载 constRoutes 路由，asyncRoutes 执行 permisson 后再动态挂载
// import { constRoutes } from './routes'
Vue.use(VueRouter)

export default new VueRouter()
