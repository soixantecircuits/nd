export const decrementCounter = function ({ dispatch, state }) {
  dispatch('DECREMENT', 1)
}

export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
}
