<template>
  <div>
    <v-btn text color="#2c547c" @click="dialog = true">
      SAVE TO LIBRARY
      <v-icon color="pink" right> mdi-heart</v-icon>
    </v-btn>
    <div class="text-center">
      <v-dialog v-model="dialog">
        <v-card class="rounded-card">
          <v-layout row wrap class="pa-12 justify-space-between">
            <v-flex md7>
              <div class="pa-5">
                <p>{{ name }}</p>
                <v-img :src="'https://new-sku.herokuapp.com/' + path"></v-img>
              </div>
            </v-flex>
            <v-flex md5>
              <p class="heading">Create a new library or search</p>
              <v-form v-model="valid">
                <v-container>
                  <v-row>
                    <v-text-field
                      v-model="title"
                      :rules="nameRules"
                      :counter="10"
                      required
                    ></v-text-field>
                    <v-btn @click="created" color="#2c547c" class="mt-5" text
                      >Add New Library</v-btn
                    >
                  </v-row>
                </v-container>
              </v-form>
              <v-divider></v-divider>
              <ModelList
                :product_id="product_id"
                :name="name"
                :path="path"
              ></ModelList>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import ModelList from "../SingleProduct/modelList";
import axios from "axios";

export default {
  components: { ModelList },
  props: {
    name: String,
    path: String,
    product_id: Number,
  },
  data: () => ({
    title: "",
    dialog: false,
    valid: false,
    lastname: "",
    nameRules: [
      (v) => !!v || "Library Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),
  methods: {
    created() {
      // POST request using axios with error handling
      const article = {
        title: this.title,
      };
      axios
        .post("https://new-sku.herokuapp.com/library/addLibrary", article)
        .then(
          (response) => (this.articleId = response.data.id),
          this.$forceUpdate()
        )
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    axios
      .get("https://new-sku.herokuapp.com/library/findAllLibrary")
      .then((response) => {
        this.products = response.data;
        console.log("library", response.data);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style>
.heading {
  text-align: center;
  font-weight: bold;
  color: #2c547c;
}
.rounded-card {
  border-radius: 24px;
}
</style>
