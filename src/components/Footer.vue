<template>
  <v-footer dark padless>
    <v-flex>
      <v-card class="flex" color="#" flat tile>
        <v-card-title>
          <strong class="display-1">NewSku</strong>
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

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-btn icon @click="icon.link" target="_blank"
              ><v-icon size="24px">{{ icon.iconimg }}</v-icon></v-btn
            >
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
            <v-btn text color="white" small to="/Cookies">Cookies</v-btn>
            <v-btn text color="white" small to="/TermsOfUse">TermsOfUse</v-btn>
            <v-btn text color="white" small to="/PrivacyPolicy"
              >PrivacyPolicy</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { iconimg: "mdi-facebook", link: "" },
      { iconimg: "mdi-linkedin", link: "" },
    ],
  }),
};
</script>
<style scoped>
.a {
  color: #fff;
}
</style>
