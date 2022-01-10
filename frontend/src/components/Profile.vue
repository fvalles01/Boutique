<template>
  <div class="container mt-3">
    <header class="jumbotron">
  
      <h1 class="text-center">
         Votre Profile
      </h1>
    </header>
    <p>
      <strong>Identifiant :</strong>
      {{currentUser.username}}
    </p>
    <p>
      <strong>Email :</strong>
      {{currentUser.email}}
    </p>
    <strong>Votre droit d'accès :</strong>
      <p v-for="role in currentUser.roles" :key="role">{{role}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>