<template>
  <v-container pa-12>
    <v-card color="#f1f1f1" class="pa-md-12 pa-5">
      <v-layout row wrap justify-center>
        <v-flex md12 xs12>
          <p class="text-center" style="font-size: 40px;color:#2c547c">
            Contact Us
          </p>
          <p class="text-center" style="color:#2c547c">
            Please fill in the form below , email or call us if you want to get
            in touch.
          </p>
        </v-flex>
        <v-flex md8>
          <v-form ref="form">
            <v-flex md12 xs12>
              <v-text-field
                :rules="[rules.required]"
                solo
                v-model="name"
                label="Name"
                id="id"
              ></v-text-field>
            </v-flex>
            <v-flex md12 xs12>
              <v-text-field
                solo
                :rules="[rules.email]"
                v-model="email"
                label="Email"
                id="id"
              ></v-text-field>
            </v-flex>

            <v-flex md12 xs12>
              <v-textarea
                :rules="[rules.required]"
                solo
                v-model="message"
                label="Message"
                id="id"
              ></v-textarea>
            </v-flex>
            <v-flex md12 xs12>
              <div class="text-center">
                <v-btn dark width="50%" color="#2c547c" @click="contact()"
                  >Submit</v-btn
                >
              </div>
            </v-flex>
          </v-form>
        </v-flex>
        <v-flex md8 xs12>
          <p class="text-center pt-4" style="color:#2c547c">
            Email:
            <a href="info@newsku.co.uk" target="_blank">info@newsku.co.uk</a
            ><br />
            Landline: <a href="01709581433" target="_blank">01709581433</a
            ><br />
            Mobile: <a href="07415285460" target="_blank">07415285460</a><br />
          </p>
        </v-flex>
      </v-layout>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card justify="center" class="pa-12">
          <p class="text-center">
            Successfully Submited
          </p>

          <!-- <v-card-actions class="text-center"> -->
          <div class="text-center">
            <v-btn color="green darken-1" text @click="dialog = false">
              <v-icon size="50" color="#2c547c">mdi-check-all</v-icon>
            </v-btn>
          </div>
          <!-- </v-card-actions> -->
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: "",
    email: "",
    message: "",
    dialog: false,
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
  }),
  methods: {
    contact() {
      if (this.$refs.form.validate()) {
        axios
          .post("/contact", {
            name: this.name,
            email: this.email,
            message: this.message,
          })
          .then((response) => {
            const data = response.data;
            console.log(data);
            this.dialog = true;
            this.name = "";
            this.email = "";
            this.message = "";
          })
          .catch((error) => {
            this.name = "";
            this.email = "";
            this.message = "";
            console.log("err-->", error);
          });
      }
    },
  },
};
</script>

<style></style>
