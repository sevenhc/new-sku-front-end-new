<template>
  <v-layout>
    <v-toolbar flat color="#fff">
      <router-link to="/">
        <img class="mr-3" :src="require('../assets/logo.png')" height="55" />
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-inline">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :title="item.title"
          
          color="#fff"
          elevation="0"
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <!-- <v-row v-if="isLoggedIn == false"> -->
        <v-toolbar-items v-if="isLoggedIn == false"  class="d-none d-sm-inline">
        <v-btn          
          to="/LoginSignup"
          title="Login"
          
          color="#fff"
          elevation="0"
          >Login</v-btn>
      </v-toolbar-items>
        
      <!-- </v-row>
      <v-row v-else> -->
        <v-toolbar-items v-else class="d-none d-sm-inline">
        <v-btn          
          to="/MyLibrary"
          :title="user"
          
          color="#fff"
          elevation="0"
          >{{ user }}</v-btn>
        <v-btn          
          to="/"
          title="Log Out"
           @click="logout"
          
          color="#fff"
          elevation="0"
          >Log Out</v-btn>
      </v-toolbar-items>
      <!-- </v-row> -->
      <span>
        <!-- <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon> -->
        <v-app-bar-nav-icon @click.stop="sidebar = !sidebar" class="d-sm-none"></v-app-bar-nav-icon>

      </span>
    </v-toolbar>

     <v-navigation-drawer v-model="sidebar" absolute
      right
      temporary app
      hide-overlay>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          link>          
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list  v-if="isLoggedIn == false">
        <v-list-item
           to="/LoginSignup"
          title="Login"
          
          color="#fff"
          elevation="0"
          link>          
          <v-list-item-content>Sign Out</v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list v-else>
        <v-list-item
          to="/MyLibrary"
          :title="user"
          
          color="#fff"
          elevation="0"
          link>          
          <v-list-item-content>{{ user }}</v-list-item-content>
        </v-list-item>
        <v-list-item
           to="/"
          title="Log Out"
           @click="logout"
          
          color="#fff"
          elevation="0"
          link>          
          <v-list-item-content>Sign Out</v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

  </v-layout>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      menuItems: [
        { title: "Categories", path: "/catagoriesScreen", icon: "home" },
        { title: "Insights", path: "/InsightsList", icon: "face" },
        { title: "My Library", path: "/MyLibrary", icon: "lock_open" },
      ]
    };
  },
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
</style>
