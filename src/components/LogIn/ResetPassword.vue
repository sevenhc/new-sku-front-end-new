<template>
  <v-container class="card">
    <v-layout row wrap justify-center>
      <v-flex md8 xs12>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card class="pa-12 ma-12">
            <v-layout row wrap justify-center class="pa-2">
              <v-flex md9 xs12>
                <p class="title text-center">Update Password</p>
                <v-form v-model="valid">
                  <v-flex md12 xs11>
                    <v-layout row wrap>
                      <v-flex md6 xs12>
                        <v-card-title class="lables">Password</v-card-title>
                        <div class="new">
                          <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            :rules="passwordRules"
                            solo
                            label="Enter your password"
                            clearable
                            class="ml-4"
                            @click:append="show1 = !show1"
                          ></v-text-field>
                        </div>
                      </v-flex>
                      <v-flex md6>
                        <v-card-title class="lables"
                          >Confirm Password</v-card-title
                        >
                        <div class="new">
                          <v-text-field
                            :rules="[
                              password === confirmPassword ||
                                'Password must match',
                            ]"
                            v-model="confirmPassword"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            solo
                            label="Enter your password"
                            clearable
                            class="ml-4"
                            @click:append="show1 = !show1"
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
                      @click="validate"
                      >Update Password</v-btn
                    >
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
                        >Password Successfully changed.!</v-alert
                      >
                    </div>
                  </v-flex>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    show1: false,
    valid: true,
    alert2: false,
    show2: false,
    currentUrl: "",
    newUrl: "",
    password: "",
    confirmPassword: "",
    passwordRules: [
      (value) => !!value || "Please type password.",
      (value) => (value && value.length >= 6) || "minimum 6 characters",
    ],
    confirmPasswordRules: [
      (value) => !!value || "type confirm password",
      (value) =>
        value === this.password || "The password confirmation does not match.",
    ],
  }),
  computed: {
    passwordConfirmationRule() {
      return () => this.password === this.rePassword || "Password must match";
    },
  },
  created() {
    var currentUrl = window.location.pathname;
    var newUrl = "" + currentUrl;

    console.log("url--->", currentUrl);
    console.log("url newUrl--->", newUrl);
  },
  methods: {
    validate() {
      var currentUrln = window.location.pathname;

      console.log("method-->", currentUrln);
      this.$refs.form.validate();

      try {
        axios
          .put("http://134.209.188.201:81" + currentUrln, {
            ClientPassword: this.password,
          })
          .then((response) => {
            console.log("res🥰", response);
            this.alert2 = true;

            setTimeout(() => this.$router.push("/LoginSignup"), 3000);
            this.success();
          });
        console.log(this.currentUrln);
      } catch (error) {
        console.log(error);
      }
    },
    success() {
      var currentUrln = window.location.pathname;
      axios
        .put("http://134.209.188.201:81/passwordChanged" + currentUrln, {
          ClientPassword: this.password,
        })
        .then((response) => {
          console.log("res🥰", response);
          this.alert2 = true;

          setTimeout(() => this.$router.push("/LoginSignup"), 3000);
          this.success();
        });
      console.log(this.currentUrln);
    },
  },
};
</script>

<style>
.card {
  margin-bottom: 10%;
}
</style>
