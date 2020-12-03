import Home from "./Views/Home.vue";
import CatagoriesScreen from "./Views/CatagoriesScreen.vue";
import SubCategory from "./Views/SubCategory.vue";
import Products from "./Views/ProductScreen.vue";
import SingleProduct from "./Views/SingleProduct.vue";
import InsightsScreen from "./Views/InsightsScreen.vue";
import LibraryScreen from "./Views/LibraryScreen.vue";
import LibraryScreenSelect from "./Views/LibraryScreenSelect.vue";
import Sub from "./components/SubCategory/sub2.vue";
import LoginSignup from "./components/LogIn/LoginSignup.vue";
import CreateAccount from "./Views/CreateAcc.vue";
import InsightsList from "../src/components/insights/InsightsList.vue";
import swiperLibrary from "./components/Library/swiperLibrary.vue";
import ResetPassword from "./components/LogIn/ResetPassword.vue";
import store from "./store";
import SearchResult from "./components/SearchResult.vue";
// import store from "./store";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/client/ResetPassword/:id",
    component: ResetPassword,
  },
  {
    path: "/sub/:id",
    component: Sub,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/SearchResult/:id",
    component: SearchResult,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/CatagoriesScreen",
    component: CatagoriesScreen,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/SubCategory/:id",
    component: SubCategory,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/Products/:id",
    component: Products,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    name: "SingleProduct",
    path: "/SingleProduct/:id",
    component: SingleProduct,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/Insights/:id",
    component: InsightsScreen,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/InsightsList",
    component: InsightsList,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/MyLibrary/:id",
    component: LibraryScreen,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/MyLibrary",
    component: LibraryScreenSelect,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
  {
    path: "/LoginSignup",
    name: "LoginSignup",
    component: LoginSignup,
  },
  {
    path: "/CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/swiperLibrary",
    component: swiperLibrary,
    beforeEnter: (to, from, next) => {
      console.log(store.getters);
      if (!store.getters["isLoggedIn"]) {
        return next({
          name: "LoginSignup",
        });
      }
      next();
    },
  },
];
