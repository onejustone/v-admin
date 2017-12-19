import localUtil from './util'
import { SET_ROUTES } from '../../mutationTypes/permission'

import { constRoutes, asyncRoutes } from '@router/routes'

const state = {
  routes: constRoutes,
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
    context.commit(SET_ROUTES, { accessRoutes })
  }
}

const mutations = {
  [SET_ROUTES] (state, playLoad) {
    state.routes = [
      ...state.routes,
      ...playLoad.accessRoutes
    ]
    state.addRoutes = playLoad.accessRoutes
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
