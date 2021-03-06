// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import store from './src/store';
import router from './src/router';
import './src/router/permission';
import Directives from '../../directives';

import * as Sentry from '@sentry/browser';

import App from './App';

// import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Buefy from 'buefy';

// import 'buefy/src/scss/buefy.scss';

Vue.use(Buefy);

import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';

import Plugins from 'plugins/install.js';
import Util from 'util/install.js';

import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;

// Vue.component('LxDialog', LxDialog);
Vue.use(Directives);
Vue.use(ElementUI);
Vue.use(VueRx, Rx);
Vue.use(VueI18n);
Vue.use(Plugins);
Vue.use(Util);

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://5ac64cac343b427a83d45b0c759e946c@sentry.io/1382208',
    integrations: [new Sentry.Integrations.Vue({
      Vue
    })]
  });
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
