import Vue from 'vue'
import App from './App'
import Foo from './components/Foo'
import Bar from './components/Bar'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  {{#if electron}}
  abstract: true,
  {{else}}
  history: true,
  hashbang: false,
  {{/if}}
  transitionOnLoad: true
})

router.map({
  '/': {
    name: 'App',
    component: App,
    subRoutes: {
      '/foo': {
        name: 'Foo',
        component: Foo
      },
      '/bar': {
        name: 'Bar',
        component: Bar
      }
    }
  }
})

export default router
