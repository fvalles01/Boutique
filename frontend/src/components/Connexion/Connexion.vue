<template>
  
<form v-on:submit="connexion">
  <div class="container">
    <div class="row justify-content-center">
    <div class="col12">
  <div class="mb-3">
    <label for="email" class="form-label">Adresse email</label>
    <input v-model="email" type="email" class="form-control" id="email">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Mot de passe</label>
    <input v-model="password" type="password" class="form-control" id="password">
        </div>
  <input type="submit" value="Connexion"/>
  </div>
  </div>
  </div>
</form>


</template>

<script>
import router from '../../router'
    import axios from "axios"  

    export default {    
        name: "Connexion",
        data(){
        return {
          email:"",
          password:"",
          user: {
            isSignedIn: true
          }

        }
      },   
           methods: {
                    connexion() {
                      axios.post("http://localhost:3000/api/auth/login", {
                        email: this.email,
                        password: this.password,
                      })
                        router.push("/")
                    },
                  },  
            }    
</script>


<style>
</style>