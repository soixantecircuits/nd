import Vue from 'vue'
import App from './components/App'
import router from './lib/router'
import store from './vuex/store'

{{#if electron}}
var settings = require('electron').remote.getGlobal('settings') // Global variable set in mainProcess
{{else}}
var settings = SETTINGS // Global variable set in process
{{/if}}

const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app');
