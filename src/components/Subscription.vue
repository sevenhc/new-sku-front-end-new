<template>
  <v-container class="mt-12 mb-12">
    <v-layout>
      <v-flex xs12>
        <div class="heading">The Benefits of Subscribing</div>
        <div class="heading2 pa-3">
          • New launch updates • In-store photography • Product information
          (Ingredients, nutritionals, price, weight) • Save time • Categorised
          search function.
        </div>
      </v-flex>
    </v-layout>
    <v-container fluid class="pt-10">
      <v-card color="#e1e6e8" class="pa-5">
        <v-layout row>
          <v-flex md4 xs12 class="pa-md-1 align-center" align-self="center">
            <div class="pa-9">
              <v-img
                src="https://picsum.photos/510/300?random"
                height="20%"
              ></v-img>
              <div class="heading2 pa-3">
                We launch soon with this year’s Winter products. Register your
                interest below to qualify for your free 7 day trial.
              </div>
            </div>
          </v-flex>
          <v-flex md8 xs12 class="pa-md-1 pa-6">
            <v-form ref="form">
              <v-layout row wrap justify-center class="pa-2">
                <v-flex md9 xs12>
                  <p class="heading text-center">
                    Sign up for a 7 day free trial
                  </p>
                  <v-form ref="form">
                    <v-flex md12 xs11>
                      <v-layout row wrap>
                        <v-flex md6>
                          <!-- <v-card-title class="lables">Name</v-card-title> -->
                          <div class="new">
                            <v-text-field
                              v-model="User.username"
                              solo
                              label="Name *"
                              clearable
                              class="ml-4"
                              :rules="[
                                rules.required,
                                rules.counterMax,
                                rules.counterMin,
                              ]"
                            ></v-text-field>
                          </div>
                        </v-flex>
                        <v-flex md6>
                          <!-- <v-card-title class="lables">Company</v-card-title> -->
                          <div class="new">
                            <v-text-field
                              v-model="User.company"
                              solo
                              label="Company *"
                              clearable
                              class="ml-4"
                              :rules="[
                                rules.required,
                                rules.counterMax,
                                rules.counterMin,
                              ]"
                            ></v-text-field>
                          </div>
                        </v-flex>
                        <v-flex md6>
                          <!-- <v-card-title class="lables">Email</v-card-title> -->
                          <div class="new">
                            <v-text-field
                              v-model="User.email"
                              solo
                              label="Email *"
                              clearable
                              class="ml-4"
                              :rules="[rules.required, rules.email]"
                            ></v-text-field>
                          </div>
                        </v-flex>

                        <v-flex md6>
                          <!-- <v-card-title class="lables">Telephone</v-card-title> -->
                          <div class="new">
                            <v-text-field
                              v-model="User.mobile"
                              solo
                              label="Telephone *"
                              clearable
                              class="ml-4"
                            ></v-text-field>
                          </div>
                        </v-flex>

                        <v-flex md6>
                          <!-- <v-card-title class="lables">Password</v-card-title> -->
                          <div class="new">
                            <v-text-field
                              v-model="User.password"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :rules="[rules.required, rules.min]"
                              :type="show1 ? 'text' : 'password'"
                              solo
                              label="Password *"
                              clearable
                              class="ml-4"
                              @click:append="show1 = !show1"
                            ></v-text-field>
                          </div>
                        </v-flex>
                        <v-flex md6>
                          <!-- <v-card-title class="lables">Confirm Password</v-card-title>-->
                          <div class="new">
                            <v-text-field
                              v-model="User.confirmPassword"
                              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                              :rules="[rules.required, rules.min]"
                              :type="show2 ? 'text' : 'password'"
                              solo
                              label="Confirm password *"
                              clearable
                              class="ml-4"
                              @click:append="show2 = !show2"
                            ></v-text-field>
                          </div>
                        </v-flex>
                      </v-layout>

                      <v-btn
                        class="ml-4"
                        width="97%"
                        large
                        color="#2c547c"
                        dark
                        @click="register"
                        >Sign Up</v-btn
                      >
                    </v-flex>
                  </v-form>
                </v-flex>
              </v-layout>
            </v-form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
.card {
  color: rgba(135, 173, 243, 0.411);
  border: 1px solid red;
}
.signUpBody {
  border: 1px solid #fff;
  min-height: 100px;
}
.heading {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #2c547c;
}
.heading2 {
  text-align: center;
  font-size: 1rem;
  color: #2c547c;
}
.heading3 {
  text-align: center;
  font-size: 1.5em;
  color: #2c547c;
  font-weight: bold;
}
.categoryTitle {
  text-align: center;
}
</style>
<script>
import { mapState, mapGetters } from "vuex";
// import axios from "axios";

export default {
  data() {
    return {
      User: {
        mobile: "",
        company: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      isLogged: false,
      show1: false,
      show2: false,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
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
        password: (value) => {
          const passPattern = this.User.password == this.User.confirmPassword;
          return passPattern.test(value) || "Invalid password.";
        },
      }, //,
      //slidesHeading: "welcome to NewSku.",
      //slideText:"Consequat irure proident reprehenderit mollit elit magna nostrud labore aute deserunt. Esse id voluptate occaecat nisi velit nulla anim in eu ad sit. ",
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
  methods: {
    register: function() {
      if (this.$refs.form.validate()) {
        let data = {
          Email: this.User.email,
          ClientName: this.User.username,
          ClientPassword: this.User.password,
          IsTrial: true,
          Mobile: this.User.mobile,
          Company: this.User.company,
        };
        console.log("asdasd", data);
        this.$store
          .dispatch("register", data)
          .then(() => this.toRoute(this.isLoggedIn))
          .catch((err) => console.log(err));
      }
    },
    toRoute() {
      // this.$router.push("/");
      console.log("toRoute", this.isLoggedIn);

      console.log("legedIn");
      this.$router.push("/");
    },
  },
};
</script>
