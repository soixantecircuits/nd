<template>
  <div class="root">
    <counter></counter>
    <p>
      Welcome to neodymium!
    </p>
    <p>
      To get a better understanding of how this works, check out
      <a href="http://soixantecircuits.github.io/nd" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/soixantecircuits/nd" target="_blank">repository</a>.
    </p>
  </div>
</template>

<script>
import Counter from './components/Counter'
export default {
  components: {
    Counter
  }
}
</script>
<style>

html {
  height: 100%;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
#app p {
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}

#app > div {
  position: absolute;
  width: 100%;
}

</style>
