<template>
  <div class="mt-12 mb-7">
    <v-container>
      <v-card color="#e1e6e8">
        <v-layout row wrap justify-space-between>
          <v-flex md6 xs12>
            <div
              :class="{
                mobile: $vuetify.breakpoint.smAndDown,
                large: $vuetify.breakpoint.mdAndUp,
              }"
            >
              will we ever embarace insects?
            </div>
            <div
              :class="{
                mobile2: $vuetify.breakpoint.smAndDown,
                large2: $vuetify.breakpoint.mdAndUp,
              }"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              consequatur amet dolorem harum numquam ipsam rem ea sequi sed, et
              totam tempora repellendus autem quia beatae, aperiam ratione hic
              saepe?amet dolorem harum numquam ipsam rem ea sequi sed, et totam
              tempora repellendus autem quia beatae, aperiam ratione hic saepe?
              <div class="text-center pa-4">
                <v-btn to="/Insights" text color="#2c547c">
                  Read More
                  <v-icon color="#2c547c"> mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-flex>
          <v-flex md6 xs12 class="text--center pa-3">
            <v-img src="https://picsum.photos/510/300?random"></v-img>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.card {
  color: rgba(135, 173, 243, 0.411);
  border: 1px solid red;
}
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
export default {
  data() {
    return {
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
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 4,
        },
      ],
      slidesHeading: "welcome to NewSku.",
      slideText:
        "Consequat irure proident reprehenderit mollit elit magna nostrud labore aute deserunt. Esse id voluptate occaecat nisi velit nulla anim in eu ad sit. ",
    };
  },
};
</script>
