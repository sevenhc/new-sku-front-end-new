<template>
  <v-container fluid class="mt-12">
    <v-card class="mt-md-12">
      <!-- <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title
          :class="{
            mobileCardText: $vuetify.breakpoint.smAndDown,
            largeCardText: $vuetify.breakpoint.mdAndUp,
          }"
          >{{ subCategoryName }}</v-card-title
        >
      </v-img> -->
      <div class="header_pro" :style="cssVars">
        <v-layout row wrap align-center justify-space-between pa-6>
          <v-flex md6>
            <v-card-title
              style="color:white"
              :class="{
                mobileCardText: $vuetify.breakpoint.smAndDown,
                largeCardText: $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ subCategoryName }}</v-card-title
            >
          </v-flex>
          <v-flex md2 mt-5>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  solo
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" type="month" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date), newDate(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>
      </div>
      <v-layout>
        <v-flex md12>
          <v-container fluid>
            <v-row dense>
              <v-col
                class="pa-4"
                v-for="product in products"
                :key="product.id"
                cols="12"
                md="3"
                sm="11"
                xs="11"
              >
                <v-hover v-slot="{ hover }">
                  <v-card flat>
                    <v-img
                      :src="'http://134.209.188.201:81/' + product.Thumbnail"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="250px"
                      @click="singleItem(product.ProductID)"
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          <p style="font-size:22px">Click for more info</p>
                        </div>
                      </v-expand-transition>
                    </v-img>
                    <v-card-title class="cardTitle">
                      {{ product.ProductName }}
                    </v-card-title>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    products: "",
    Color: "",
    subCategoryName: "",
  }),
  methods: {
    singleItem(ProductID) {
      return (
        ProductID,
        console.log("id", ProductID),
        this.$router.push({ path: "/SingleProduct/" + ProductID })
      ); //?category=baverage
    },
    newDate(date) {
      console.log("🙌", date, this.newId);
      const newItem = {
        SubCategoryID: this.newId,
        YearMonth: date,
      };
      console.log("itemToPost", newItem);
      axios
        .post("/product/getProductByMonth", newItem)
        .then(
          (response) => (this.libraryNameId = response.data),
          console.log("Posted", newItem)
          // this.singleItem(LibraryNameID)
        )
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
  },
  computed: {
    cssVars() {
      return {
        /* variables you want to pass to css */
        "--color": this.Color,
      };
    },
  },
  mounted() {
    this.newId = this.$route.params.id;
    console.log(this.newId);
    const newItem = {
      SubCategoryID: this.newId,
      YearMonth: this.date,
    };
    console.log("getbydate", newItem);
    axios
      .post("/product/getProductByMonth", newItem)
      .then(
        (response) => (this.libraryNameId = response.data),
        console.log("Posted", newItem)
        // this.singleItem(LibraryNameID)
      )
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    // axios
    //   .get("product/getAll/" + this.$route.params.id)
    //   .then((response) => {
    //     this.products = response.data;
    //     console.log(response);

    //     // this.response=console.log.data
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios
      .get("subCategory/GetSubCategoryByID/" + this.$route.params.id)
      .then((response) => {
        this.subCategoryName = response.data[0].SubCategoryName;
        this.Color = response.data[0].Color;
        console.log("subCategory-Name", this.subCategoryName);
        console.log("😀", this.Color);
        (this.CategoryID = this.$route.params.id),
          console.log("wow", this.CategoryID);
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.mobileCardText {
  text-align: left;
  padding: 7%;
  font-weight: bold;
  font-size: 1.5rem;
}
.header_pro {
  background-color: var(--color);
}
.largeCardText {
  padding: 4%;
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
}
.cardTitle {
  color: #2c547c;
}
</style>
