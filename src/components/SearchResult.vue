<template>
  <v-container fluid pa-5>
    <v-card >
      <v-layout row>
        <v-flex xs12 md12 v-if="seachProducts">
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
                  Results</v-card-title
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
                  <v-date-picker v-model="date" type="month" scrollable>
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
        </v-flex>
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
                v-for="product in seachProducts"
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
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      seachProducts: "",
      keyword: "",
    };
  },
  mounted() {
    this.keyword = this.$route.params.id;
    console.log("😺", this.keyword, this.date);
    const newItem = {
      Keyword: this.keyword,
      YearMonth: this.date,
    };
    console.log("itemToPost", newItem);
    axios
      .post("/product/GetProductsByMonthAndKeyword", newItem)
      .then((response) => {
        console.log("res 🌘", response);

        this.seachProducts = response.data;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });

    // axios
    //   .get("product/getProductByKeyWord/" + this.$route.params.id)
    //   .then((response) => {
    //     this.seachProducts = response.data;
    //     console.log("seachProducts ", this.seachProducts);
    //     // this.response=console.log.data
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
  methods: {
    newDate(date) {
      this.keyword = this.$route.params.id;
      console.log("🙌", date, this.$route.params.id);
      const newItem = {
        Keyword: this.keyword,
        YearMonth: date,
      };
      console.log("itemToPost", newItem);
      axios
        .post("/product/GetProductsByMonthAndKeyword", newItem)
        .then(
          (response) => {
            console.log(response);
            this.seachProducts = response.data;
          }
          // this.singleItem(LibraryNameID)
        )
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    singleItem(ProductID) {
      return (
        ProductID,
        console.log("id", ProductID),
        this.$router.push({ path: "/SingleProduct/" + ProductID })
      ); //?category=baverage
    },
  },
};
</script>

<style>
.header_pro {
  background-color: #2c547c;
}
</style>
