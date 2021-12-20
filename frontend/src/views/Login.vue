<template>
<div>
    <!-- <div id="nav">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Boutique en ligne</router-link>
        <router-link class="nav-link" to="/login">Espace utilisateur</router-link>
        </nav>
    </div> -->

  <div class="container">
  <div class="card">
    <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
    <h1 class="card__title" v-else>Inscription</h1>
    <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
    <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p>
    <div class="form-row_position">
      <input v-model="email" class="form-row__input" type="text" placeholder="Adresse mail"/>
    </div>
    <div class="form-row_position">
      <input v-model="password" class="form-row__input" type="password" placeholder="Mot de passe"/>
    </div>
    <div class="form-row_position" v-if="mode == 'login'">
      <!-- Adresse mail et/ou mot de passe invalide -->
    </div>
    <div class="form-row_position" v-if="mode == 'create'">
      <!-- Adresse mail déjà utilisée -->
    </div>
    <div class="form-row_position">
      <button @click="login()" class="btn btn-primary" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
        <span v-if="status == 'loading'">Connexion en cours...</span>
        <span v-else>Connexion</span>
      </button>
      <button @click="register()" class="btn btn-primary" :class="{'button--disabled' : !validatedFields}" v-else>
        <span v-if="status == 'loading'">Création en cours...</span>
        <span v-else>Créer mon compte</span>
      </button>
    </div>
  </div>
  </div>

  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'Login',
  data: function () {
    return {
      mode: 'login',
      email: '',
      password: '',
    }
  },
//   mounted: function () {
//     if (this.$store.state.user.userId != -1) {
//       this.$router.push('/Sale');
//       return ;
//     }
//   },
  computed: {
    validatedFields: function () {
      if (this.mode == 'create') {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  methods: {
    switchToCreateAccount: function () {
      this.mode = 'create';
    },
    switchToLogin: function () {
      this.mode = 'login';
    },
    async login() {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: this.email,
          password: this.password,
        }
      );
      localStorage.setItem("token", response.data.token);
      router.push("/sale");
    },

     async register() {
      await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          email: this.email,
          password: this.password,
        },
      ),
    location.reload()
  },
},
        

}
</script>

<style>
.form-row_position {
  display: flex;
  margin: 16px 0px;
  gap:16px;
  flex-wrap: wrap;
}
.form-row__input {
  padding:8px;
  border: none;
  border-radius: 8px;
  background:#f2f2f2;
  font-weight: 500;
  font-size: 16px;
  flex:1;
  min-width: 100px;
  color: black;
}
.form-row__input::placeholder {
  color:#aaaaaa;
}
.card__action{
  color: rgb(0, 119, 230);
  cursor: pointer;
}
.navbar a{
    text-decoration: none;
}
</style>