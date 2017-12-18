import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

import permission from './modules/permission.js'

Vue.use(Vuex)

const state = {

}

const store = new Vuex({
  strict: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    permission
  }
})

export default store

