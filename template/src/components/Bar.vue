<template>
  <div class="bar">
    <h1>Bar</h1>
    <p>{{ count }}</p>
    <button @click='decrementCounter'>-</button>
    <button @click='incrementCounter'>+</button>
  </div>
</template>

<script>
import { decrementCounter, incrementCounter } from '../vuex/actions'
import { getCount } from '../vuex/getters'

export default {
  name: 'Bar',
  vuex: {
    getters: {
      count: getCount
    },
    actions: {
      decrementCounter,
      incrementCounter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>