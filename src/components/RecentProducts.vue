<template>
  <div class="mt-12 mb-12 card">
    <v-container>
      <div color="#e1e6e8">
        <v-layout row>
          <v-flex xs12>
            <div class="heading pt-9 pl-9">New Sku's out this week</div>
          </v-flex>
          <v-flex
            md4
            xs12
            v-for="product in latestProducts"
            :key="product.ProductID"
          >
            <div class="pa-9">
              <v-img
                aspect-ratio="1.1"
                :src="'https://134.209.188.201:81/' + product.Thumbnail"
                :lazy-src="'https://134.209.188.201:81/' + product.Thumbnail"
                @click="singleItem(product.ProductID)"
              ></v-img>
              <div class="heading2 pa-3">
                {{ product.ProductName }}
              </div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.card {
  background-color: #e1e6e8;
}
.heading {
  text-align: left;
  font-weight: bold;

  font-size: 2rem;
  color: #2c547c;
}
.heading2 {
  text-align: center;
  font-size: 1rem;
  color: #2c547c;
}
.heading3 {
  text-align: center;
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
export default {
  data() {
    return {
      latestProducts: "",
      items: [
        {
          src:
            "https://vfcadvisors.com/wp-content/uploads/2019/07/alcohol-2048x1365.jpg",
        },
      ],
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 4,
        },
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 4,
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 4,
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 4,
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 4,
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 4,
        },
      ],
      slidesHeading: "welcome to NewSku.",
      slideText:
        "Consequat irure proident reprehenderit mollit elit magna nostrud labore aute deserunt. Esse id voluptate occaecat nisi velit nulla anim in eu ad sit. ",
    };
  },
  mounted() {
    axios
      .get("product/getLatest")

      .then((response) => {
        this.latestProducts = response.data;
        console.log("latest products -> 😂", this.latestProducts);

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
