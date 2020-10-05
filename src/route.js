import Home from "./Views/Home.vue";
import CatagoriesScreen from "./Views/CatagoriesScreen.vue";
import SubCategory from "./Views/SubCategory.vue";
import Products from "./Views/ProductScreen.vue";
import SingleProduct from "./Views/SingleProduct.vue";
import InsightsScreen from "./Views/InsightsScreen.vue";
import LibraryScreen from "./Views/LibraryScreen.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/CatagoriesScreen",
    component: CatagoriesScreen,
  },
  {
    path: "/SubCategory",
    component: SubCategory,
  },
  {
    path: "/Products",
    component: Products,
  },
  {
    path: "/SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/Insights",
    component: InsightsScreen,
  },{
    path: "/MyLibrary",
    component: LibraryScreen,
  },
];
