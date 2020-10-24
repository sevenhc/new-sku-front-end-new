<template>
  <div class="container">
    <v-card class="Library">
      <v-select
        :items="newss"
        label="Standard"
      ></v-select>
      <v-layout>
        <v-flex md12>
          <v-row>
            <v-col
              class="pa-4"
              v-for="card in librarys"
              :key="card.LibraryNameID"
              cols="12"
              md="3"
              sm="11"
              xs="11"
            >
              <v-card @click="selectLibrary(card.LibraryNameID)">
                <v-card-title class="text-end pa-2">
                  {{ card.LibraryName }}
                  {{ card.LibraryNameID }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card>
      <p class="name pa-3">{{ LibraryName }}</p>
      <v-layout>
        <v-flex md12>
          <v-container fluid>
            <v-row dense>
              <v-col
                class="pa-4"
                v-for="card in libary"
                :key="card.ProductID"
                cols="12"
                md="4"
                sm="11"
                xs="11"
              >
                <v-card>
                  <v-img
                    :src="
                      'https://new-sku-back-end.herokuapp.com/' + card.Thumbnail
                    "
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
                  >
                  </v-img>
                  <v-card-actions>
                    <p class="text-end pa-2">
                      {{ card.ProductName }}
                    </p>
                    <v-spacer></v-spacer>
                    <v-btn
                      icon
                      @click="download(card.Thumbnail)"
                      class="text-end"
                    >
                      <v-icon>mdi-download</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
      <v-row justify="space-between pa-12">
        <v-btn text color="#2c547c">
          <v-icon left> mdi-download-multiple</v-icon>
          Download All
        </v-btn>

        <v-btn text color="#2c547c">
          <v-icon left> mdi-arrow-left</v-icon>
          back
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    librarys: "",
    newss:["asd","sasas"],
    news: [],
    names: [],
    products: "",
    libary: "",
  }),
  methods: {
    selectLibrary(LibraryNameID) {
      this.LibraryNewID = LibraryNameID;
      console.log("lib ID", this.LibraryNewID);
      this.newData(this.LibraryNewID);
    },
    newData() {
      axios
        .get(
          "http://new-sku-back-end.herokuapp.com/library/items/getAll/" +
            this.LibraryNewID
        )
        .then((response) => {
          this.libary = response.data;
          console.log("laibrary data-->", this.LibraryNewID);
          // this.response=console.log.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    download(path) {
      console.log(path);
      window.location.href = "http://new-sku-back-end.herokuapp.com/" + path;
    },
  },

  mounted() {
    axios
      .get("http://new-sku-back-end.herokuapp.com/library/getAll/1")
      .then((response) => {
        this.librarys = response.data[0];

        this.librarynames = response.data[0].LibraryName;

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
  },
};
</script>

<style>
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
</style>
ß
