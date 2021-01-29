<template>
  <div>
    <v-btn text color="#2c547c" @click="dialog = true">
      SAVE TO LIBRARY
      <v-icon color="pink" right> mdi-heart</v-icon>
    </v-btn>
    <div class="text-center">
      <v-dialog v-model="dialog">
        <v-card class="rounded-card">
          <v-layout wrap class="pa-12 justify-space-between">
            <v-flex md6 mb-xs-6 mb-md-0>
              <div class="pr-5" :class="{
                    mobilemargin: $vuetify.breakpoint.smAndDown,
                    largemargin: $vuetify.breakpoint.mdAndUp,
                  }">
                <p
                  class="mb-4"
                  :class="{
                    mobile2: $vuetify.breakpoint.smAndDown,
                    large2: $vuetify.breakpoint.mdAndUp,
                  }"
                >
                  {{ productName }}
                </p>
                <v-img
                  aspect-ratio="1.7"
                  :src="'https://api.newsku.co.uk/' + mainImage"
                ></v-img>
              </div>
            </v-flex>
            <v-flex md6 mt-xs-6 mt-md-0>
              <p
                :class="{
                  mobile2: $vuetify.breakpoint.smAndDown,
                  large2: $vuetify.breakpoint.mdAndUp,
                }"
              >
                Create a new library or search
              </p>
              <v-alert
                v-model="alert"
                dismissible
                color="cyan"
                class="pa-5"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-earth-box-plus"
              >
                <strong>{{ productName }}</strong> added to your Library
              </v-alert>
              <v-form ref="form">
                <v-container>
                  <v-row>
                    <v-text-field
                      v-model="LibraryName"
                      :rules="nameRules"
                      :counter="50"
                      required
                    ></v-text-field>
                    <v-btn
                      @click="createLibrary()"
                      color="#2c547c"
                      class="mt-5"
                      text
                      >Add New Library</v-btn
                    >
                  </v-row>
                </v-container>
              </v-form>
              <v-divider></v-divider>
              <!-- <ModelList :product_id="product_id"></ModelList>
              @click="singleItem(item.id, item.title)" -->
              <v-card class="mx-auto" flat>
                <v-list dense>
                  <v-list-item-group v-model="item" color="primary">
                    <v-list-item v-for="(item, i) in librarys" :key="i">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.LibraryName"
                        ></v-list-item-title>
                        <!-- <v-list-item-description
                          v-text="item.createdAt"
                        ></v-list-item-description> -->
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-btn
                          icon
                          @click="addItem(product_id, item.LibraryNameID)"
                        >
                          <v-icon color="black lighten-1"
                            >mdi-bookmark-plus</v-icon
                          >
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
// import ModelList from "../SingleProduct/modelList";
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
  // components: { ModelList },
  props: {
    product_id: Number,
    mainImage: String,
    productName: String,
  },
  data: () => ({
    LibraryName: "",
    librarys: "",
    dialog: false,
    valid: false,
    alert: false,
    lastname: "",
    nameRules: [
      (v) => !!v || "Library Name is required",
      (v) => v.length <= 50 || "Name must be less than 50 characters",
    ],
  }),
  methods: {
    getAllLibraries(product_id) {
      console.log("getAll");
      axios
        .get("library/getAll/" + this.clientID)
        .then((response) => {
          this.librarys = response.data[0];
          console.log("library", this.librarys);
          console.log("library", this.librarys.slice(-1)[0]);
          this.newLibID = this.librarys.slice(-1)[0].LibraryNameID;
          console.log("newLibID", this.newLibID);
          this.addItem2(product_id, this.newLibID);
          // this.response=console.log.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
    singleItem(LibraryNameID) {
      return (
        LibraryNameID,
        console.log("toNewRoute", LibraryNameID),
        this.$router.push({ path: "/MyLibrary/" + LibraryNameID })
      ); //?category=baverage
    },
    createLibrary() {
      if (this.$refs.form.validate()) {
        console.log(this.LibraryName);
        axios
          .post("library/addNew", {
            LibraryName: this.LibraryName,
            ClientID: this.clientID,
          })
          .then((response) => {
            const data = response;
            console.log("new Library", data);
            // this.librarys.push(data);
            this.getAllLibraries();
          });
      }
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
        .post("library/items/addNew", newItem)
        .then(
          (response) => (this.libraryNameId = response.data),
          this.$forceUpdate(),
          console.log("Posted", newItem),
          // this.singleItem(LibraryNameID)
          (this.alert = true),
          setTimeout(() => (this.dialog = false), 2000),
          setTimeout(() => (this.alert = false), 2000)
        )
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    addItem2(product_id, LibraryNameID) {
      console.log("32", product_id, this.newLibID);
      this.newId = this.id;

      const newItem = {
        ProductID: this.product_id,
        LibraryID: LibraryNameID,
      };
      console.log("itemToPost", newItem);
      axios
        .post("library/items/addNew", newItem)
        .then(
          (response) => (this.libraryNameId = response.data),
          this.$forceUpdate(),
          console.log("Posted", newItem),
          // this.singleItem(LibraryNameID)
          (this.alert = true),
          setTimeout(() => (this.dialog = false), 2000),
          setTimeout(() => (this.alert = false), 2000)
        )
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
  },
  mounted() {
    axios
      .get("library/getAll/" + this.clientID)
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
<style>
.heading {
  text-align: start;
  font-weight: bold;
  color: #2c547c;
}
.rounded-card {
  border-radius: 24px;
}
.heading3 {
  text-align: start !important;
  font-size: 1.5em;
  color: #2c547c;
  font-weight: bold;
}
.mobile2 {
  text-align: start !important;
  font-size: 0.8rem;
  color: #2c547c;
  font-weight: bold;
}
.large2 {
  text-align: start !important;
  font-size: 1.5em;
  color: #2c547c;
  font-weight: bold;
}
.mobilemargin{
  margin-bottom: 50px;
}
.largemargin{
  margin-bottom: 0;
}
</style>
