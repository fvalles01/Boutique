<template>
  <div class="container mt-3">
    <header class="jumbotron">
      <div class="container">
            <div class="row">
              <div v-for="product in products" :key="product._id" class="col12 col-md-4">
                <div class="card m-2">
                  <img :src="product.imageUrl" class="card-img-top dimensions" alt="image du Produit"/>
                  <div class="card-body">
                    <h5 class="card-title">{{ product.designation }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                    <p class="card-price">Prix : {{ product.price }} €</p>
                    <a @click="modifyProduct" class="btn btn-success">Modifier</a>
                    <!-- <a href="/deleteProduct/{{product._id}}"  class="btn btn-danger">Supprimer</a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import axios from 'axios';

export default {
  name: "EspaceVip",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    UserService.getUserContent().then(
      (response) => {
        this.products = response.data;
      },
      (error) => {
        this.products =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
   computed: {
     userId() {
      return this.$store.state.auth.user.id;
      
    }
    
  },
  methods: {
      modifyProduct(){
      let userId = this.$store.state.auth.user.id;
      // Envoi des données avec axios
      axios.put('http://localhost:3000/api/product/modifyProduct/61dac415c2100f9084853dd4', {userId: userId})
      .then(resp => {

    console.log(resp.data.message);
})
      // location.reload();
      
      }
  }
};
</script>
<style>
.dimensions{
  height: 300px;
  object-fit: cover;
}


</style>
