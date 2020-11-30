<template>
  <v-container>
    <v-layout row wrap class="justify-space-around">
      <v-flex>
        <v-flex class="pa-3">
          <p class="heading mt-12 text-start">Keyword search</p>
        </v-flex>
        <v-flex md12>
          <v-text-field
            solo
            v-model="searchKey"
            rounded
            label="Search here..."
            type="text"
          >
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <div class="ml-12">
                  <v-btn
                    rounded
                    large
                    color="#2c547c"
                    dark
                    @click="search(searchKey)"
                    >search<v-icon class="ml-2">mdi-magnify</v-icon></v-btn
                  >
                </div>
              </v-fade-transition>
            </template>
          </v-text-field>
        </v-flex>
      </v-flex>
    </v-layout>
    <v-card>
      <v-layout row>
        <v-flex xs12 v-if="seachProducts">
          <div class="heading pt-9 pl-9">Results</div>
        </v-flex>
        <v-flex
          md4
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
      searchKey: "",
    };
  },
  methods: {
    search() {
      console.log("seach key--> 😀", this.searchKey);
      axios
        .get("product/getProductByKeyWord/" + this.searchKey)
        .then((response) => {
          this.seachProducts = response.data;
          console.log("seachProducts ", this.seachProducts);
          // this.response=console.log.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    singleItem(ProductID) {
      return (
        ProductID,
        console.log("id", ProductID),
        this.$router.push({ path: "/SingleProduct/" + ProductID })
      ); //?category=baverage
    },
  },
  // mounted() {
  //   axios
  //     .get("product/getLatest")
  //     .then((response) => {
  //       this.seachProducts = response.data;
  //       console.log("seach products -> 😘", this.seachProducts);

  //       // this.response=console.log.data
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>

<style>
.heading {
  text-align: start;
  font-weight: bold;
  font-size: 2rem;
  color: #2c547c;
}
</style>
