<template>
  <div class="mt-md-12">
    <v-layout>
      <v-flex xs12 md12>
        <div class="heading">Search by category</div>
        <div class="heading2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consequatur amet dolorem harum numquam ipsam rem ea sequi sed, et
          totam tempora repellendus autem quia beatae, aperiam ratione hic
          saepe?
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md12 xs12>
        <v-container fluid>
          <v-row dense>
            <v-col
              class="pa-3"
              v-for="product in products"
              :key="product.id"
              cols="12"
              md="4"
              sm="12"
              xs="12"
            >
              <v-card to="subcategory">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="250px"
                >
                  <v-card-actions>
                    <v-card-title
                      class="categoryTitle"
                      v-text="product.category"
                    ></v-card-title>
                  </v-card-actions>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.heading {
  text-align: start;
  font-weight: bold;

  font-size: 2rem;
  color: #2c547c;
}
.heading2 {
  text-align: start;
  font-size: 1rem;
  color: #2c547c;
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
      products:"",
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
          title: "Chiled",
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
      .get("http://localhost:3200/findAllCategory")
      .then((response) => {
        this.products = response.data;
        console.log(response);

        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
