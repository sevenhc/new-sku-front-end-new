<template>
  <v-container>
    <v-card to="/Products" flat>
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
                    src="https://vfcadvisors.com/wp-content/uploads/2019/07/alcohol-2048x1365.jpg"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
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
    new: this.$route.params.id,
  }),
  mounted() {
    axios
      .get("http://new-sku-back-end.herokuapp.com/findAllSubCategory/" + this.$route.params.id)

      .then((response) => {
        this.products = response.data;
        console.log("sub-category", response);

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
