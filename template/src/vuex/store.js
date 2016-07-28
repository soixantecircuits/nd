import Vue from 'vue'
import Vuex from 'vuex'

import settings from './../lib/settings.js'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  count: settings.count.default
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  DECREMENT (state, amount) {
    state.count = state.count - amount
  },
  INCREMENT (state, amount) {
    state.count = state.count + amount
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})
