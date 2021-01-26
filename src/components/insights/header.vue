<template>
  <v-container fluid class="">
    <v-card class="">
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
      <v-container>
        <v-flex md12>
          <v-container fluid class="pa-md-12">
            <p class="heading3">{{ insight.InsightTitle }}</p>
            <p class="insightdate">
              {{ genmonth }} {{ gendate }}<sup>{{ gennth }} </sup> {{ genyear }}
            </p>
            <div class="pa-md-12">
              <v-img
                class="pa-12"
                width="100%"
                height="50%"
                :src="'https://api.newsku.co.uk/' + insight.ThumbnailPath"
              >
              </v-img>
            </div>

            <div v-html="insight.Description"></div>

            <!-- <v-btn text color="#2c547c" to="/">
              <v-icon left> mdi-arrow-left</v-icon>
              back to home
            </v-btn> -->
          </v-container>
        </v-flex>
      </v-container>
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
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    gendate: "",
    genmonth: "",
    genyear: "",
    gennth: "",
  }),
  mounted() {
    axios
      .get(
        "https://api.newsku.co.uk/insight/getInsById/" + this.$route.params.id
      )

      .then((response) => {
        this.insight = response.data[0];
        console.log("insight", this.insight);
        this.gendate = new Date(this.insight.CreatedDate).getDate();
        this.genmonth = this.months[
          new Date(this.insight.CreatedDate).getMonth()
        ];
        this.genyear = new Date(this.insight.CreatedDate).getFullYear();
        this.gennth = this.getnth(this.gendate);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    getnth(d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    },
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
.insightdate {
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
  margin-bottom: 0;
}
</style>
