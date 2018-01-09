// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from '@router'
import store from '@store'

import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import LxDialog from '@/components/dialog'
import './permission'
import Plugins from '@root/plugins/install.js'
import Util from '@root/util/install.js'

import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

// Vue.component('LxDialog', LxDialog)
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(Plugins)
Vue.use(Util)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
