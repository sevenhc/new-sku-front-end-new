<template>
  <v-container>
    <v-card flat>
      <v-layout >
        <v-flex md4 xs12>
          <v-card flat color="grey lighten-2">
            <p class="title text-center">Log In</p>
          </v-card>
          <v-flex md12 xs11>
            <v-form ref="form">
              <v-card-title>Email </v-card-title>
              <div class="new">
                <v-text-field
                  v-model="username"
                  solo
                  :rules="[rules.required]"
                  label="Enter your Email"
                  clearable
                  
                  :append-icon="'mdi-badge-account'"
                ></v-text-field>
              </div>
              <v-card-title>PASSWORD</v-card-title>
              <div class="new">
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  :rules="[rules.required, rules.min]"
                  solo
                  label="Enter your password"
                  clearable
                  
                  @click:append="show1 = !show1"
                ></v-text-field>
                <div class="text-end mb-3">
                  <v-btn text medium color="#2c547c" @click="forgotMail()"
                    >Forgot Password?</v-btn
                  >
                </div>
              </div>
            </v-form>
            <v-btn
              
              
              large
              color="#2c547c"
              dark
              @click="login"
              >Sign In</v-btn
            >
            <v-alert
              color="red"
              v-model="alert"
              
              elevation="24"
              dismissible
              
              text
              type="error"
              >Username or Password invalied.!</v-alert
            >
            <!-- <v-btn
              class="ml-4 mt-6"
              width="97%"
              large
              color="#2c547c"
              dark
              @click="logout"
              >log out</v-btn
            > -->
            <!-- <v-btn text class medium color="orange" to="/LoginSignup"
              >Lost your password?</v-btn
            > -->
          </v-flex>
        </v-flex>
        
      </v-layout>
    </v-card>




    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="40%">
        <v-card>
          <v-card-text>
            <v-card-title class="heading">
              Please Enter Your e-mail Address
            </v-card-title>
            <div class="pa-lg-6">
              <v-text-field
                v-model="email"
                append-icon="mdi-email-outline"
                solo
                class="px-md-12"
                label="Enter your e-mail"
                clearable
              ></v-text-field>
            </div>
            <div>
              <v-alert
                color="#2c547c"
                v-model="alert2"
                class="ml-4"
                elevation="24"
                dismissible
                width="97%"
                text
                type="success"
                >Please check your email for password reset
                instructions.!</v-alert
              >
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="#2c547c" text @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="#2c547c" text @click="sendFile()">
              Send Link
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<style>
.heading {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #2c547c;
}
.titles {
  color: aqua;
  text-align: end;
}
.new {
  margin-top: -2%;
}
</style>
<script>
import { mapState, mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      alert: false,
      alert2: false,
      username: "",
      password: "",
      dialog: false,
      email: "",
      show1: false,
      isLogged: false,
      rules: {
        required: (value) => !!value || "*Required.",
        counterMin: (value) =>
          value.length >= 3 || "Minimum length is 3 characters",
        counterMax: (value) =>
          value.length <= 20 || "Minimum length is 20 characters",
        min: (v) => v.length >= 8 || "Min 8 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  computed: {
    ...mapState(["user"]),
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
    count() {
      return this.$store.state.status;
    },
  },
  watch: {
    count() {
      console.log("status-->", this.$store.state.status);
      this.newStatus = this.$store.state.status;
      console.log("newStatus-->", this.newStatus);
      if (this.newStatus == "error") {
        console.log("wrong password");
        this.alert = true;
      }
      if (this.newStatus == "abc") {
        console.log("good");
        this.$router.push("/");
        window.location.reload();
      }
    },
  },
  methods: {
    sendFile() {
      console.log(this.email);

      try {
        axios
          .post("http://134.209.188.201:81/client/forgetPassword/" + this.email)
          .then(() => {
            (this.alert2 = true), setTimeout(() => (this.dialog = false), 3000);
          });
      } catch (error) {
        console.log(error);
      }
    },
    login() {
      if (this.$refs.form.validate()) {
        let Email = this.username;
        let ClientPassword = this.password;
        console.log(Email, ClientPassword);
        this.$store
          .dispatch("login", { Email, ClientPassword })

          .then(() => {
            this.toRoute(this.isLoggedIn);
            // window.location.reload();
            // this.interval = setInterval(() => this.toRoute(), 10);
            // if (this.isLoggedIn) {
            //   this.$router.push("/");
            //   console.log("isLogCheck");
            // }
          })
          .catch((err) => console.log(err));
      }
    },
    forgotMail() {
      this.dialog = true;
    },
    toRoute() {
      // this.$router.push("/");
      console.log("toRoute", this.isLoggedIn);
      if (this.isLoggedIn == true) {
        console.log("legedIn");
        this.$router.push("/");
      }
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/").catch((err) => console.log(err));
      });
    },
  },
};
</script>
