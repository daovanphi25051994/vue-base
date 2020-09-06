import Vue from "vue";
import Vuex from "vuex";
import { login } from "../api/auth";

import {
  setToken,
  setRoles,
  removeToken,
  removeRoles
} from "../request/cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {
      id: null,
      address: "",
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      birth_date: "",
      phone: "",
      about_me: ""
    }
  },
  getters: {
    getUser(state) {
      return state.userProfile;
    }
  },
  mutations: {
    setToken(state, token) {
      setToken(token);
    },
    setRoles(state, roles) {
      setRoles(roles);
    },
    setUserProfile(state, user) {
      state.userProfile = user;
    },
    removeToken() {
      removeToken();
    },
    removeRoles() {
      removeRoles();
    }
  },
  actions: {
    LOGIN: ({ commit }, loginForm) => {
      return new Promise((resolve, reject) => {
        login(loginForm)
          .then(response => {
            commit("setToken", response.data.access_token);
            commit("setRoles", response.data.roles[0].role_name);
            commit("setUserProfile", response.data.user);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    LOGOUT: ({ commit }) => {
      commit("removeToken");
      commit("removeRoles");
    }
  }
});

export default store;
