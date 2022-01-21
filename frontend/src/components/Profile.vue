<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <h2 class="text-center mb-3">Votre Profil</h2>
        <ul>
          <li>
            Nom utilisateur : <strong>{{ currentUser.username }} </strong>
          </li>
          <li>
            Email : <strong>{{ currentUser.email }} </strong>
          </li>
          <!-- <li>ID USER : {{currentUser.id}} </li>
        <li v-for="role in currentUser.roles" :key="role"> Votre droit d'accès : {{role}} </li> -->
        </ul>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
div ul {
  list-style-type: none;
  margin-top: 50px;
}
div ul li {
  margin-bottom: 15px;
  font-size: 20px;
}
</style>