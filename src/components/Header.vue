<template>
  <v-flex>
    <v-layout row class="justify-space-between">
      <v-flex md3 xs11 to="/">
        <router-link to="/">
          <v-img
            class="shrink mr-12"
            contain
            src="../assets/logo.jpg"
            transition="scale-transition"
            width="400"
          ></v-img>
        </router-link>
      </v-flex>
      <v-flex md2 xs11 class="ml-3" align-self-end>
        <v-row>
          <v-btn text large class="" to="/catagoriesScreen" color="#2c547c"
            >category</v-btn
          >
          <v-btn text large class="" to="/Insights" color="#2c547c"
            >Insights</v-btn
          >
        </v-row>
      </v-flex>
      <v-flex md2 xs11 class="ml-3" align-self-center>
        <v-row>
          <v-btn text large class="" to="/catagoriesScreen" color="#2c547c"
            >logIn</v-btn
          >
          <!-- <p class="mt-11 barLS">|</p> -->
          <v-btn text large class="" to="/nm" color="#2c547c"
            >SignUp</v-btn
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
export default {};
</script>

<style>
.barLS {
  color: #2c547c;
}
</style>
