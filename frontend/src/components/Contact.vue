<template>
  <div class="col-md-12">
    <div class="card card-container">
      <Form  @submit="sendMail" :validation-schema="schema" method="post">
        <div class="form-group">
          <label for="name">Votre nom :</label>
          <Field v-model="name" name="name" type="text" class="form-control" />
          <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="lastname">Votre prénom :</label>
          <Field v-model="lastname" name="lastname" type="text" class="form-control" />
          <ErrorMessage name="lastname" class="error-feedback" />
        </div>
         <div class="form-group">
          <label for="email">Votre adresse e-mail :</label>
          <Field v-model="email" name="email" type="email" class="form-control" />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="message">Votre message :</label>
          <Field v-model="message" name="message" type="text" class="form-control" />
          <ErrorMessage name="message" class="error-feedback" />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Envoyer votre demande</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from 'axios';

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required("Veuillez saisir votre prénom !"),
      lastname: yup.string().required("Veuillez saisir votre nom !"),
      email: yup.string().required("Veuillez saisir une adresse email valide !"),
      message: yup.string().required("Veuillez saisir votre message !"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods:{
      sendMail(){
      // Création d'un formData pour l'envoi de l'image
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("lastname", this.lastname);
      formData.append("email", this.email);
      formData.append("message", this.message);
      // Envoi des données avec axios
      axios.post('http://localhost:3000/services', formData);
      location.reload();
      }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
//   created() {
//     if (this.loggedIn) {
//       this.$router.push("/profile");
//     }
//   },
};
</script>

<style scoped>
</style>