<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-text-field
          v-model="firstname"
          :rules="nameRules"
          :counter="10"
          required
        ></v-text-field>
        <v-btn color="#2c547c" class="mt-5" text>save</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Library Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),
};
</script>
<style>
.heading {
  text-align: center;
  font-weight: bold;

  font-size: 2rem;
  color: #2c547c;
}
</style>
