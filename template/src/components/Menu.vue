<template>
  <ul class="list-reset">
    <li class="inline-block mr1">
      <a v-link="{ name: 'App', exact: true }">home</a>
    </li>
    <li class="inline-block mr1">
      <a v-link="{ name: 'Foo' }">foo</a>
    </li>
    <li class="inline-block mr1">
      <a v-link="{ name: 'Bar' }">bar</a>
    </li>
  </ul>
</template>

<script></script>

<style scoped>
.v-link-active {
  text-decoration: line-through !important;
}
li {
  display: inline-block;
  list-style: none;
  margin-left: 10px;
}
li:first-child {
  margin-left: 0;
}
</style>
