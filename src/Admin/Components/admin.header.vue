<template>
  <v-flex>
    <v-layout row class="justify-space-between">
      <v-flex md3 xs11 to="/">
        <router-link to="/">
          <v-img
            class="shrink mr-12"
            contain
            transition="scale-transition"
            width="400"
          ></v-img>
        </router-link>
      </v-flex>
      <v-flex md2 xs11 class="ml-3" align-self-end>
        <v-row>
          <v-btn
            text
            large
            class=""
            v-if="isLoggedIn == false"
            disabled
            to="/catagoriesScreen"
            color="primary"
            >category</v-btn
          >
          <v-btn
            v-else
            text
            large
            class=""
            to="/catagoriesScreen"
            color="#2c547c"
            >category</v-btn
          >
          <v-btn text large class="" to="/Insights" color="#2c547c"
            >Insights</v-btn
          >
        </v-row>
      </v-flex>
      <v-flex md2 xs11 class="ml-3" align-self-end>
        <v-row v-if="isLoggedIn == false">
          <v-btn text large class="" to="/LoginSignup" color="#2c547c"
            >logIn</v-btn
          >
          <v-divider value="6" vertical></v-divider>

          <v-btn text large class="" to="/CreateAccount" color="#2c547c"
            >SignUp</v-btn
          >
        </v-row>
        <v-row v-else>
          <v-btn text large class="" to="/LoginSignup" color="#2c547c">{{
            user
          }}</v-btn>
          <v-divider value="6" vertical></v-divider>

          <v-btn
            text
            large
            class=""
            to="/LoginSignup"
            @click="logout"
            color="#2c547c"
            >Log Out</v-btn
          >
        </v-row>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
  </v-flex>

  <!-- <v-spacer></v-spacer>

    <v-btn text medium class="mt-4" color="#2c547c">logIn</v-btn>
    <p class="mt-4 barLS">|</p>

    <v-btn text medium class="mt-4" color="#2c547c">SignUp</v-btn> -->
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
    ...mapGetters([
      "userName",
      "mobile",
      "email",
      "userId",
      "town",
      "fullName",
      "landLine",
      "isLoggedIn",
      "deliveryAddress",
    ]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/").catch((err) => console.log(err));
      });
    },
  },
};
</script>

<style>
.barLS {
  color: #2c547c;
}
</style>
