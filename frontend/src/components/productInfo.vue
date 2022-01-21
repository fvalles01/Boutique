<template>
<div class="row mt-1">
  <img :src="imageUrl" class="card-img-top dimensions" :alt="designation">
        <div class="card-body">
          <h3>{{ designation }}</h3>
          <p class="card-price">Prix : {{ price }} €</p>
          <p><strong>Produit mis en vente le : </strong>{{ formattedDate }}</p>
          <hr>
          <div class="card-text" v-html="description"></div>
          
           <!-- <p class="card-text"  >{{ description }}</p> -->
             <a href="/home" class="btn btn-primary mt-3">Back to home</a>
            
          <hr>
        </div>
        
</div>
</template>

<script>

import UserService from "../services/user.service";
import formatDateMixin from '../mixins/formatDateMixin';
export default {
    name:"productInfo",
    props: ["id"],
    data() {
    return {
      loading: false,
      designation: "",
      price: "",
      description: "",
      product: [],
      publishedAt: "",
      

}
    
    
  },
  mixins: [formatDateMixin],

   computed: {
            formattedDate() {
                return this.formatDate(this.publishedAt);
            }
        },

  mounted() {
    const id = this.id;
    UserService.getUserOneProduct(id).then(
      (response) => {
        this.productId = response.data._id;
        this.designation = response.data.designation;
        this.price = response.data.price;
        this.description = response.data.description;
        this.imageUrl = response.data.imageUrl;
        this.publishedAt = response.data.publishedAt;
      },
      (error) => {
        this.product =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
 

}
</script>

<style scoped>
.dimensions{
  height: 400px;
  width: 800px;
}

</style>