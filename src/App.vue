<template>
  <v-app>
    <Header />

      <router-view></router-view>
 
    <Fotter />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Fotter from "./components/Footer";
export default {
  name: "App",

  components: { Header, Fotter },

  data: () => ({
    //
  }),
};
</script>
