import util from '@util'
import { SET_USER_INFO } from '../../mutationTypes/permission'

const state = {
  user: {
  }
}

const getters = {
  isLogin (state, rootState, getters, rootGetters) {
    return util.hasOwn(state.user, 'name')
  }
}

const actions = {
  getUserInfo (context) {
    const userInfo = {
      roles: ['admin']
    }

    context.commit(SET_USER_INFO, { userInfo })
  },

  logOut (context) {
    console.log('yes, logOut')
  }
}

const mutations = {
  [SET_USER_INFO] (state, playLoad) {
    state.user = {
      ...state.user,
      ...playLoad.userInfo
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
