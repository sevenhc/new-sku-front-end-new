<template>
  <v-container style="clear:both;">
    <!-- <v-layout>
      <v-flex xs12 md12>
        <div class="heading">Search by category</div>
        <div class="heading2 pa-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consequatur amet dolorem harum numquam ipsam rem ea sequi sed, et
          totam tempora repellendus autem quia beatae, aperiam ratione hic
          saepe?
        </div>
      </v-flex>
    </v-layout> -->
    <v-layout class="">
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
              <v-hover v-slot="{ hover }">
                <v-card>
                  <v-img
                    :src="'https://134.209.188.201:81/' + product.ThumbnailImage"
                    :lazy-src="
                      'https://134.209.188.201:81/' + product.ThumbnailImage
                    "
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
                    @click="singleItem(product.CategoryID)"
                  >
                    <v-fade-transition>
                        <v-overlay
                          v-if="hover"
                          absolute
                          color="#000000"
                          style="cursor:pointer;"                          
                        >
                          <p style="font-size:22px; cursor: pointer;">View</p>
                        </v-overlay>
                        <!-- <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          <p style="font-size:22px">View</p>
                        </div> -->
                      </v-fade-transition>
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
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
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
  background-color: rgba(0, 0, 0, 0.7);
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
      latestInsight: "",
      slidesHeading: "welcome to NewSku.",
      slideText:
        "Consequat irure proident reprehenderit mollit elit magna nostrud labore aute deserunt. Esse id voluptate occaecat nisi velit nulla anim in eu ad sit. ",
    };
  },
  methods: {
    singleItem(category) {
      return (
        category,
        console.log(category),
        this.$router.push({ path: "/Sub/" + category })
      ); //?category=baverage
    },
  },
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
    axios
      .get("insight/GetLatesInsight")

      .then((response) => {
        this.latestInsight = response.data;
        console.log("Insight 😂", this.latestInsight);

        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
