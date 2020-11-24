<template>
  <div >
    <v-layout row wrap justify-space-around>
      <v-flex md1 xs5>
        <div>
          <v-img :src="require('../assets/logo.png')" min-width="200px" />
        </div>
      </v-flex>
      <v-flex md1 xs5>
        <div>
          <v-img :src="require('../assets/logo.png')" min-width="200px" />
        </div>
      </v-flex>
      <!-- <v-spacer class="d-none d-lg-block "></v-spacer> -->
      <v-flex md9 xs3 align-self-center>
        <div class="d-none d-lg-block ">
          <v-layout row wrap>
            <v-flex mdd2>
              <v-btn text large class="" to="/catagoriesScreen" color="#2c547c"
                >category</v-btn
              >
            </v-flex>
          </v-layout>
        </div>
        <div class="d-lg-none">
          <v-menu
            class=""
            offset-y
            transition="scroll-x-reverse-transition"
            min-width="100%"
            padding-top="30%"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" @click="expand = !expand">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-flex>
      <!-- <v-spacer class="d-none d-lg-block "></v-spacer> -->
    </v-layout>
  </div>
</template>
<script>
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
};
</script>
<style scoped>
.app_bar {
  background-color: transparent;
}
</style>
