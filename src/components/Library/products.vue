<template>
  <div>
    <v-card>
      <p class="name pa-3">{{ libary.title }}</p>
      <v-layout>
        <v-flex md12>
          <v-container fluid>
            <v-row dense>
              <v-col
                class="pa-4"
                v-for="card in products"
                :key="card.title"
                cols="12"
                md="4"
                sm="11"
                xs="11"
              >
                <v-card>
                  <v-img
                    :src="'https://new-sku.herokuapp.com/' + card.path"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="250px"
                  >
                  </v-img>
                  <v-card-actions>
                    <p class="text-end pa-2">
                      {{ card.name }}
                    </p>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="download(card.path)" class="text-end">
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
    products: "",
    libary: "",
  }),
  mounted() {
    axios
      .get(
        "http://localhost:3200/library/findAllItemsByLibrary/" +
          this.$route.params.id
      )
      .then((response) => {
        this.libary = response.data;
        this.products = response.data.library_names;
        console.log("laibrary Products-->", response.data.library_names);
        console.log("laibrary-->", response.data);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    download(path) {
      console.log(path);
      window.location.href = "https://new-sku.herokuapp.com/" + path;
    },
  },
};
</script>

<style>
.mobileCardText {
  text-align: left;
  padding: 7%;
  font-weight: bold;
  font-size: 1.5rem;
}
.largeCardText {
  padding: 4%;
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
}
.name {
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  color: #2c547c;
}
</style>
