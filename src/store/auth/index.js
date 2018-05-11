import _cloneDeep from 'lodash/cloneDeep'
import * as firebase from 'firebase'

// initialState 
const state = {
  loading: false,
  error: null,
  user: null,
}

// Getters 
const getters = {
  loading: state => state.loading,
  error: state => state.error,
  user (state) { return state.user },
}

// Actions
const actions = {
  
  signUserIn ({ commit }, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false)
        const authedUser = {
          email: user.email,
          id: user.uid
        }
        commit('setUser', authedUser)
      })
      .catch(error => {
        commit('setLoading', false)
        commit('setError', error)
        console.error(error)
      })
  },
    
  autoSignIn ({commit}, payload) {
    commit('setUser', payload)
  },
  
  logout ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
  },
  
  clearError ({commit}) {
    commit('clearError')
  }
}

// Mutations
const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state) {
    state.error = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}