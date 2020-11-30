<template>
  <div>
    <div style="height:100vh;">
      <Hero />
    </div>
    <Category />
    <Subscription/>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Category from "../components/Category";
import Subscription from "../components/Subscription";
export default {
  components: {
    Hero,Subscription,
    Category,
  },
};
</script>

<style>
</style>