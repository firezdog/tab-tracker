import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedIn: false
  },
  mutations: {
    initialiseStore (state) {
      // Check if there is something in storage.
      if (localStorage.getItem('store')) {
        // Replace current state with store (using spread to merge)
        let store = JSON.parse(localStorage.getItem('store'))
        this.replaceState({...state, ...store})
      }
    },
    setToken (state, token) {
      state.token = token
    },
    setUser (state, user) {
      state.user = user
    },
    setIsLoggedIn (state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setIsLoggedIn ({commit}, isLoggedIn) {
      commit('setIsLoggedIn', isLoggedIn)
    }
  }
})

store.commit('initialiseStore')

// Cache store in local storage
store.subscribe((mutation, state) => {
  // Store the state as a JSON item under 'store' key.
  localStorage.setItem('store', JSON.stringify(state))
})

export default store
