// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'

import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import LxDialog from '@/components/dialog'

import Plugins from '@root/plugins/install.js'

import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

// Vue.component('LxDialog', LxDialog)
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(Plugins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
