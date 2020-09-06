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
    setToken(state){
      setToken()
    },
    setUserProfile(state, user){
      state.userProfile = user
    }
    
  },
  actions: {
    LOGIN: ({ commit }, loginForm) => {
     return new Promise((resolve, reject) => {
      login( loginForm).then(response => {
          console.log(response.data.user)
          commit("setToken")
          commit("setUserProfile", response.data.user)

          resolve()
      }).catch(error => {
          reject(error)
      })
  })
     
    },
    LOGOUT: ({ commit }) => {
      commit("removeToken");
      commit("removeRoles");
    }
  }
});

export default store;
