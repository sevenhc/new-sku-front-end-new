<template>
  <v-row justify="space-around">
    <v-col cols="12" sm="10" md="6">
      <v-sheet elevation="10" class="py-4 px-1">
        <p class="text-center">Please select Category</p>

        <v-chip-group mandatory active-class="primary--text">
          <v-chip
            v-for="tag in librarys"
            :key="tag"
            @click="Library(tag.LibraryNameID)"
          >
            {{ tag.LibraryName }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
    <v-card>
      <p class="name pa-3">{{ libary[0].LibraryName }}</p>
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
                      'http://new-sku-back-end.herokuapp.com/' + card.Thumbnail
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
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    libary: "",
    librarys: "",
    tags: [
      "Work",
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing",
    ],
  }),
  methods: {
    Library(LibraryNameID) {
      return LibraryNameID, console.log(LibraryNameID);
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

    axios
      .get("http://new-sku-back-end.herokuapp.com/library/items/getAll/" + 211)
      .then((response) => {
        this.libary = response.data;
        console.log("laibrary data-->", this.libary);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
