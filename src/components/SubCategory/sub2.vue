<template>
  <v-container fluid class="mt-12">
    <DateAndFilter />
    <v-card class="mt-12">
      <!-- <v-img
        class="white--text align-end"
        height="180px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title
          :class="{
            mobileCardText: $vuetify.breakpoint.smAndDown,
            largeCardText: $vuetify.breakpoint.mdAndUp,
          }"
        >
          {{ CategoryName }}</v-card-title
        >
      </v-img> -->
      <div class="header_sub" :style="cssVars">
        <v-layout row wrap align-center justify-space-between pa-6>
          <v-flex md6>
            <v-card-title
              style="color:white"
              :class="{
                mobileCardText: $vuetify.breakpoint.smAndDown,
                largeCardText: $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ CategoryName }}</v-card-title
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
                      :src="
                        'http://134.209.188.201:81/' + product.ThumbnailImage
                      "
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="250px"
                      @click="singleItem(product.SubCategoryID)"
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
                      {{ product.SubCategoryName }}
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
import DateAndFilter from "./DateAndFilter";
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    components: { DateAndFilter },
    products: "",
    Color: "",
    CategoryName: "",
    // new: this.$route.params.id,
  }),
  computed: {
    cssVars() {
      return {
        /* variables you want to pass to css */
        "--color": this.Color,
      };
    },
  },
  methods: {
    singleItem(sub_category) {
      return (
        sub_category,
        console.log(sub_category),
        this.$router.push({ path: "/products/" + sub_category })
      ); //?category=baverage
    },
    newDate(date) {
      console.log("🙌", date, this.newId);
      const newItem = {
        CategoryID: this.newId,
        YearMonth: date,
      };
      console.log("itemToPost", newItem);
      axios
        .post("/subCategory/GetSubCategoriesByMonth", newItem)
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
  mounted() {
    this.newId = this.$route.params.id;
    console.log(this.newId);
    const newItem = {
      CategoryID: this.newId,
      YearMonth: this.date,
    };
    console.log("getbydate", newItem);
    axios
      .post("/subCategory/GetSubCategoriesByMonth", newItem)
      .then((response) => {
        console.log("Posted", newItem);
        console.log("res", response);
        this.products = response.data;
      })
      // this.singleItem(LibraryNameID)

      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    // axios
    //   .get(
    //     "http://134.209.188.201:81/subCategory/getAll/" + this.$route.params.id
    //   )
    //   .then((response) => {
    // this.products = response.data;
    //     console.log("sub", response.data);
    //     // this.response=console.log.data
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios
      .get("http://134.209.188.201:81/category/GetCategoryByID/" + this.newId)
      .then((response) => {
        this.CategoryName = response.data[0].CategoryName;
        this.Color = response.data[0].Color;
        console.log("subCategory-Name", this.CategoryName);
        console.log("😀", this.Color);
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
.header_sub {
  background-color: var(--color);
}
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
</style>
