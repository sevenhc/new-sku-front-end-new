<template>
  <v-container class="mt-12 mb-12">
    <v-container>
      <v-card color="#f3f3f3">
        <v-layout row>
          <v-flex md7 xs12>
            <div class="pa-5">
              <v-img
                :src="'http://localhost:3000/' + product.Thumbnail"
              ></v-img>
            </div>
            <div color="transparent" class="d-flex justify-center">
              <libraryModel
                :product_id="product.id"
                :name="product.title"
                :path="product.path"
              ></libraryModel>
            </div>
            <v-layout>
              <v-flex md12>
                <v-container fluid>
                  <v-row dense>
                    <v-col
                      class="pa-md-5"
                      v-for="index in 3"
                      :key="index"
                      cols="12"
                      md="4"
                      sm="5"
                      xs="5"
                    >
                      <v-card>
                        <v-img
                          :src="
                            'http://localhost:3000/' + product.NutritionalTable
                          "
                          class="white--text align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        >
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md5 xs12 class="pa-md-12 pa-6">
            <div class="heading3 mb-4">
              {{ product.ProductName }}
              <v-progress-linear
                color="#2c547c"
                rounded
                height="2"
                value="100"
              ></v-progress-linear>
            </div>
            <div class="heading3 mb-4">
              {{ product.ProductName }} - {{ product.ProductName }}
            </div>
            <div class="heading2 mb-4">
              <span class="heading">Ingredients:</span>
              {{ product.Ingredients }}
            </div>
            <span class="heading">Nutritional table:</span>
            <v-img
              src="../../assets/Nutrition.jpg"
              class="white--text align-end"
            >
            </v-img>
            <div class="pt-4">
              <v-btn min-width="50%" rounded color="#c7ced5" class="heading2">
                Download Page
              </v-btn>
            </div>
            <div class="pt-4">
              <v-btn min-width="50%" rounded color="#2c547c" dark>
                Download Image
              </v-btn>
            </div>
            <div class="pt-4">
              <v-btn text color="#2c547c" to="/products">
                <v-icon left> mdi-arrow-left</v-icon>
                back
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
.card {
  color: rgba(141, 171, 228, 0.411);
  border: 1px solid red;
}
.heading {
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #2c547c;
}
.addLibrary {
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  color: #2c547c;
}
.heading2 {
  text-align: start;
  font-size: 1rem;
  color: #2c547c;
}
.heading3 {
  text-align: start;
  font-size: 1.5em;
  color: #2c547c;
  font-weight: bold;
}
.categoryTitle {
  text-align: center;
}
</style>
<script>
import axios from "axios";
import LibraryModel from "../SingleProduct/libraryModel";
export default {
  components: { LibraryModel },
  data() {
    return {
      product: "",
      dialog: false,
    };
  },
  computed() {
    this.new = this.products;
    console.log("asasas", this.products);
  },
  mounted() {
    console.log(this.new);
    axios
      .get("http://localhost:3000/product/getById/" + this.$route.params.id)
      .then((response) => {
        this.product = response.data[0];
        console.log("product", response.data);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
