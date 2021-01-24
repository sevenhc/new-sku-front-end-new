<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-text-field
          v-model="LibraryName"
          :rules="nameRules"
          :counter="10"
          required
        ></v-text-field>
        <v-btn color="#2c547c" class="mt-5" text>save</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["user", "clientID"]),
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
  data: () => ({
    valid: false,
    LibraryName: "",
    nameRules: [
      (v) => !!v || "Library Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),
  methods: {
    sendFile() {
      axios
        .post("https://new-sku-back-end.herokuapp.com/library/addNew", {
          LibraryName: this.LibraryName,
          ClientID: 1,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          this.dialog = false;
        });
    },
  },
};
</script>
<style>
.heading {
  text-align: center;
  font-weight: bold;

  font-size: 2rem;
  color: #2c547c;
}
</style>
