import { getUserByUsername } from "../../api/user";

const state = {
  user: {
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
  getUserID(state) {
    return state.user.id;
  },
  setUser(state, user){
    state.user = user
  }
};

const mutations = {
  setUserID(state, id) {
    state.user.id = id;
  }
};

const actions = {
  GET_USER_ID: ({ commit }, username) => {
    return new Promise((resolve, reject) => {
      getUserByUsername(username)
        .then(
          response => {
            commit("setUserID", response.data.id);
            resolve(response.data.id);
          },
          () => {
            console.log("error");
          }
        )
        .catch(error => {
          reject(error);
        });
    });
  },
  GET_USER_BY_USERNAME: ({ commit }, username) => {
    return new Promise((resolve, reject) => {
      getUserByUsername(username)
        .then(
          response => {
            commit("setUser", response.data);
            resolve(response.data);
          },
          error => {
            console.log("error");
          }
        )
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
