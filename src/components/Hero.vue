<template>
  <v-carousel v-model="model" hide-delimiters :show-arrows="false" height="100%">
    <v-carousel-item v-for="(color, i) in colors" :key="color" :slideitem="i"> 
      <v-sheet :color="color.bgcolor" height="100%" tile >
        <v-row class="fill-height" align="center" justify="center">
          <v-col class="">
            <v-jumbotron dark>
              <v-container fill-height>
                <v-layout row align-center>
                  <v-flex md12 xs12>
                    <div
                      :class="{
                        mobile: $vuetify.breakpoint.smAndDown,
                        large: $vuetify.breakpoint.mdAndUp,
                      }"
                    >
                      {{ slidesHeading }}
                    </div>
                    <!-- <div
                      class="slideText"
                      :class="{
                        mobile2: $vuetify.breakpoint.smAndDown,
                        large2: $vuetify.breakpoint.mdAndUp,
                      }"
                    >
                      {{ slideText }}
                    </div> -->
                  </v-flex>
                </v-layout>
              </v-container>
            </v-jumbotron>
          </v-col>
        </v-row>
      </v-sheet>
      <!-- <v-icon>{{ scrollicon }}</v-icon> -->
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.mobile {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #ffffff;
}
.large {
  /* padding: 4%; */
  text-align: center;
  font-size: 6rem;
  font-weight: bold;
  color: #ffffff;
}
.mobile2 {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #ffffff;
}
.large2 {
  text-align: center;
  font-size: 6rem;
  font-weight: bold;
  color: #ffffff;
}

.mobile2 {
  text-align: left;
  padding: 7%;
  font-weight: bold;
  font-size: 0.8rem;
  color: #ffffff;
}
.large2 {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
  margin-top: -44px;
  color: #ffffff;
}
</style>
<script>
export default {
  data() {
    return {
      colors: [
        {
          src:
            "https://vfcadvisors.com/wp-content/uploads/2019/07/alcohol-2048x1365.jpg",
          bgcolor: "#2C547C",
        },
      ],
      scrollicon:"mdiChevronTripleDown ",
      slidesHeading: "Welcome to NewSku.",
      slideText:
        "Consequat irure proident reprehenderit mollit elit magna nostrud labore aute deserunt. t magna nostrud labore aute deserunt. Esse id voluptate occaecat nisi velit nulla anim in eu ad sit. ",
    };
  },
};
</script>
