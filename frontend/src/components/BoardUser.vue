<template>

  <div class="col-md-12 mt-3">

    <!-- <div class="card card-container"> -->
        <Form @submit="sendProduct" :validation-schema="schema">
          <h1 class="text-center">Ajoutez votre produit !</h1>
        <div class="form-group">
          <label for="designation">Désignation : </label>
          <Field v-model="designation" name="designation" type="text" class="form-control" />
          <ErrorMessage name="designation" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="imageUrl">Image : </label>
          <Field  name="imageUrl" id="imageUrl" type="file" class="form-control" />
          <ErrorMessage name="imageUrl" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="price">Prix : </label>
          <Field v-model="price" name="price" type="text" class="form-control" />
          <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="description">Description : </label>
          <Field v-model="description" name="description" type="text" class="form-control" />
          <ErrorMessage name="description" class="error-feedback" />
        </div>
        <input type="hidden" name="userId" v-model="userId">
        
        <div class="form-group">
          <button class="btn btn-primary btn-block mt-3" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Envoyer</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import FormData from "form-data";
import axios from 'axios';
import authHeader from '../services/auth-header';

export default {
  name: "User",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      designation: yup.string().required("Veuillez indiquer une désignation !"),
      price: yup.string().required("Renseignez un prix pour votre produit !"),
      description: yup.string().required("Veuillez renseigner une description !"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
     userId() {
      return this.$store.state.auth.user.id;
      
    }
    
  },
 
  methods: {
    
    sendProduct() {
      
      // récupération de l'image
      let img = document.getElementById("imageUrl").files[0];
      
      // Création d'un formData pour l'envoi de l'image et le reste du formulaire
      let formData = new FormData();
      formData.append("designation", this.designation);
      formData.append("imageUrl", img);
      formData.append("price", this.price);
      formData.append("description", this.description);
      formData.append("userId", this.userId);
      console.log(formData);
      // Envoi des données avec axios
      axios.post('http://localhost:3000/api/product/createProduct', formData, { headers: authHeader()})
      .then(resp => {

    console.log(resp.data.message);
})
      // location.reload();
      
    },
    
    
  },

};
</script>

<style scoped>
</style>