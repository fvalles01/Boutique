<template>
<div>
  <MenuVisitor/>
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


</div>
</template>

<script>
    import axios from "axios"
    import MenuVisitor from "../MenuVisitor/MenuVisitor.vue"
    export default {    
        name: "Inscription",
        components:{
          MenuVisitor
        },
        data(){
        return {
          email:"",
          password:""
        }
      },   
           methods: {
                    inscription() {
                      axios.post("http://localhost:3000/api/auth/signup", {
                        email: this.email,
                        password: this.password,
                      });
                    },
                  },  
            }    
</script>

<style>

</style>