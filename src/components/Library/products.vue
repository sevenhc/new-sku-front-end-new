<template>
  <div>
    <v-card to="/Products">
      <p class="name pa-3">VEGITARIAN</p>
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
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
                  >
                  </v-img>
                  <p class="text-end pa-2">
                    <v-icon>mdi-download</v-icon>
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
      <v-row justify="space-between pa-12">
          <v-btn text color="#2c547c">
            <v-icon left> mdi-download-multiple</v-icon> 
            Download All
          </v-btn>
        
          <v-btn text color="#2c547c">
            <v-icon left> mdi-arrow-left</v-icon>
            back
          </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Chilled fish and seafood",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4,
      },
      {
        title: "Chilled fish and seafood",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
      },
      {
        title: "Fresh Meat",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
      },
      {
        title: "Fresh Meat",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
    ],
  }),
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
.name {
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  color: #2c547c;
}
</style>
