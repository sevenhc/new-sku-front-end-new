    <template>
  <v-footer dark padless>
    <v-flex>
      <v-card class="flex" color="#" flat tile>
        <v-card-title>
          <strong class="display-1
          ">newSku</strong>

          <v-spacer></v-spacer>
          <v-btn
            text="asd"
            v-for="user in users"
            :key="user"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">{{ user }}</v-icon
            >
          </v-btn>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          <div>{{ new Date().getFullYear() }} — <strong>Seven|HC</strong></div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-footer>
</template>

    <script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-linkedin"],
    users: ["mdi-login", "mdi-account-plus"],
    usersT: ["mdi-login", "mdi-account-plus"],
  }),
};
</script>