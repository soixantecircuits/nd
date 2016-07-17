import Vue from 'vue'

Vue.transition('default', {
  css: false,
  beforeEnter: function (el) {
    // ...
  },
  enter: function (el, done) {
    TweenMax.fromTo(el, 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: function () {
      done()
    }})
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },

  beforeLeave: function (el) {
    // ...
  },
  leave: function (el, done) {
    TweenMax.fromTo(el, 0.5, {y: 0, opacity: 1}, {y: 100, opacity: 0, onComplete: function () {
      done()
    }})
  },
  afterLeave: function (el) {
    // ...
  },
  leaveCancelled: function (el) {
    // ...
  }
})
