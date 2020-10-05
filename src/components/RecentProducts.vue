<template>
  <div class="mt-12 mb-12">
    <v-container-fluid>
      <v-card color="#e1e6e8">
        <v-layout row>
          <v-flex xs12>
            <div class="heading pt-9 pl-9">New Sku's out this week</div>
          </v-flex>
          <v-flex md4 xs12>
            <div class="pa-9">
              <v-img src="https://picsum.photos/510/300?random"></v-img>
              <div class="heading2 pa-3">
                Lorem ipsum dolor sit aperiam ratione hic saepe
              </div>
            </div>
          </v-flex>
          <v-flex md4 xs12>
            <div class="pa-9">
              <v-img src="https://picsum.photos/510/300?random"></v-img>
              <div class="heading2 pa-3">
                Lorem ipsum dolor sit aperiam ratione hic saepe?
              </div>
            </div>
          </v-flex>
          <v-flex md4 xs12>
            <div class="pa-9">
              <v-img src="https://picsum.photos/510/300?random"></v-img>
              <div class="heading2 pa-3">
                Lorem ipsum dolor sit aperiam ratione hic saepe?
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container-fluid>
  </div>
</template>

<style scoped>
.card {
  color: rgba(135, 173, 243, 0.411);
  border: 1px solid red;
}
.heading {
  text-align: left;
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
