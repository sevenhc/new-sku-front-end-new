<template>
  <div>
    <v-btn text color="#2c547c" @click="dialog = true">
      SAVE TO LIBRARY
      <v-icon color="pink" right> mdi-heart</v-icon>
    </v-btn>
    <div class="text-center">
      <v-dialog v-model="dialog">
        <v-card  class="rounded-card">
          <v-layout row wrap class="pa-12 justify-space-between">
            <v-flex md7>
              <div class="pa-5">
                <v-img src="https://picsum.photos/510/300?random"></v-img>
              </div>
            </v-flex>
            <v-flex md5>
              <p class="heading">Create a new library or search</p>
              <Search />
              <v-divider></v-divider>
              <ModelList />
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import ModelList from "../SingleProduct/modelList";
import Search from "../SingleProduct/searchLibrary";
export default {
  components: { ModelList, Search },
  data: () => ({
    dialog: false,
  }),
};
</script>
<style>
.heading {
  text-align: center;
  font-weight: bold;
  color: #2c547c;
}
.rounded-card {
      border-radius: 24px;
  }
</style>
