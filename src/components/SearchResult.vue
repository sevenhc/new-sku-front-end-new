<template>
  <v-container pt-12>
    <v-card mt-12 flat>
      <v-layout row justify-center>
        <v-flex xs12 md10 v-if="seachProducts">
          <div class="heading pt-9">Results</div>
          <div class="heading pt-9">
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
          </div>
        </v-flex>

        <v-flex
          md3
          xs12
          v-for="product in seachProducts"
          :key="product.ProductID"
        >
          <div class="pa-9">
            <v-img
              aspect-ratio="1.1"
              :src="'http://134.209.188.201:81/' + product.Thumbnail"
              :lazy-src="'http://134.209.188.201:81/' + product.Thumbnail"
              @click="singleItem(product.ProductID)"
            ></v-img>
            <div class="heading2 pa-3">
              {{ product.ProductName }}
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
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
        console.log(response);
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

<style></style>
