import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import auth from './auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    // Actions, Mutations and Getters for each branch of the store
    // consider an entry index.js to prevent this file from blowing up
    auth: auth,
  },
  strict: true,
  plugins: debug ? [createLogger()] : []
})

export default store