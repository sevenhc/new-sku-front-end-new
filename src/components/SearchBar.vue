<template>
  <v-container>
    <v-layout row wrap class=" justify-space-around">
      <v-flex md6>
        <v-flex>
          <p class="heading mt-12">Key word search</p>
        </v-flex>
        <v-flex md12 class=" ustify-space-around" mt-md-10>
          <v-text-field
            solo
            clearable
            rounded
            label="Search here..."
            type="text"
          >
            <template v-slot:prepend></template>
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <div class="ml-12">
                  <v-btn rounded large color="#2c547c" dark
                    >search<v-icon>mdi-magnify</v-icon></v-btn
                  >
                </div>
              </v-fade-transition>
            </template>
          </v-text-field>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.heading {
  text-align: start;
  font-weight: bold;

  font-size: 2rem;
  color: #2c547c;
}
</style>
