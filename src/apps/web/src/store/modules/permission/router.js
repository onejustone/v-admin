import localUtil from './util'
import * as mType from '../../mutationTypes/permission'

import { constRoutes, asyncRoutes } from '../../../router/config.js'

const state = {
  routes: constRoutes,
  isCollapse: false,
  addRoutes: []
}

const getters = {
  getRoutes (state) {
    return state.routes
  }
}

const actions = {
  async generatorAsyncRoutes (context, playLoad) {
    const roles = ['admin']
    const accessRoutes = localUtil.recursivefilterAcceessRoutes(asyncRoutes, roles)
    context.commit(mType.SET_ROUTES, { accessRoutes })
  }
}

const mutations = {
  [mType.SET_ROUTES] (state, playLoad) {
    state.routes = [
      ...state.routes,
      ...playLoad.accessRoutes
    ]
    state.addRoutes = playLoad.accessRoutes
  },

  [mType.SWITCH_COLLPASE] (state) {
    state.isCollapse = !state.isCollapse
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
