import { getUserByUsername } from '../../api/user';

const state = {
 userID: null
};

const getters = {
  getUserID(state) {
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
  },
  GET_USER_BY_USERNAME: ({commit}, username) => {
        return new Promise((resolve, reject) => {
            getUserByUsername(username).then(response => {
                console.log(response.data)
                resolve(response.data)
            }, error => {
                console.log("error")
            }).catch(err => {
                reject(err)
            })
        });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
