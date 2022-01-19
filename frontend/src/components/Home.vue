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
                    <a href="/product/{{ product._id}}"  class="btn btn-primary">Plus de détails...</a>
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

export default {
  name: "Home",
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    UserService.getPublicProducts().then(
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
};
</script>
<style scoped>
.dimensions{
  height: 300px;
  object-fit: cover;
}


</style>
