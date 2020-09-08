import { login } from '../../api/auth'

import {
  setToken,
  setRoles,
  removeToken,
  removeRoles,
  setUser
} from '../../request/cookie'

const state = {
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
};

const getters = {
  getUser(state) {
    return state.userProfile;
  }
};

const mutations = {
  setToken(state, token) {
    setToken(token);
  },
  setRoles(state, roles) {
    setRoles(roles);
  },
  setUser(state, user) {
    setUser(user);
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
};

const actions = {
  LOGIN: ({ commit }, loginForm) => {
    return new Promise((resolve, reject) => {
      login(loginForm)
        .then(response => {
          commit("setToken", response.data.access_token);
          commit("setRoles", response.data.roles[0].role_name);
          commit("setUserProfile", response.data.user);
          commit("setUser", response.data.user);
          console.log(response.data.user.id);
          resolve(response.data.user.id);
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
};

export default {
  state,
  getters,
  mutations,
  actions
};
