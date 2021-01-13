<template>
  <v-container fluid >
    <SearchBar />
    <CategoryForUser></CategoryForUser>    
    <RecentProducts />
    <InsightsCategory />
  </v-container>
</template>

<script>
import CategoryForUser from "../components/CategoryForUser";
import SearchBar from "../components/SearchBar";
import RecentProducts from "../components/RecentProducts";
import InsightsCategory from "../components/InsightsCategory";
export default {
  components: {
    CategoryForUser,
    SearchBar,
    RecentProducts,
    InsightsCategory,
  },
};
</script>

<style></style>
