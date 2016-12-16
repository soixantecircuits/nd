import Vue from 'vue'
import Router from 'vue-router'
import Root from '../Root'
import NotFound from '../components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
