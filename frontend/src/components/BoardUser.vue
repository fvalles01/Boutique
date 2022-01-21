<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <form @submit="sendProduct" enctype="multipart/form-data">
          <h2 class="text-center mb-3">Ajoutez un nouveau produit !</h2>
          <div class="form-group">
            <label for="designation">Désignation : </label>
            <input
              v-model="designation"
              name="designation"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="imageUrl">Image : </label>
            <input
              name="imageUrl"
              id="imageUrl"
              type="file"
              class="form-control"
            />
           
          </div>
          <div class="form-group">
            <label for="price">Prix : </label>
            <input
              v-model="price"
              name="price"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="description">Description : </label>
             <ckeditor :editor="editor" v-model="description">
             </ckeditor>
          </div>
          <input type="hidden" name="userId" v-model="userId" />

          <div class="form-group">
            <button class="btn btn-primary btn-block mt-3" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Envoyer</span>
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormData from "form-data";
import axios from "axios";
import authHeader from "../services/auth-header";

export default {
  name: "User",
  data() {
    return {
      loading: false,
      designation: "",
      price: "",
      description: "",
      editor: ClassicEditor,
    };
  },
  computed: {
    userId() {
      return this.$store.state.auth.user.id;
    },
  },

  methods: {
    async sendProduct() {
      // récupération de l'image
      let img = document.getElementById("imageUrl").files[0];
      console.log(img)
      // Création d'un formData pour l'envoi de l'image et le reste du formulaire
      let formData = new FormData();
      formData.append("designation", this.designation);
      formData.append("imageUrl", img);
      formData.append("price", this.price);
      formData.append("description", this.description);
      formData.append("userId", this.userId);
      console.log(formData);
      // Envoi des données avec axios
      await axios
        .post("http://localhost:3000/api/product/createProduct", formData, {
          headers: authHeader(),
        })
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((err) => console.log(err));
      // location.reload();
    },
  },
};
</script>

<style scoped>
</style>