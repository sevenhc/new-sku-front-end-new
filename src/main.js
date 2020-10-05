import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import Routes from "./route";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,

  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount("#app");
