<template>
  <v-container fluid class="mt-12 mb-12">
    <div id="printMe">
      <v-card color="#f3f3f3">
        <v-layout row>
          <v-flex md7 xs12 align-self-center>
            <!-- <div class="pa-5">
              <v-img
                :src="'http://134.209.188.201:81/' + product.Thumbnail"
                aspect-ratio="1.7"
              >
                <div align="end" class=" align-self-baseline">
                  <v-icon
                    color="success"
                    @click="
                      downloadWithAxios(product.Thumbnail, product.ProductName)
                    "
                    >mdi-download</v-icon
                  >
                </div>
              </v-img>
            </div> -->

            <v-layout>
              <v-flex md12>
                <v-container fluid>
                  <!-- <v-row dense>
                    <v-col
                      class="pa-md-5"
                      v-for="image in newImages"
                      :key="image.index"
                      cols="12"
                      md="4"
                      sm="5"
                      xs="5"
                    >
                      <v-card>
                        <v-img
                          :src="'http://134.209.188.201:81/' + image"
                          aspect-ratio="1.7"
                          class="white--text align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        >
                          <div align="end" class=" align-self-baseline">
                            <v-icon
                              color="success"
                              @click="
                                downloadWithAxios(image, product.ProductName)
                              "
                              >mdi-download</v-icon
                            >
                          </div>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row> -->
                  <lingallery
                    :iid.sync="currentId"
                    :width="width"
                    :height="height"
                    :items="items"
                  />
                </v-container>
              </v-flex>
            </v-layout>
            <div color="transparent" class="d-flex justify-center">
              <libraryModel
                :product_id="product.ProductID"
                :mainImage="product.Thumbnail"
                :productName="product.ProductName"
              ></libraryModel>
            </div>
          </v-flex>

          <v-flex md5 xs12 class="pa-md-12 pa-6">
            <div class="heading3 mb-4">
              {{ product.ProductName }}
              <v-progress-linear
                color="#2c547c"
                rounded
                height="2"
                value="100"
              ></v-progress-linear>
            </div>
            <div class="heading3 mb-4">
              {{ product.CategoryName }} - {{ product.SubCategoryName }}
            </div>
            <div class="heading2 mb-4">
              <span class="heading">Ingredients:</span>
              {{ product.Ingredients }}
            </div>
            <span class="heading">Nutritional table:</span>
            <v-img
              aspect-ratio="2.5"
              :src="'http://134.209.188.201:81/' + product.NutritionalTable"
            >
              <div align="end" class="align-self-baseline">
                <v-icon
                  color="success"
                  @click="
                    downloadWithAxios(
                      product.NutritionalTable,
                      product.ProductName
                    )
                  "
                  >mdi-download</v-icon
                >
              </div>
            </v-img>
            <div class="pt-4">
              <v-btn
                @click="print()"
                min-width="50%"
                rounded
                color="#c7ced5"
                class="heading2"
              >
                Download Page
              </v-btn>
            </div>
            <div class="pt-4">
              <v-btn min-width="50%" rounded color="#2c547c" dark>
                Download Image
              </v-btn>
            </div>
            <!-- <div class="pt-4">
              <v-btn text color="#2c547c" to="/products">
                <v-icon left> mdi-arrow-left</v-icon>
                back
              </v-btn>
            </div> -->
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </v-container>
</template>

<style scoped>
.card {
  color: rgba(141, 171, 228, 0.411);
  border: 1px solid red;
}
.heading {
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #2c547c;
}
.addLibrary {
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  color: #2c547c;
}
.heading2 {
  text-align: start;
  font-size: 1rem;
  color: #2c547c;
}
.heading3 {
  text-align: start;
  font-size: 1.5em;
  color: #2c547c;
  font-weight: bold;
}
.categoryTitle {
  text-align: center;
}
</style>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import LibraryModel from "../SingleProduct/libraryModel";
import Lingallery from "lingallery";
export default {
  components: { LibraryModel, Lingallery },
  data() {
    return {
      product: "",
      dialog: false,
      newImages: "",
      width: "100%",
      height: "400px",
      items: [
        {
          src: "http://134.209.188.201:81/defaultnewskuimg.png",
          thumbnail: "http://134.209.188.201:81/defaultnewskuimg.png",
        },
        // ,
        // {
        //   src: "https://picsum.photos/600/400/?image=10",
        //   thumbnail: "https://picsum.photos/64/64/?image=10",
        // },
      ],
    };
  },
  computed() {
    this.new = this.products;
    console.log("asasas", this.products);
  },

  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
    },
    download() {
      const doc = new jsPDF();
      const contentHtml = this.$refs.content.innerHTML;
      doc.save(contentHtml, 10, 10, {
        width: 170,
      });
      doc.save("sample.pdf");
    },

    downloadWithCSS() {
      const doc = new jsPDF();
      /** WITH CSS */
      var canvasElement = document.createElement("canvas");
      html2canvas(this.$refs.content, { canvas: canvasElement }).then(function (
        canvas
      ) {
        const img = canvas.toDataURL("image/jpeg", 0.8);
        doc.addImage(img, "JPEG", 20, 20);
        doc.save("sample.pdf");
      });
    },
    forceFileDownload(response, ProductName) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", ProductName + ".png"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },

    downloadWithAxios(Thumbnail, ProductName) {
      var url = "http://134.209.188.201:81/" + Thumbnail;
      console.log(url, ProductName);
      axios({
        method: "get",
        url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response, ProductName);
        })
        .catch(() => console.log("error occured"));
    },
  },
  mounted() {
    console.log(this.new);
    axios
      .get("product/getById/" + this.$route.params.id)
      .then((response) => {
        this.product = response.data[0];
        this.images = response.data[0].Images;
        this.newImages = JSON.parse(this.images);
        this.newImages.unshift(this.product.Thumbnail);
        // this.newImages = JSON.parse(this.images);
        console.log("product", response.data);
        console.log("Images", this.newImages);
        var imgitems = [];
        for (var i = 0, j = this.newImages.length; i < j; i++) {
          imgitems.push({
            src: "http://134.209.188.201:81/" + this.newImages[i],
            thumbnail: "http://134.209.188.201:81/" + this.newImages[i],
          });
        }
        this.items = imgitems;
        // this.response=console.log.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
