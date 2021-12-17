<template>
  
<form>
  <div class="container">
    <div class="row justify-content-center">
    <div class="col12">
  <div class="mb-3">
    <label for="email" class="form-label">Adresse email</label>
    <input type="email" class="form-control" id="email">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Mot de passe</label>
    <input type="password" class="form-control" id="password">
        </div>
  <button type="submit" class="btn btn-primary">Connexion</button>
  </div>
  </div>
  </div>
</form>


</template>

<script>
export default {
  name: "Connexion",
};
</script>

<style>
</style>