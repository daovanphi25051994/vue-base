import Vue from "vue";
import Vuex from "vuex";
import { login } from "../api/auth";
import {
  setToken,
  removeToken,
  setRoles,
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
    removeToken(state, token) {
      removeToken(token);
    },
    removeRoles(state, roles) {
      removeRoles(roles);
    },
    setUser(state, user) {
      state.userProfile = user;
    }
  },
  actions: {
    LOGIN: ({ commit }, loginForm) => {
      console.log("first");
      login(loginForm).then(
        response => {
          console.log("second");
          console.log(loginForm);
          console.log(response);
          commit("setToken", response.data.access_token);
          commit("setRoles", response.data.roles);
          commit("setUser", response.data.user);
        },
        error => {
          console.log("three");
          console.log(error);
        }
      );
    },
    LOGOUT: ({ commit }) => {
      commit("removeToken");
      commit("removeRoles");
    }
  }
});

export default store;
