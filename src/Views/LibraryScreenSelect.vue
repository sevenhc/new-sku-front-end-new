<template>
  <div class="pa-5">
    <!-- <v-alert
      v-model="alert"
      dismissible
      color="cyan"
      class="pa-2 mt-12"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-earth-box-plus"
    >
      Please select library names to view Products!
    </v-alert> -->
    <v-card class="mt-12">
      <!-- <v-row justify="space-around">
        <v-col cols="12" sm="10" md="8">
          <v-sheet elevation="10" class="py-4 px-1"> -->
      <!-- <p class="text-center heading">Please select or search Library Name</p> -->

      <!-- <v-chip-group
              mandatory
              active-class="red--text text--accent-4 "
              justify="space-around"
            >
              <v-chip
                v-for="tag in librarys"
                :key="tag"
                class="ma-2"
                @click="selectLibrary(tag.LibraryNameID)"
                color="indigo darken-3"
                outlined
              >
                <v-icon left> mdi-fire </v-icon>
                {{ tag.LibraryName }}
              </v-chip>
            </v-chip-group> -->
      <!-- </v-sheet>
        </v-col>
      </v-row> -->
      <v-layout row wrap justify-center pa-3 relative>
        <v-flex md2 xs9 pl-12>
          <v-autocomplete
            v-model="LibraryNameID"
            :disabled="isUpdating"
            :items="librarys"
            solo
            @change="selectLibrary(LibraryNameID)"
            color="blue-grey lighten-2"
            label="Your Library"
            item-text="LibraryName"
            item-value="LibraryNameID"
          ></v-autocomplete>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md12 xs12>
          <p class="name text-center text-uppercase">{{ newLiName }}</p>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex md12>
          <v-container fluid>
            <v-row dense>
              <v-col
                class="pa-md-4"
                v-for="card in libary"
                :key="card.ProductID"
                cols="12"
                md="3"
                sm="11"
                xs="11"
              >
                <v-card flat>
                  <v-img
                    :src="'https://api.newsku.co.uk/' + card.Thumbnail"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
                    @click="singleItem(card.ProductID)"
                  >
                  </v-img>
                  <v-card-actions>
                    <p class="">
                      {{ card.ProductName }}
                    </p>
                    <!-- <v-spacer></v-spacer>
                    <v-btn
                      icon
                      @click="download(card.Thumbnail)"
                      class="text-end"
                    >
                      <v-icon>mdi-download</v-icon>
                    </v-btn> -->
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
      <!-- <v-row justify="space-between pa-12">
        <v-btn text color="#2c547c">
          <v-icon left> mdi-download-multiple</v-icon>
          Download All
        </v-btn>

        <v-btn text color="#2c547c">
          <v-icon left> mdi-arrow-left</v-icon>
          back
        </v-btn>
      </v-row> -->
    </v-card>
  </div>
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
    loading: false,
    items: [],
    search: null,
    select: null,
    librarys: "",
    newss: ["asd", "sasas"],
    news: [],
    names: [],
    products: "",
    newLiName: "",
    alert: true,
    libary: "",
  }),
  methods: {
    selectLibrary(LibraryNameID) {
      this.LibraryNewID = LibraryNameID;
      console.log("lib ID", this.LibraryNewID);
      this.newData(this.LibraryNewID);
    },
    singleItem(ProductID) {
      return (
        ProductID,
        console.log("id", ProductID),
        this.$router.push({ path: "/SingleProduct/" + ProductID })
      ); //?category=baverage
    },
    newData() {
      console.log("newData 🤩😘", this.LibraryNewID);
      axios
        .get("library/items/getAll/" + this.LibraryNewID)
        .then((response) => {
          this.libary = response.data;
          this.newLiName = response.data[0].LibraryName;
          console.log(response.data[0].LibraryName);
          console.log("laibrary data-->", this.LibraryNewID);
          // this.response=console.log.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    download(path) {
      console.log(path);
      window.location.href = "https://api.newsku.co.uk/" + path;
    },
  },

  mounted() {
    axios
      .get("library/getAll/" + this.clientID)
      .then((response) => {
        this.librarys = response.data[0];
        console.log("🥵", this.librarys);
        this.librarynames = response.data[0].LibraryName;
        this.LibraryNewID = response.data[0][0].LibraryNameID;
        console.log("👽", this.LibraryNewID);
        this.newData(this.LibraryNewID);
        for (const i of Object.keys(this.librarys)) {
          this.news = this.librarys[i];
          this.names = this.news.LibraryName;
          console.log("name", this.names);
        }

        console.log("Librarys-->", this.librarys);
        console.log("Library names-->", this.librarynames);
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => (this.alert = false), 3000);
  },
};
</script>

<style>
.cardnew {
  margin-top: -20%;
}
.chipClass {
  color: red;
}
.Library {
  margin-top: 1%;
}
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

.heading {
  text-align: start;
  font-weight: bold;
  font-size: 2rem;
  color: #2c547c;
}
</style>
