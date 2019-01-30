// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './src/store'
import router from './src/router'

import App from './App'

// import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Buefy from 'buefy'

// import 'buefy/src/scss/buefy.scss'

Vue.use(Buefy)

import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'

Vue.config.productionTip = false

// Vue.component('LxDialog', LxDialog)
Vue.use(ElementUI)
Vue.use(VueRx, Rx)

new Vue({
  el: '#screen',
  router,
  store,
  template: '<App/>',
  components: { App }
})
