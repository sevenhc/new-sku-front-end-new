<template>
  <v-container class="mt-12">
    <v-layout>
      <v-flex>
        <div class="heading">
          How it works
          <v-divider width="10%"></v-divider>
        </div>

        <div class="heading2 pa-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          consequatur amet dolorem harum numquam ipsam rem ea sequi sed, et
          totam tempora repellendus autem quia beatae, aperiam ratione hic
          saepe?
        </div>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md12>
        <v-container fluid>
          <v-row dense>
            <v-col
              class="pa-4"
              v-for="card in cards"
              :key="card.title"
              cols="12"
              md="4"
              sm="11"
              xs="11"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text"
                  height="250px"
                >
                  <div class="imageNameBack">
                    <div>
                      <p class="categoryTitle" v-text="card.title"></p>
                    </div>
                  </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
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
.categoryTitle {
  text-align: center;
  margin-bottom: 210px;
  background-color: rgba(17, 17, 17, 0.671);
  min-width: 100%;
  font-size: 1.4rem;
  padding:3%;
 
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
