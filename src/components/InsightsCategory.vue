<template>
  <div class="mt-12 mb-7 card">
    <v-container>
      <v-card flat>
        <v-layout row wrap justify-space-between>
          <v-flex md4 xs12>
            <div
              :class="{
                mobile: $vuetify.breakpoint.smAndDown,
                large: $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ latestInsight.InsightTitle }}
              <!-- will we ever embarace insects? -->
            </div>
            <div
              :class="{
                mobile2: $vuetify.breakpoint.smAndDown,
                large2: $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ latestInsight.Description }}
              <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              consequatur amet dolorem harum numquam ipsam rem ea sequi sed, et
              totam tempora repele, aperiam ratione hic saepe? -->
              <div class="text-left mt-3">
                <v-btn 
                :href="'/Insights/'+ latestInsight.InsightID"
                               
                text color="#2c547c">
                  Read More
                  <v-icon color="#2c547c"> mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-flex>
          <v-flex md8 xs12 class="text--center pa-3">
            <v-img
              aspect-ratio="2.6"
              :src="'http://134.209.188.201:81/' + latestInsight.ThumbnailPath"
              :lazy-src="'http://134.209.188.201:81/' + latestInsight.ThumbnailPath"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.mobile {
  text-align: left;
  padding: 7%;
  font-weight: bold;
  font-size: 1.3rem;
  color: #2c547c;
}
.large {
  padding: 4%;
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  color: #2c547c;
}
.readMore {
  text-align: left;
  font-size: 1rem;
  padding-top: 5%;
  color: #2c547c;
}
.mobile2 {
  text-align: left;
  padding: 7%;
  font-weight: bold;
  font-size: 0.8rem;
  color: #2c547c;
}
.large2 {
  padding: 4%;
  text-align: left;
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
      latestInsight: "",      
      };
  },
  mounted() {
    axios
      .get("insight/GetLatesInsight")

      .then((response) => {
        this.latestInsight = response.data[0];
        console.log("Insight 😂", this.latestInsight);

        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
