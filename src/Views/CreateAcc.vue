<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex md8 xs12>
        <v-form ref="form">
          <v-card>
            <v-layout row wrap justify-center class="pa-2">
              <v-flex md9 xs12>
                <p class="title text-center">Create an Account</p>
                <v-form>
                  <v-flex md12 xs11>
                    <v-layout row wrap>
                      <v-flex md6>
                        <v-card-title class="lables">clientName</v-card-title>
                        <div class="new">
                          <v-text-field
                            v-model="User.username"
                            solo
                            label="Enter your username "
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
                        <v-card-title class="lables">Company</v-card-title>
                        <div class="new">
                          <v-text-field
                            v-model="User.company"
                            solo
                            label=" Company"
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
                        <v-card-title class="lables">Email</v-card-title>
                        <div class="new">
                          <v-text-field
                            v-model="User.email"
                            solo
                            label="Enter your e-mail"
                            clearable
                            class="ml-4"
                            :rules="[rules.required, rules.email]"
                          ></v-text-field>
                        </div>
                      </v-flex>

                      <v-flex md6>
                        <v-card-title class="lables">Mobile</v-card-title>
                        <div class="new">
                          <v-text-field
                            v-model="User.mobile"
                            solo
                            label="Mobile"
                            clearable
                            class="ml-4"
                          ></v-text-field>
                        </div>
                      </v-flex>

                      <v-flex md6>
                        <v-card-title class="lables">Password</v-card-title>
                        <div class="new">
                          <v-text-field
                            v-model="User.password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
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
                          >Client Password</v-card-title
                        >
                        <div class="new">
                          <v-text-field
                            v-model="User.confirmPassword"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show2 ? 'text' : 'password'"
                            solo
                            label="Re-enter your password"
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
                    <v-btn text class="mt-2" medium color="#2c547c" to="/"
                      >or return to Store</v-btn
                    >
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
      },
    };
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
        console.log(data);
        this.$store
          .dispatch("register", data)
          .then(() => this.$router.push("/"))
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>
