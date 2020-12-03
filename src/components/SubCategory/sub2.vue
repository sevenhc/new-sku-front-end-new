<template>
  <v-container fluid class="mt-12">
    <DateAndFilter />
    <v-card class="mt-12">
      <!-- <v-img
        class="white--text align-end"
        height="180px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title
          :class="{
            mobileCardText: $vuetify.breakpoint.smAndDown,
            largeCardText: $vuetify.breakpoint.mdAndUp,
          }"
        >
          {{ CategoryName }}</v-card-title
        >
      </v-img> -->
      <div class="header_sub" :style="cssVars">
        <v-card-title
          style="color:white"
          :class="{
            mobileCardText: $vuetify.breakpoint.smAndDown,
            largeCardText: $vuetify.breakpoint.mdAndUp,
          }"
        >
          {{ CategoryName }}</v-card-title
        >
      </div>
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
                <v-card flat>
                  <v-img
                    :src="'http://134.209.188.201:81/' + product.ThumbnailImage"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
                    @click="singleItem(product.SubCategoryID)"
                  >
                  </v-img>
                  <v-card-title class="cardTitle">
                    {{ product.SubCategoryName }}
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
import DateAndFilter from "./DateAndFilter";
export default {
  data: () => ({
    components: { DateAndFilter },
    products: "",
    Color: "",
    CategoryName: "",
    // new: this.$route.params.id,
  }),
  computed: {
    cssVars() {
      return {
        /* variables you want to pass to css */
        "--color": this.Color,
      };
    },
  },
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
    this.newId = this.$route.params.id;
    console.log(this.newId);
    axios
      .get(
        "http://134.209.188.201:81/subCategory/getAll/" + this.$route.params.id
      )
      .then((response) => {
        this.products = response.data;
        console.log("sub", response.data);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://134.209.188.201:81/category/GetCategoryByID/" + this.newId)
      .then((response) => {
        this.CategoryName = response.data[0].CategoryName;
        this.Color = response.data[0].Color;
        console.log("subCategory-Name", this.CategoryName);
        console.log("😀", this.Color);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.header_sub {
  background-color: var(--color);
}
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
