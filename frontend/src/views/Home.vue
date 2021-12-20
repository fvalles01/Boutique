<template>
  <div>
    <!-- <div id="nav">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Boutique en ligne</router-link>
        <router-link class="nav-link" to="/login">Espace utilisateur</router-link>
      </nav>
    </div> -->

    <div class="container">
      <div class="row">
        <div v-for="product in products" :key="product._id" class="col12 col-md-4">
          <div class="card m-2">
            <img :src="product.imageUrl" class="card-img-top dimensions" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{{ product.designation }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-price">Prix : {{ product.price }} €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Home",
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/api/product");
      this.products = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #fff;
  margin: 0px 10px 0px 10px;
}
#nav a:hover {
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #29a9ff;
}
.dimensions {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>