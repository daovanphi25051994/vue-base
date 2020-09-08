import { getUserByUsername } from '../../api/user';

const state = {
 userID: null
};

const getters = {
  getuserID(state) {
    return state.userID;
  }
};

const mutations = {
  setUserID(state, id) {
    state.userID = id;
  }
};

const actions = {
  GET_USER_ID: ({ commit }, username) => {
    return new Promise((resolve, reject) => {
        getUserByUsername(username)
        .then(
          response => {
           commit("setUserID", response.data.id)
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
