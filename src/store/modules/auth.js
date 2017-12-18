import util from '@util'

const state = {
  user: {
    name: 'jack'
  }
}

const getters = {
  isLogin (state, rootState, getters, rootGetters) {
    return util.hasOwn(state.user, 'name')
  }
}

const actions = {

}

export default {
  namespace: true,
  state,
  actions,
  getters
}