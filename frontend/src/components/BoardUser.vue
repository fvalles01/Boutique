<template>
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

          <input type="submit" class="btn btn-success" value="envoyer" />
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>

  <!-- <button @click="envoi()">Envoyer</button> -->
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "User",
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
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