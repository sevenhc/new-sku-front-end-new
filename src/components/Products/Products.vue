<template>
  <v-container fluid class="">
    <v-card class="">
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
          <v-flex md6 xs12>
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
          <v-flex md2 xs12 mt-5>
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
              <v-date-picker v-model="date" type="month" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date), newDatePro(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>
      </div>
      <v-layout row wrap justify-center>
        <v-flex md12>
          <p class="text-center pt-4" style="font-size: 20px;color:#2c547c">
            {{ computedDateFormattedMomentjs }}
          </p>
        </v-flex>
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
                      :src="'https://api.newsku.co.uk/' + product.Thumbnail"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="250px"
                      @click="singleItem(product.ProductID)"
                    >
                      <v-fade-transition>
                        <v-overlay
                          v-if="hover"
                          absolute
                          color="#000000"
                          style="cursor:pointer;"
                        >
                          <p style="font-size:22px; cursor: pointer;">View</p>
                        </v-overlay>
                        <!-- <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                        >
                          <p style="font-size:22px">View</p>
                        </div> -->
                      </v-fade-transition>
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
import moment from "moment";
import { format } from "date-fns";

export default {
  props: ["aasd"],
  data: () => ({
    menu: false,
    products: "",
    Color: "",
    newId: "",
    newDate: "",
    date: "",
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
    newDatePro(date) {
      console.log("🙌", date, this.newId);
      const newItem = {
        SubCategoryID: this.newId,
        YearMonth: date,
      };
      console.log("itemToPost", newItem);
      axios
        .post("/product/getProductByMonth", newItem)
        .then(
          (response) => {
            console.log(response);
            this.products = response.data;
          }

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
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format(" MMMM yyyy") : "";
    },
    computedDateFormattedDatefns() {
      return this.date ? format(this.date, "EEEE, MMMM do yyyy") : "";
    },
  },
  created() {
    console.log("creatde 😀", this.$route.params.id);
    // console.log("creatde 😀", this.$route.params.data);
    // this.date = this.$route.params.data;
    // console.log("creatde 😀", this.$route.params.data);
    (this.newData = this.$route.params.id),
      console.log("New Data 🆕", this.newData),
      (this.fields = this.newData.split("~")),
      (this.newId = this.fields[0]),
      (this.newDate = this.fields[1]),
      (this.date = this.newDate);
    console.log("split id 🖐️", this.newId, "Split Date 🖐️", this.newDate);
  },
  mounted() {
    // this.newId = this.$route.params.ID;

    console.log(this.newId);
    const newItem = {
      SubCategoryID: this.newId,
      YearMonth: this.newDate,
    };
    console.log("getbydate", newItem);
    axios
      .post("/product/getProductByMonth", newItem)
      .then((response) => {
        console.log(response);
        this.products = response.data;
      })
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
      .get("subCategory/GetSubCategoryByID/" + this.newId)
      .then((response) => {
        this.subCategoryName = response.data[0].SubCategoryName;
        this.Color = response.data[0].Color;
        console.log("subCategory-Name", this.subCategoryName);
        console.log("😀", this.Color);
        (this.CategoryID = this.$route.params.ID),
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
