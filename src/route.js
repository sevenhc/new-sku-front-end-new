import Home from "./Views/Home.vue";
import CatagoriesScreen from "./Views/CatagoriesScreen.vue";
import SubCategory from "./Views/SubCategory.vue";
import Products from "./Views/ProductScreen.vue";
import SingleProduct from "./Views/SingleProduct.vue";
import InsightsScreen from "./Views/InsightsScreen.vue";
import LibraryScreen from "./Views/LibraryScreen.vue";
import Sub from "./components/SubCategory/sub2.vue";
import LoginSignup from "./components/LogIn/LoginSignup.vue";
import CreateAccount from "./Views/CreateAcc.vue";
// import store from "./store";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sub/:id",
    component: Sub,
  },
  {
    path: "/CatagoriesScreen",
    component: CatagoriesScreen,
  },
  {
    path: "/SubCategory/:id",
    component: SubCategory,
  },
  {
    path: "/Products/:id",
    component: Products,
  },
  {
    path: "/SingleProduct/:id",
    component: SingleProduct,
  },
  {
    path: "/Insights",
    component: InsightsScreen,
  },
  {
    path: "/MyLibrary/:id",
    component: LibraryScreen,
  },
  {
    path: "/LoginSignup",
    component: LoginSignup,
  },
  {
    path: "/CreateAccount",
    component: CreateAccount,
  },
  
];


