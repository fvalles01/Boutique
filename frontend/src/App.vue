<template>
  <div>
  <Navigation/>
  <router-view></router-view>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
    },
}

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #fff;
  margin: 0px 10px 0px 10px;
}
#nav a:hover {
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #29a9ff;
}
</style>