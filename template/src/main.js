'use strict'

import Vue from 'vue'
import App from './components/App'
import router from './lib/router'
import store from './vuex/store'

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
