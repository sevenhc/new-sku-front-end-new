<template>
  <v-card class="mx-auto" flat>
    <v-list dense>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in librarys" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="singleItem(item.id, item.title)">
            <v-list-item-title v-text="item.LibraryName"></v-list-item-title>
            <v-list-item-description
              v-text="item.createdAt"
            ></v-list-item-description>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="addItem(product_id, item.LibraryNameID)">
              <v-icon color="grey lighten-1">mdi-bookmark-plus</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
import axios from "axios";

export default {
  props: {
    product_id: Number,
  },
  data: () => ({
    librarys: "",
    newId: "https",
  }),
  methods: {
    singleItem(LibraryNameID) {
      return (
        LibraryNameID,
        console.log("toNewRoute", LibraryNameID),
        this.$router.push({ path: "/MyLibrary/" + LibraryNameID })
      ); //?category=baverage
    },
    addItem(product_id, LibraryNameID) {
      console.log(product_id, LibraryNameID);
      this.newId = this.id;

      const newItem = {
        ProductID: this.product_id,
        LibraryID: LibraryNameID,
      };
      console.log("itemToPost", newItem);
      axios
        .post(
          "https://new-sku-back-end.herokuapp.com/library/items/addNew",
          newItem
        )
        .then(
          (response) => (this.libraryNameId = response.data),
          this.$forceUpdate(),
          console.log("Posted", newItem),
          this.singleItem(LibraryNameID)
        )
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    created() {
      // POST request using axios with error handling
      const article = {
        title: this.title,
      };
      axios
        .post(
          "https://new-sku-back-end.herokuapp.com/library/addLibrary",
          article
        )
        .then(
          (response) => (this.articleId = response.data.id),
          this.$forceUpdate()
        )
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    axios
      .get("https://new-sku-back-end.herokuapp.com/library/getAll/2")
      .then((response) => {
        this.librarys = response.data[0];
        console.log("library", response.data);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
