<template>
<div>
<!-- <div id="nav">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Boutique en ligne</router-link>
        <router-link class="nav-link" to="/Sale">Vendre un produit</router-link>
        </nav>
    </div> -->

  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form v-on:submit="envoi">
          <div class="mb-3">
            <input
              v-model="designation"
              type="text"
              class="form-control"
              placeholder="Désignation"
            />
          </div>

          <div class="mb-3">
            <input
              class="form-control"
              type="file"
              name="imageUrl"
              id="imageUrl"
            />
          </div>
          <div class="mb-3">
            <input
              v-model="price"
              type="text"
              class="form-control"
              placeholder="Prix"
            />
          </div>
          <div class="mb-3">
            <textarea
              v-model="description"
              class="form-control"
              rows="3"
              placeholder="Description"
            >
            </textarea>
          </div>

          <input type="submit" class="btn btn-primary" value="envoyer" />
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
  <!-- <button @click="envoi()">Envoyer</button> -->
  </div>
</template>

<script>
import axios from "axios";
import FormData from "form-data";
import router from "../router"

export default {
  name: "Vendre",

  data() {
    return {
      designation: "",
      price: "",
      description: "",
    };
  },

  methods: {
    async envoi() {
      // récupération de l'image
      let img = document.getElementById("imageUrl").files[0];
      // Création d'un formData pour l'envoi de l'image

      let formData = new FormData();
      formData.append("designation", this.designation);
      formData.append("imageUrl", img);
      formData.append("price", this.price);
      formData.append("description", this.description);
      // Envoi des données avec axios
      await axios
        .post("http://localhost:3000/api/product", formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")

        },
        } );
        router.push("/");
 
    },
  },
};
</script>

<style>
</style>