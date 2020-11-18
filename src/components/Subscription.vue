<template>
  <v-container  class="mt-12 mb-12">
    <v-layout>
      <v-flex xs12>
        <div class="heading">Save time and money</div>
        <div class="heading2 pa-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consequatur amet dolorem harum numquam ipsam rem ea sequi sed, et
          totam tempora repellendus autem quia beatae, aperiam ratione hic
          saepe?
        </div>
      </v-flex>
    </v-layout>
    <v-container fluid>
      <v-card color="#e1e6e8">
        <v-layout row>
          <v-flex md6 xs12 class="pa-md-1">
            <div class="pa-9">
              <v-img src="https://picsum.photos/510/300?random" height="20%"></v-img>
              <div class="heading2 pa-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                consequatur amet dolorem harum numquam ipsam rem ea sequi sed,
                et totam tempora repellendus autem quia beatae, aperiam ratione
                hic saepe?
              </div>
            </div>
          </v-flex>
          <v-flex md6 xs12 class="pa-md-1 pa-6">
            <div class="pa-md-9">
              <div flat color="#e1e6e8" class="signUpBody pa-md-12 pa-3">
                <div class="heading3 mb-4">Sign up for a 7 day Free trial</div>
                <div ma-12>
                  <v-text-field label="Name" single-line solo></v-text-field>
                </div>
                <v-text-field label="Email" single-line solo></v-text-field>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
.card {
  color: rgba(135, 173, 243, 0.411);
  border: 1px solid red;
}
.signUpBody{
  border: 1px solid #fff;
  min-height: 100px;
}
.heading {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #2c547c;
}
.heading2 {
  text-align: center;
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
