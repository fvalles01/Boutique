<template>
<div>
  <div id="nav">

<nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><router-link to="/">Boutique en ligne</router-link></a>
    <!-- <div v-if="user.isSignedIn"> -->
        <a v-if="user.isSignedIn" class="nav-link"><router-link to="/inscription">Inscription</router-link></a>
        <a v-if="user.isSignedIn" class="nav-link"><router-link to="/connexion">Connexion</router-link></a>
    <!-- </div> -->
    <!-- <div v-else> -->
          <a v-else class="nav-link"><router-link to="/deconnexion">Déconnexion</router-link></a>
    <!-- </div> -->
</nav>
  </div>
  <router-view/>
  </div>
</template>

<script>

module.exports = {
  // ...
  data(){
    return {
      // ...
      user: {
        isSignedIn: true
      }
    }
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
