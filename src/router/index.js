import Vue from 'vue'
import VueRouter from 'vue-router'

import { constRoutes } from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  routes: constRoutes
})
