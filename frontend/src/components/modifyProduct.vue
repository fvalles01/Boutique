

<template>

  <div class="row mt-3">
    <div class="col-md-2"></div>
    <div class="col-md-8">
       <form @submit="modifyProduct">
          <h2 class="text-center mb-3">modifier votre produit !</h2>
        <img :src="imageUrl" class="card-img-top dimensions" alt="image du Produit"/>
        <div class="form-group">
          <label for="designation">Désignation :</label>
          <input v-model="designation" name="designation" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="imageUrl">Image : </label>
          <input  name="imageUrl" id="imageUrl" type="file" class="form-control" />
        </div>
        <div class="form-group">
          <label for="price">Prix :</label>
          <input v-model="price" name="price" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="description">Description :</label>
          <input v-model="description" name="description" type="text" class="form-control" />
        </div>
        <input type="hidden" name="userId" v-model="userId">
        <input type="hidden" id="productId" ref="productId" name="productId" v-model="productId">
        
        <div class="form-group">
          <button class="btn btn-primary btn-block mt-3">
            <span>Confirmer</span>
          </button>
        </div>
      </form>
    </div>
    <div class="col-md-2"></div>
  </div>

</template>


<script>
import FormData from "form-data";
import axios from 'axios';
import UserService from "../services/user.service";




export default {
  name: "User",
  props: ["id"],
  data() {
      return {
      designation: "",
      price: "",
      description: "",
      product: [],
    };
  },
  
   mounted() {
    const id = this.id
    UserService.getUserOneProduct(id)
               .then(
                      (response) => {
                        this.productId = response.data._id
                        this.designation = response.data.designation
                        this.price = response.data.price
                        this.description = response.data.description
                        this.imageUrl = response.data.imageUrl
                        
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

  computed: {
     userId() {
      return this.$store.state.auth.user.id; 
    },
  

 
  },
 
  methods: {
    
    async modifyProduct() {
      
      // récupération de l'image
      let img = document.getElementById("imageUrl").files[0];
      const id = this.id;
      // Création d'un formData pour l'envoi de l'image et le reste du formulaire
      let formData = new FormData();
      if (!img){
      formData.append("designation", this.designation);
      formData.append("price", this.price);
      formData.append("description", this.description);
      // Envoi des données avec axios
      await axios.put('http://localhost:3000/api/product/modifyProduct/'+id, formData)
           .then((res) => {
                console.log(res.data.message)
                
            })
            .catch((err) => console.log(err));
            location.reload();

      }else{

      formData.append("designation", this.designation);
      formData.append("imageUrl", img);
      formData.append("price", this.price);
      formData.append("description", this.description);
      console.log(id)
      // Envoi des données avec axios
      await axios.put('http://localhost:3000/api/product/modifyProduct/'+id, formData)
           .then((res) => {
            
                console.log(res.data.message)
                
            })
            .catch((err) => console.log(err));
            location.reload();
      
      }
 
    },
    
    
  },

};
</script>

<style scoped>
.dimensions{
  height: 300px;
  width: 400px;
  margin-bottom: 10px;
}

  </style>