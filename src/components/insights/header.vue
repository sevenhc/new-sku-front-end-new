<template>
  <v-container class="mt-12">
    <v-card class="mt-12">
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
          >Insights</v-card-title
        >
      </v-img>
      <v-layout>
        <v-flex md12>
          <v-container fluid class="pa-md-12">
            <p class="heading3">{{ insight.InsightTitle }}</p>
            <p class="heading">{{ insight.CreatedDate }}</p>
            <div class="pa-md-12">
              <v-img
                class="pa-12"
                width="100%"
                height="50%"
                :src="
                  'http://new-sku-back-end.herokuapp.com/' +
                    insight.ThumbnailPath
                "
              >
              </v-img>
            </div>
            <p class="heading2 mt-12">
              {{ insight.Description }}
            </p>
            <p class="heading2 mt-7">
              {{ insight.Description }}
            </p>
            <p class="heading2 mt-7">
              {{ insight.Description }}
            </p>
            <!-- <v-btn text color="#2c547c" to="/">
              <v-icon left> mdi-arrow-left</v-icon>
              back to home
            </v-btn> -->
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
    insight: "",
    title: "Chilled fish and seafood",
    src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    flex: 4,
  }),
  mounted() {
    axios
      .get(
        "http://new-sku-back-end.herokuapp.com/insight/getInsById/" +
          this.$route.params.id
      )

      .then((response) => {
        this.insight = response.data[0];
        console.log("insight", this.insight);

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
.heading {
  text-align: start;
  font-weight: bold;
  font-size: 1.2rem;
  color: #2c547c;
}
.addLibrary {
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  color: #2c547c;
}
.heading2 {
  text-align: start;
  font-size: 1rem;
  color: #2c547c;
  font-weight: 500;
}
.heading3 {
  text-align: start;
  font-size: 2em;
  color: #2c547c;
  font-weight: bold;
}
</style>
