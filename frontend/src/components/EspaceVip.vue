<template>
  <div class="container mt-3">
      <div v-if="products = products"> 
        <div>
          <a href="/user" class="btn btn-primary mb-3">Nouveau produit</a>
        </div>
        <div class="row">
          <div
            v-for="product in products"
            :key="product._id"
            class="col12 col-md-4"
          >
            <div class="card m-2">
              <img
                :src="product.imageUrl"
                :id="product._id"
                class="card-img-top dimensions"
                alt="image du Produit"
              />
              <div class="card-body">
                <h5 class="card-title">{{ product.designation }}</h5>
                <!-- <p class="card-text">{{ product.description }}</p> -->
                <p class="card-price">Prix : {{ product.price }} €</p>

                <a
                  :href="'/modifyProduct/'+product._id"
                  class="btn btn-outline-success mr-3 buttonSep"
                  >Modifier</a
                >
                <button
                  data-bs-toggle="modal"
                  :data-id="product._id"
                  :data-bs-target="'#deleteArticleModal'+product._id"
                  class="btn btn-outline-danger buttonSep"
                >
                  Supprimer
                </button>
                <!-- Modal -->
                <div
                  class="modal fade"
                  :id="'deleteArticleModal'+product._id"
                  tabindex="-1"
                  aria-labelledby="deleteArticleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Confirmer la suppression du produit !
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        Êtes-vous sûr de vouloir supprimer ce produit :
                        <strong>{{ product.designation }}</strong> ?
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Annuler
                        </button>
                        <button
                          @click="deleteUserProduct(product._id)"
                          class="btn btn-primary"
                        >
                          Confirmer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div v-else>
          <p><strong>Désolé, vous n'avez aucun produit !</strong></p>
          <a href="/user" class="btn btn-primary mb-3">Ajouter un produit</a>
     </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import axios from "axios";
import authHeader from "../services/auth-header";
export default {
  name: "EspaceVip",
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    UserService.getUserProducts().then(
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
    },
  },
  methods: {
    async deleteUserProduct(id) {
      await axios
        .delete("http://localhost:3000/api/product/deleteProduct/"+id,{
          headers: authHeader(),
        })
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((err) => console.log(err));
      location.reload();
    },
  },
};
</script>
<style scoped>
.dimensions {
  height: 300px;
  object-fit: cover;
}
.buttonSep {
  margin: 5px 5px 0px 0px;
}
</style>
