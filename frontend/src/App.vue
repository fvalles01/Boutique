<template>
  <!-- <Menu/> -->
  <Produit/>
</template>

<script>

// import Menu from './components/Menu/Menu';
import Produit from './components/Produit/Produit';


export default {
  name: 'App',
  components : {
    // Menu,
    Produit
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
