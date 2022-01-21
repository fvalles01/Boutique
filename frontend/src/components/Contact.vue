<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <Form @submit="sendMail" :validation-schema="schema">
          <h2 class="text-center">Nous Contacter</h2>
          <div class="form-group">
            <label for="name">Votre nom :</label>
            <Field
              v-model="name"
              name="name"
              type="text"
              class="form-control"/>
            <ErrorMessage name="name" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="lastname">Votre prénom :</label>
            <Field
              v-model="lastname"
              name="lastname"
              type="text"
              class="form-control"/>
            <ErrorMessage name="lastname" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email">Votre adresse e-mail :</label>
            <Field
              v-model="email"
              name="email"
              type="email"
              class="form-control"/>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="objet">Objet de votre message :</label>
            <Field
              v-model="objet"
              name="objet"
              type="text"
              class="form-control" />
          </div>
          <div class="form-group">
            <label for="demande">Votre message :</label>
            <ckeditor :editor="editor" v-model="demande">
             </ckeditor>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block mt-3" :disabled="loading">
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
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import axios from "axios";

export default {
  name: "contact",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required("Veuillez saisir votre prénom !"),
      lastname: yup.string().required("Veuillez saisir votre nom !"),
      email: yup
        .string()
        .required("Veuillez saisir une adresse email valide !"),
      objet: yup.string().required("Veuillez saisir l'objet de votre demande!"),
      demande: ""
    });

    return {
      loading: false,
      message: "",
      schema,
      editor: ClassicEditor,
    };
  },
  methods: {
    sendMail() {
      axios.post("http://localhost:3000/services",{
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        objet: this.objet,
        demande: this.demande,
      });

      location.reload();
    },
  },
};
</script>

<style scoped>
</style>