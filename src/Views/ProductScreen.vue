<template>
  <div>
    <!-- <DateAndFilter /> -->
    <Products />

    <div color="transparent" class="d-flex justify-center mb-6" flat>
      <v-btn
        to="/SubCategory"
        color="#2c547c"
        medium
        class="d-flex justify-center"
        text
        >Back</v-btn
      >
    </div>
  </div>
</template>

<script>
// import DateAndFilter from "../components/SubCategory/DateAndFilter";
import Products from "../components/Products/Products";
export default {
  components: {
    // DateAndFilter,
    Products,
  },
};
</script>

<style>
.backBtn {
  text-align: left;
  font-size: 1rem;
  padding-top: 5%;
  color: #2c547c;
}
</style>
