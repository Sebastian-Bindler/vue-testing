<template>
  <div id="app">
    <Index/>
    <img alt="Vue logo" src="./assets/logo.png">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <router-view></router-view>
  </div>
</template>

<script>
import Index from './components/index.vue'

export default {
  name: 'App',
  components: {
    Index,

  }
}
</script>


    RouterView<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
