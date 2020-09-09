import { getUsers, lockUser } from '../../../api/admin/UserManagement';

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
  LOCK_USER: ({commit}, user) =>{
    return new Promise((resolve, reject) =>{
      lockUser(user).then((result) =>{
        resolve(result)
      }).catch(error =>{
        reject(error)
      })
    })
  }
 
};

export default {
  state,
  getters,
  mutations,
  actions
};
