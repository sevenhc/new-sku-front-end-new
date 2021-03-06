import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: localStorage.getItem("username") || "",
    clientID: localStorage.getItem("clientID") || "",
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
    auth_error_new(state) {
      state.status = "error";
      console.log("😀", state);
    },
    auth_error_expire(state) {
      state.status = "expire";
      console.log("😀", state);
    },
    auth_success_new(state) {
      state.status = "abc";
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
          url: "/client/logIn",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.accessToken;
            const username = resp.data[0].ClientName;
            const clientID = resp.data[0].ClientID;
            console.log("datam", resp.data[0].Message);
            console.log("data2", resp.data);
            if (resp.data[0].Message == "Username or Password invalied.") {
              commit("auth_error_new");
            } else if(resp.data[0].Message == "Subscription expired. Please contact NewSku."){
              commit("auth_error_expire");
            } else {
              commit("auth_success_new", token, username);
              console.log("user name", resp.data[0].ClientName);
              console.log("ClientID", resp.data[0].ClientID);
              localStorage.setItem("token", token);
              localStorage.setItem("username", username);
              var now = new Date();
              console.log(now);
              var time = now.getTime();
              var expireTime = time + 60000 * 60 * 24;
              now.setTime(expireTime);
              // var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
              // document.cookie = 'cookie=ok;expires='+now.toUTCString()+';path=/';
              document.cookie =
                "cookie=ok;expires=" + now.toGMTString() + ";path=/";

              localStorage.setItem("clientID", clientID);
              axios.defaults.headers.common["Authorization"] = token;
            }

            resolve(resp);
          })
          .catch((err) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
            console.log("asd", err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "client/addNew",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            console.log("😃", resp.data);
            const token = resp.data.accessToken;
            const username = resp.data.ClientName;
            const clientID = resp.data.ClientID;
            console.log("user name", username);
            localStorage.setItem("username", username);
            localStorage.setItem("token", token);
            // console.log(token);
            // // Add the following line:
            // axios.defaults.headers.common["Authorization"] = token;
            // commit("auth_success", token, user);
            // resolve(resp);
            var now = new Date();
            console.log(now);
            var time = now.getTime();
            var expireTime = time + 60000 * 60 * 24;
            now.setTime(expireTime);
            // var tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
            // document.cookie = 'cookie=ok;expires='+now.toUTCString()+';path=/';
            document.cookie =
              "cookie=ok;expires=" + now.toGMTString() + ";path=/";

            localStorage.setItem("clientID", clientID);
            axios.defaults.headers.common["Authorization"] = token;
            location.reload();
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
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
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
