<template>
  <div id="app">
    <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a href="/home" class="navbar-brand">Boutique en ligne</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/espaceVip" class="nav-link"> Espace VIP </router-link>
            </li>
            <li v-if="showAdminBoard" class="nav-item">
              <router-link to="/admin" class="nav-link"
                >Panneau d'administration</router-link
              >
            </li>
            <li v-if="showModeratorBoard" class="nav-item">
              <router-link to="/mod" class="nav-link"
                >Panneau de modération</router-link
              >
            </li>
            <li class="nav-item">
              <router-link v-if="currentUser" to="/user" class="nav-link"
                >Ajouter un produit</router-link
              >
            </li>
          </ul>
          <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/login" class="btn btn-outline-success m-1 bouton">
                Connexion
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="btn btn-outline-primary m-1 bouton">
                Inscription
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="btn btn-outline-primary m-1 bouton">
                Contact
              </router-link>
            </li>
          </div>
          <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/profile" class="btn btn-outline-primary m-1 bouton">
                {{ currentUser.username }}
              </router-link>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-primary m-1 bouton" @click.prevent="logOut"> Deconnexion </a>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="btn btn-outline-primary m-1 bouton">
                Contact
              </router-link>
            </li>
          </div>
        </div>
      </div>
    </nav>
    </header>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Some Default Title";
      },
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }
      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.nav-item a{
  cursor: pointer;
}
.bouton{
  width: 150px;
}
</style>