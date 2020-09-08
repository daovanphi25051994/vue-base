import { getUsers } from '../../../api/admin/UserManagement';

const state = {
    users: []
};

const getters = {
  getUsers(state) {
    return state.users;
  }
};

const mutations = {
    setUsers(state, users) {
    state.users = users;
  }
};

const actions = {
    GET_USERS: ({ commit }) => {
    return new Promise((resolve, reject) => {
        getUsers()
        .then(
          response => {
              console.log(response.data)
           commit("setUsers", response.data)
            resolve(response.data);
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
 
};

export default {
  state,
  getters,
  mutations,
  actions
};
