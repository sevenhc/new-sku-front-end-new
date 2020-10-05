<template>
  <v-container>
    <div color="transparent" class="d-flex justify-center" flat>
      <p class="month d-flex justify-center" text>February 2021</p>
    </div>
    <SingleProduct />
  </v-container>
</template>

<script>
import SingleProduct from "../components/SingleProduct/SingleProduct";
export default {
  components: {
    SingleProduct,
  },
};
</script>

<style>
.month {
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  color: #2c547c;
}
</style>