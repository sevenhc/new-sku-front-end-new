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
  </v-container>
</template>

<script>
// import axios from "axios";
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
      this.$router.push({ path: "/SearchResult/" + this.searchKey });

      // axios
      //   .get("product/getProductByKeyWord/" + this.searchKey)
      //   .then((response) => {
      //     this.seachProducts = response.data;
      //     console.log("seachProducts ", this.seachProducts);
      //     // this.response=console.log.data
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
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
