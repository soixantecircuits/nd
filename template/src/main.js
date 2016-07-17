import 'gsap'

import Vue from 'vue'
import router from './router'
import './transitions'

const App = Vue.extend({})

router.start(App, 'body')
