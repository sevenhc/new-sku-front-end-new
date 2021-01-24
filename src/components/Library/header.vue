<template>
  <v-container grid-list-xs>
    <div class="d-flex justify-center flex-row-reverse">
      <p class="pa-2 mobile">{{ name }}</p>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-select
        :items="names"
        label="Your Library"
        solo
        min-width="10%"
        color="primary"
      ></v-select>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    librarys: "",
    names: [],
  }),
  mounted() {
    axios
      .get("https://new-sku-back-end.herokuapp.com/library/getAll/1")
      .then((response) => {
        this.librarys = response.data;
        this.librarynames = response.data[0].LibraryName;
        for (const i of Object.keys(this.librarys)) {
          this.new= this.librarys[i];
          this.names = this.new.LibraryName;
          console.log("name", this.names);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.mobile {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #2c547c;
}
.large {
  padding: 4%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: #2c547c;
}
</style>
ß
