import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/posts'
import auth from './modules/auth'
import user from './modules/user'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    posts, auth, user
  }
})

export default store
