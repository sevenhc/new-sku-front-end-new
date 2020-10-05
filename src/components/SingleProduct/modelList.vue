<template>
  <v-card class="mx-auto" flat>
    <v-list dense>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <v-list-item-description v-text="item.date"></v-list-item-description>
          </v-list-item-content>
        </v-list-item>
        
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    item: 1,
    items: [
      { text: "Cold Meals", icon: "mdi-ice-cream" ,date:"Fri Feb 14 2020 02:01:47"},
      { text: "Vegitarian", icon: "mdi-leaf" ,date:"Mon Apr 01 2020 04:20:52"},
    ],
  }),
};
</script>
