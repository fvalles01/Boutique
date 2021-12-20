<template>
  <div id="nav">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link v-if="this.$route.name == '/'" class="navbar-brand" to="/">Boutique en ligne</router-link>
        <router-link v-if="this.$route.name == '/'" class="nav-link" to="/login">Espace utilisateur</router-link>
        <!-- <div v-if="this.$route.name === 'arnaud'"> -->
        <router-link class="nav-link" to="/Sale">Vendre un produit</router-link>
        <router-link class="nav-link" to="/login">Déconnexion</router-link>
        <!-- </div> -->
        </nav>
    </div>
</template>

<script>
export default {
    name:'Navigation',
}
</script>

<style>

</style>