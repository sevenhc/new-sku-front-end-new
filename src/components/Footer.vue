<template>
  <v-footer padless color="#2c547c">
    <v-flex>
      <v-card class="flex" flat tile color="#2c547c">
        <v-card-title>
          <!-- <strong class="display-1">NewSku</strong> -->
          <img
            :src="require('../assets/newskuwhite.png')"
            height="40"
            class="mr-3"
          />
          <!-- <div class="pa-3 ml-12">
            <v-col>
             <v-row>
                <v-btn text>login</v-btn>
              </v-row> 
               <v-row>
                <v-btn text>signup</v-btn>
              </v-row> 
            </v-col>
          </div>-->
          <v-spacer></v-spacer>
          <v-btn text color="white" small to="/PrivacyPolicy"
            >Privacy Policy</v-btn
          >
          <v-btn text color="white" small to="/TermsOfUse">Terms of Use</v-btn>
          <!-- <v-btn text color="white" small to="/TermsAndConditions">Terms &amp; Conditions</v-btn> -->
          <v-btn text color="white" small to="/Cookies">Cookie Policy</v-btn>

          <v-spacer></v-spacer>
          <v-btn
            text="asd"
            v-for="user in users"
            :key="user"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">{{ user }}</v-icon>
          </v-btn>

          <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-1" dark icon>
            <v-btn icon @click="icon.link" target="_blank"
              ><v-icon size="24px">{{ icon.iconimg }}</v-icon></v-btn
            >
          </v-btn> -->

          <!-- <v-btn 
            v-for="icon in icons" 
            :key="icon" 
            class="mx-1" 
            dark 
            icon
            @click="icon.link"
            target="_blank"
            border="1px solid #fff">
            <img :src="icon.iconimg" />
          </v-btn> -->
          <v-btn
            class="mx-1 pa-0"
            dark
            href="https://www.facebook.com/NewSkufoodanddrink/"
            target="_blank"
            outlined
            min-width="36px"
            style="boder-radius:0;"
          >
            <svg
              viewBox="-20 0 600 500"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              fill="white"
              width="25px"
              height="25px"
            >
              <path
                d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z"
              />
            </svg>
          </v-btn>

          <v-btn
            class="mx-1 pa-0"
            dark
            href="https://www.linkedin.com/company/new-sku"
            target="_blank"
            outlined
            min-width="36px"
            style="boder-radius:0;"
          >
            <svg
              viewBox="-5 -5 35 35"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              fill="white"
              width="25px"
              height="25px"
            >
              <path
                d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
              />
              <path d="m.396 7.977h4.976v16.023h-4.976z" />
              <path
                d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
              />
            </svg>
          </v-btn>
        </v-card-title>

        <!-- <v-card-text class="py-2 white--text text-center">
          <div>
            <v-layout row wrap>
              <v-flex md2> </v-flex>
            </v-layout>
            <v-btn text color="white" small to="/Cookies">Cookies</v-btn>
            <v-btn text color="white" small to="/TermsOfUse">TermsOfUse</v-btn>
            <v-btn text color="white" small to="/PrivacyPolicy"
              >PrivacyPolicy</v-btn
            >
          </div>
        </v-card-text> -->
        <v-card-text class="py-2 white--text text-center">
          <div>
            {{ new Date().getFullYear() }} - Developed by
            <a href="https://www.sevenhc.net/" class="a" target="_blank"
              >SEVEN|HC</a
            >
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <cookie-law theme="blood-orange">
      <div slot="message">
        This website uses cookies to ensure you get the best experience on our
        website. for more info
        <router-link to="/Cookies">Click here</router-link>
      </div>
    </cookie-law>
  </v-footer>
</template>

<script>
import CookieLaw from "vue-cookie-law";
export default {
  components: { CookieLaw },
  data: () => ({
    icons: [
      { iconimg: "../assets/linkedin.svg", link: "" },
      { iconimg: "../assets/facebook.svg", link: "" },
    ],
  }),
};
</script>
<style scoped>
.a {
  color: #fff;
}
</style>
