<template>
  <v-container grid-list-xs>
    <div class="d-flex justify-center flex-row-reverse">
      <p class="pa-2 mobile">VEGITARIAN</p>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
       <v-select
          :items="items"
          label="Your Library"
          solo
          min-width="10%"
          color="primary"
        ></v-select>
    </div>
  </v-container>
</template>

<script>
export default {
   data: () => ({
      items: ['Vegitarian', 'Cold Meats'],
    }),
};
</script>

<style>
.mobile {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #2c547c;
}
.large {
  padding: 4%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: #2c547c;
}
</style>
ß