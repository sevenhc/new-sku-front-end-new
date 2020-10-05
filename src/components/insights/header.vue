<template>
  <v-container>
    <v-card  to="/Products">
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
      <v-layout >
        <v-flex md12>
          <v-container fluid class="pa-md-12">
            <p class="heading3">Will we ever embarace insects</p>
            <p class="heading">February 15th, 2016</p>
            <div class="pa-md-12"> 
              <v-img
                class="pa-12"
                width="100%"
                height="50%"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
              </v-img>
            </div>
            <p class="heading2 mt-12">
              Qui proident ea aliquip et. Cupidatat qui tempor anim do mollit
              cupidatat amet pariatur duis magna. Aliquip id cillum eu nisi
              adipisicing nisi nisi. Do in et aute excepteur dolor qui. Dolor
              laboris occaecat eiusmod anim. Excepteur elit mollit nisi occaecat
              Lorem. Id eiusmod irure laboris aliquip ipsum cillum pariatur.
              Incididunt in deserunt magna velit do in ex voluptate aliqua ea.
              Lorem incididunt ea laborum reprehenderit minim esse v veniam
              proident sint adipisicing. Pariatur eiusmod pariatur officia
              tempor tempor dolore non ea esse dolore ullamco adipisicing qui
              ea. Cupidatat mollit laboris tempor sunt enim consectetur. Laboris
              do minim sint duis consectetur labore culpa Lorem nisi adipisicing
              qui aute ipsum magna. Duis labore Lorem id esse cillum dolor amet
              nisi pariatur quis eu occaecat. Eiusmod id minim nulla dolor culpa
              nostrud enim sit reprehenderit irure. Incididunt sint sint et in
              ad et Lorem sint aute elit. Adipisicing proident elit nostrud
              occaecat esse aliqua quis commodo.
            </p>
            <p class="heading2 mt-7">
              Qui proident ea aliquip et. Cupidatat qui tempor anim do mollit
              cupidatat anim laborum dolore irure occaecat. Commodo id cillum
              enim aliqua. Duis ullamco magna pariatur ullamco aliqua consequat
              laboris ipsum commodo reprehenderit laboris ea et. Aliqua dolore
              elit ad proident amet pariatur duis magna. Aliquip id cillum eu
              nisi adipisicing nisi nisi. Do in et aute excepteur dolor qui.
              Dolor laboris occaecat eiusmod anim. Excepteur elit mollit nisi
              occaecat Lorem. Id eiusmod irure laboris aliquip ipsum cillum
              pariatur. Incididunt in deserunt magna velit do in ex voluptate
              aliqua ea. Lorem incididunt ea laborum reprehenderit minim esse v
              veniam proident sint adipisicing. Pariatur eiusmod pariatur
              officia tempor tempor dolore non ea esse dolore ullamco
              adipisicing qui ea. Cupidatat mollit laboris tempor sunt enim
              consectetur. Laboris do minim sint duis consectetur labore culpa
              Lorem nisi adipisicing qui aute ipsum magna. Duis labore Lorem id
              esse cillum dolor amet nisi pariatur quis eu occaecat. Eiusmod id
              minim nulla dolor culpa nostrud enim sit reprehenderit irure.
              Incididunt sint sint et in ad et Lorem sint aute elit. Adipisicing
              proident elit nostrud occaecat esse aliqua quis commodo.
            </p>
            <p class="heading2 mt-7">
              Qui proident ea aliquip et. Cupidatat qui tempor anim do mollit
              cupidatat anim laborum dolore irure occaecat. Commodo id cillum
              enim aliqua. Duis ullamco magna pariatur ullamco aliqua consequat
              laboris ipsum commodo reprehenderit laboris ea et. Aliqua dolore
              elit ad proident amet pariatur duis magna. Aliquip id cillum eu
              nisi adipisicing nisi nisi. Do in et aute excepteur dolor qui.
              Dolor laboris occaecat eiusmod anim. Excepteur elit mollit nisi
              occaecat Lorem. Id eiusmod ß
            </p>
            <v-btn text color="#2c547c" to="/">
                <v-icon left> mdi-arrow-left</v-icon>
                back to home
              </v-btn>
          </v-container>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Chilled fish and seafood",
    src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    flex: 4,
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
