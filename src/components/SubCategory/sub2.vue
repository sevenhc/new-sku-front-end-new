<template>
  <v-container>
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
        >
          {{ this.$route.params.id }}</v-card-title
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
                md="4"
                sm="11"
                xs="11"
              >
                <v-card>
                  <v-img
                    :src="'https://new-sku.herokuapp.com/' + product.path"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
                    @click="singleItem(product.sub_category)"
                  >
                  </v-img>
                  <v-card-title class="cardTitle">
                    {{ product.sub_category }}
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
    // new: this.$route.params.id,

    cards: [
      {
        title: "Chilled fish and seafood",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4,
      },
      {
        title: "Chilled fish and seafood",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
      },
      {
        title: "Fresh Meat",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
      },
      {
        title: "Fresh Meat",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
    ],
  }),
  methods: {
    singleItem(sub_category) {
      return (
        sub_category,
        console.log(sub_category),
        this.$router.push({ path: "/products/" + sub_category })
      ); //?category=baverage
    },
  },
  mounted() {
    axios
      .get("https://new-sku.herokuapp.com/findAllSubCategory/" + this.$route.params.id)
      .then((response) => {
        this.products = response.data;
        console.log("sub", response.data);
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
</style>
