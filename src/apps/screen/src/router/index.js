import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/screen',
    name: 'ScreenHome',
    component: () => import('../views/Screen.vue')
  }
]

export default new VueRouter({ routes })
