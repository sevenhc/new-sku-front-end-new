<template>
  <v-carousel
    style="height: 100% ,width=10%"
    hide-delimiters
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.5)"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
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
              <div
                class="slideText"
                :class="{
                  mobile2: $vuetify.breakpoint.smAndDown,
                  large2: $vuetify.breakpoint.mdAndUp,
                }"
              >
                {{ slideText }}
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
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
  padding: 4%;
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
  text-align: left;
  font-size: 1rem;
  color: #ffffff;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://vfcadvisors.com/wp-content/uploads/2019/07/alcohol-2048x1365.jpg",
        },
      ],
      slidesHeading: "welcome to NewSku.",
      slideText:
        "Consequat irure proident reprehenderit mollit elit magna nostrud labore aute deserunt. Esse id voluptate occaecat nisi velit nulla anim in eu ad sit. ",
    };
  },
};
</script>
