import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: localStorage.getItem("username") || "",
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:3000/client/logIn",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.accessToken;
            const username = resp.data[0].ClientName;

            console.log("user name", resp.data[0].ClientName);
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, username);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
            // console.log("asd", err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:3000/client/addNew",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            const username = resp.data.ClientName;
            console.log("user name", username);
            localStorage.setItem("username", username);
            localStorage.setItem("token", token);
            console.log(token);
            // Add the following line:
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
});
