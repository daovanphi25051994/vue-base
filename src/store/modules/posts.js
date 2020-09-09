import { getInfoUser } from "../../api/user";

const state = {
  post: {
    id: null,
    image: "",
    likeQuantity: "",
    content: "",
    createDate: ""
  },
  posts: []
};

const getters = {
  getPosts(state) {
    return state.posts;
  }
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  }
};

const actions = {
  GET_POSTS: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      getInfoUser(id)
        .then(
          response => {
            commit("setPosts", response.data);
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
