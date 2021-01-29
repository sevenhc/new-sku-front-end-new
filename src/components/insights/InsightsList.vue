<template>
  <v-container fluid class="">
    <v-card class="">
      <div class="header_sub" style="background-color: #2c547c">
        <v-layout row wrap align-center justify-space-between pa-6>
          <v-flex md6 xs12>
            <v-card-title
              style="color: white"
              :class="{
                mobileCardText: $vuetify.breakpoint.smAndDown,
                largeCardText: $vuetify.breakpoint.mdAndUp,
              }"
              >Insights</v-card-title
            >
          </v-flex>
        </v-layout>
      </div>
    </v-card>
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
              sm="12"
              xs="12"
            >
            <v-hover v-slot="{ hover }">
              <v-card>
                <v-img
                  :src="'https://api.newsku.co.uk/' + product.ThumbnailPath"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="250px"
                  @click="singleItem(product.InsightID)"
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
                        
                      </v-fade-transition>
                </v-img>
                <v-card-title class="cardTitle">
                  {{ product.InsightTitle }}
                </v-card-title>
              </v-card>
            </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    products: "",
  }),
  methods: {
    singleItem(InsightID) {
      return (
        InsightID,
        console.log(InsightID),
        this.$router.push({
          path: "/Insights/" + InsightID,
        })
      ); //?category=baverage
    },
  },
  mounted() {
    axios
      .get("https://api.newsku.co.uk/insight/getAll")
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
