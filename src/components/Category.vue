<template>
  <v-container class="mt-md-12">
    <v-layout>
      <v-flex xs12 md12>
        <div class="heading">What We Do</div>
        <div class="heading2 pa-3 text-center">
          Regularly updated product launches in food and drinks across 
          all major UK retailers, including in-store photographs &amp; product information.
        </div>
      </v-flex>
    </v-layout>
    <v-layout class="mt-md-12">
      <v-flex md12 xs12>
        <v-container fluid>
          <v-row dense>
            <v-col
              class="pa-3"
              v-for="product in products"
              :key="product.CategoryID"
              cols="12"
              md="4"
              sm="12"
              xs="12"
            >
              <v-card>
                <v-img
                  :src="'https://134.209.188.201:81/' + product.ThumbnailImage"
                  :lazy-src="
                    'https://134.209.188.201:81/' + product.ThumbnailImage
                  "
                  class="white--text align-end"                  
                  height="250px"
                >
                  <div class="imageNameBack">
                    <div>
                      <p
                        class="categoryTitle"
                        v-text="product.CategoryName"
                      ></p>
                    </div>
                  </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.heading {
  text-align: center;
  font-weight: bold;

  font-size: 2rem;
  color: #2c547c;
}
.heading2 {
  text-align: center;
  font-size: 1rem;
  color: #2c547c;
}

.categoryTitle {
  text-align: center;
  background-color: rgba(0,0,0,0.7);
  min-width: 100%;
  font-size: 1.4rem;
  padding: 3%;
  position: absolute;
  top: 0;
  font-weight: bold;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      products: "",

      slidesHeading: "welcome to NewSku.",
      slideText:
        "Consequat irure proident reprehenderit mollit elit magna nostrud labore aute deserunt. Esse id voluptate occaecat nisi velit nulla anim in eu ad sit. ",
    };
  },
  methods: {},
  mounted() {
    axios
      .get("category/getAll")

      .then((response) => {
        this.products = response.data;
        console.log("image path", response.data);

        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
