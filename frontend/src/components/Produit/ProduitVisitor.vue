<template>
<div>
<MenuVisitor />
<div class="container">
<div class="row">
    <div v-for="product in products" :key="product._id">
    <div class="card m-2" style="width: 18rem;">
      <img :src='product.imageUrl' class="card-img-top dimensions" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{product.designation}}</h5>
        <p class="card-text">{{product.description}}</p>
        <p class="card-price">Prix : {{product.price}} €</p>
    </div>

  </div>
  </div>
</div>

</div>

</div>
</template>

<script>
import axios from 'axios';
import MenuVisitor from "../MenuVisitor/MenuVisitor.vue"

export default {
  name: 'Produit',
  components:{
    MenuVisitor
  },
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

.dimensions{
  width: 300px;
  height: 300px;
  object-fit: cover;
}



</style>