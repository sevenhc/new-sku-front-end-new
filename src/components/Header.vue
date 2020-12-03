<template>
  <v-layout row class="justify-space-between">
    <v-flex md2 xs6 sm3 to="/" class="ml-md-12" align-self-center>
      <router-link to="/">
        <v-img
          width="70%"
          height="70%"
          class="shrink"
          src="../assets/logo.png"
          transition="scale-transition"
        ></v-img>
      </router-link>
    </v-flex>
    <!-- <v-spacer></v-spacer> -->
    <v-flex md4 xs11 align-self-center class="d-none d-lg-block ">
      <v-row>
        <v-btn text v-if="isLoggedIn == false"></v-btn>
        <v-btn v-else text large class="" to="/catagoriesScreen" color="#2c547c"
          >category</v-btn
        >
        <v-btn text large class="" to="/InsightsList" color="#2c547c"
          >Insights</v-btn
        >
        <v-btn text v-if="isLoggedIn == false"></v-btn>
        <v-btn text v-else large class="" to="/MyLibrary" color="#2c547c"
          >MyLibrary</v-btn
        >
      </v-row>
    </v-flex>
    <!-- <v-spacer></v-spacer> -->
    <v-flex
      md2
      xs7
      class=" justify-space-around d-none d-lg-block"
      align-self-center
    >
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
        <v-btn text large class="" color="#2c547c">{{ user }}</v-btn>
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
    <v-spacer class="d-lg-none"></v-spacer>

    <v-flex xs2 class="d-lg-none" align-self-center>
      <v-menu
        class=""
        offset-y
        transition="scroll-y-transition"
        min-width="100%"
        padding-top="30%"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" @click="expand = !expand">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <div class="text-center">
                <v-btn
                  v-if="isLoggedIn == true"
                  text
                  large
                  class=""
                  to="/catagoriesScreen"
                  color="#2c547c"
                  >category</v-btn
                >
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="text-center">
                <v-btn
                  text
                  v-if="isLoggedIn == true"
                  large
                  class=""
                  to="/MyLibrary"
                  color="#2c547c"
                  >MyLibrary</v-btn
                >
              </div>
            </v-flex>
            <v-flex xs12>
              <div class="text-center">
                <v-btn text large class="" to="/InsightsList" color="#2c547c"
                  >Insights</v-btn
                >
              </div>
            </v-flex>
            <v-flex xs12 justify="">
              <div class="text-center">
                <v-flex v-if="isLoggedIn == false">
                  <v-btn text large class="" to="/LoginSignup" color="#2c547c"
                    >logIn</v-btn
                  >
                  <v-divider value="6" vertical></v-divider>

                  <v-btn text large class="" to="/CreateAccount" color="#2c547c"
                    >SignUp</v-btn
                  > </v-flex
                ><v-flex v-if="isLoggedIn == true">
                  <v-btn text large class="" color="#2c547c">{{ user }}</v-btn>
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
                </v-flex>
              </div>
            </v-flex>
          </v-layout>
        </v-list>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    expand: false,
    it: ["Foo", "Bar", "Fizz", "Buzz"],
    items: [
      { title: "Home" },
      { title: "Contact Us" },
      { title: "Packages" },
      { title: "Shoot 1" },
      { title: "Shoot 2" },
      { title: "Shoot 3" },
    ],
  }),
  computed: {
    ...mapState(["user", "userName"]),
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
