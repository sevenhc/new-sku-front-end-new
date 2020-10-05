<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md12>
        <v-flex>
          <p class="heading">Key word search</p>
        </v-flex>
        <v-flex md4 align-self-center mt-md-10>
          <v-text-field
            width="1000px"
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
                  <v-btn rounded large color="#2c547c" dark>search</v-btn>
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
