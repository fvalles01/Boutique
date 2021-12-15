<template>
<div class="row">
    <div v-for="product in products" :key="product._id">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">{{product.designation}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Produit',
  data(){
      return{
  products: []
      }
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/api/product');

      this.products = res.data;
    }
    catch (e) {
      console.error(e);
    }
  }
};





</script>

<style>

</style>