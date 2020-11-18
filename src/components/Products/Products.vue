<template>
  <v-container fluid>
    <v-card>
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title
          :class="{
            mobileCardText: $vuetify.breakpoint.smAndDown,
            largeCardText: $vuetify.breakpoint.mdAndUp,
          }"
          >{{ subCategoryName }}</v-card-title
        >
      </v-img>
      <v-layout>
        <v-flex md12>
          <v-container fluid>
            <v-row dense>
              <v-col
                class="pa-4"
                v-for="product in products"
                :key="product.id"
                cols="12"
                md="3"
                sm="11"
                xs="11"
              >
                <v-card>
                  <v-img
                    :src="'http://134.209.188.201:81/' + product.Thumbnail"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
                    @click="singleItem(product.ProductID)"
                  >
                  </v-img>
                  <v-card-title class="cardTitle">
                    {{ product.ProductName }}
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    products: "",
    subCategoryName: "",
  }),
  methods: {
    singleItem(ProductID) {
      return (
        ProductID,
        console.log("id", ProductID),
        this.$router.push({ path: "/SingleProduct/" + ProductID })
      ); //?category=baverage
    },
  },
  mounted() {
    axios
      .get("product/getAll/" + this.$route.params.id)
      .then((response) => {
        this.products = response.data;
        console.log(response);

        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("subCategory/GetSubCategoryByID/" + this.$route.params.id)
      .then((response) => {
        this.subCategoryName = response.data[0].SubCategoryName;
        console.log("subCategory-Name", this.subCategoryName);
        (this.CategoryID = this.$route.params.id),
          console.log("wow", this.CategoryID);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.mobileCardText {
  text-align: left;
  padding: 7%;
  font-weight: bold;
  font-size: 1.5rem;
}
.largeCardText {
  padding: 4%;
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
}
.cardTitle {
  color: #2c547c;
}
</style>
