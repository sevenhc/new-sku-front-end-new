<template>
  <v-container pt-12>
    <v-card mt-12 flat>
      <v-layout row>
        <v-flex xs12 v-if="seachProducts">
          <div class="heading pt-9">Results</div>
        </v-flex>
        <v-flex
          md3
          xs12
          v-for="product in seachProducts"
          :key="product.ProductID"
        >
          <div class="pa-9">
            <v-img
              aspect-ratio="1.1"
              :src="'http://134.209.188.201:81/' + product.Thumbnail"
              :lazy-src="'http://134.209.188.201:81/' + product.Thumbnail"
              @click="singleItem(product.ProductID)"
            ></v-img>
            <div class="heading2 pa-3">
              {{ product.ProductName }}
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      seachProducts: "",
    };
  },
  mounted() {
    axios
      .get("product/getProductByKeyWord/" + this.$route.params.id)
      .then((response) => {
        this.seachProducts = response.data;
        console.log("seachProducts ", this.seachProducts);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    singleItem(ProductID) {
      return (
        ProductID,
        console.log("id", ProductID),
        this.$router.push({ path: "/SingleProduct/" + ProductID })
      ); //?category=baverage
    },
  },
};
</script>

<style></style>
