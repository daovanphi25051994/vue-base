import Vue from "vue";
import Vuex from "vuex";
import { login } from "../api/auth";
import { setToken, removeToken, setRoles,removeRoles } from "../request/cookie";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {
      id: null,
      address: ""
    }
  },
  getters: {},
  mutations: {
    setToken(state, token){
      setToken(token)

    },
    setRoles(state, roles){
      setRoles(roles)

    },
    removeToken(state, token){
      removeToken(token)
    },
    removeRoles(state, roles){
      removeRoles(roles)
    }
  },
  actions: {
    LOGIN: ({ commit }, loginForm) => {
      login(loginForm).then(
        response => {
          commit("setToken",response.data.access_token )
          commit("setRoles",response.data.roles )
        },
        error => {
          console.log(error);
        }
      );
    },
    LOGOUT: ({ commit }) => {
      commit("removeToken")
      commit("removeRoles")
    }
  }
});

export default store;
