<template>
  
<form v-on:submit="inscription">
  <div class="container">
    <div class="row justify-content-center">
    <div class="col12">
  <div class="mb-3">
    <label for="email" class="form-label">Adresse email</label>
    <input v-model="email" name="email" type="email" class="form-control" id="email">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Mot de passe</label>
    <input v-model="password" name="password" type="password" class="form-control" id="password">
  </div>
  <input type="submit" value="Inscription"/>
    </div>
  </div>
  </div>
</form>



</template>

<script>
    // import router from "../router"    
    import axios from "axios"   
    export default {    
        name: "Inscription",
        data(){
        return {
          email:"",
          password:""
        }
      },   
        methods: {    
           inscription: (e) => {    
                e.preventDefault()    
                let email = this
                console.log(email)
                let password = this 
                let inscription = () => {    
                    let data = {    
                        email: email,    
                        password: password    
                    }    
                    axios.post("http://localhost:3000/api/auth/signup", data)    
                        // .then((response) => {    
                        //     console.log("Inscription OK")    
                        //     router.push("/dashboard")    
                        // })    
                        // .catch((errors) => {    
                        //     console.log("Inscription ECHEC")    
                        // })    
                }    
                inscription()    
            }    
        }    
    }
</script>

<style>

</style>