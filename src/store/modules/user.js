import { getItem, setItem } from '@/utils/storage'
import { getInfo } from '@/api/login'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || null,
    userInfo: {},
    mens: []
  },

  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', state.token)
    },
    setUserInfo(state, info) {
      state.userInfo = info
    },
    logout(state) {
      state.token = ''
      state.userInfo = {}
      setItem('token', '')
      router.push('/login')
    }
  },
  actions: {
    async getInfo({ commit }) {
      const res = await getInfo()
      commit('setUserInfo', res)
    }
  }
}
