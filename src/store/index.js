import { createStore } from 'vuex'
import user from './modules/user'
export default createStore({
  getters: {
    token: (state) => state.user.token,
    hasuserInfo: (state) => {
      return JSON.stringify(state.user.userInfo) === '{}'
    },
    userInfo: (state) => state.user.userInfo
  },
  modules: {
    user
  }
})
