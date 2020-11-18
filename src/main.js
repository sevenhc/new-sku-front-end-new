import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import axios from "axios";
import Routes from "./route";
import store from "./store";
import VueHtmlToPaper from "vue-html-to-paper";
axios.defaults.baseURL = "http://134.209.188.201:81";

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
  ],
};

Vue.use(VueHtmlToPaper, options);

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
  store,

  render: (h) => h(App),
  router: router,
}).$mount("#app");
