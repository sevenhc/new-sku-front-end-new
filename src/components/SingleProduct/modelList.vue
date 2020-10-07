<template>
  <v-card class="mx-auto" flat>
    <v-list dense>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in librarys" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content @click="singleItem(item.id, item.title)">
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-description
              v-text="item.createdAt"
            ></v-list-item-description>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="addItem(name, path, product_id, item.id)">
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
    name: String,
    path: String,
    product_id: String,
  },
  data: () => ({
    librarys: "",
    newId: "https",
  }),
  methods: {
    singleItem(id, title) {
      return (
        id,
        title,
        console.log("toNewRoute", id, title),
        this.$router.push({ path: "/MyLibrary/" + id })
      ); //?category=baverage
    },
    addItem(name, path, product_id, id) {
      console.log(name, path, product_id, id);
      this.newId = this.id;

      const newItem = {
        name: this.name,
        path: this.path,
        product_id: this.product_id,
        libraryNameId: id,
      };
      console.log("itemToPost", newItem);
      axios
        .post("http://localhost:3200/library/addLibraryItem", newItem)
        .then(
          (response) => (this.libraryNameId = response.data),
          this.$forceUpdate(),
          console.log("Posted", newItem),
          this.singleItem(id)
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
        .post("http://localhost:3200/library/addLibrary", article)
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
      .get("http://localhost:3200/library/findAllLibrary")
      .then((response) => {
        this.librarys = response.data;
        console.log("library", response.data);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
