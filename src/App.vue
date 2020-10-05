<template>
  <v-app>
    <Header />

    <v-main>
      <router-view></router-view>
    </v-main>
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
