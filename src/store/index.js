import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../api/auth'
import { getInfoUser } from '../api/user'

import {
  setToken,
  setRoles,
  removeToken,
  removeRoles,
  setUser
} from '../request/cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userProfile: {
      id: null,
      address: '',
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      birth_date: '',
      phone: '',
      about_me: ''
    },
    post: {
      id: null,
      image: '',
      likeQuantity: '',
      content: '',
      createDate: ''
    },
    posts: []
  },
  getters: {
    getUser (state) {
      return state.userProfile
    },
    getPosts (state) {
      return state.posts
    }
  },
  mutations: {
    setToken (state, token) {
      setToken(token)
    },
    setRoles (state, roles) {
      setRoles(roles)
    },
    setUser (state, user) {
      setUser(user)
    },
    setUserProfile (state, user) {
      state.userProfile = user
    },
    removeToken () {
      removeToken()
    },

    removeRoles () {
      removeRoles()
    },
    setPosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    LOGIN: ({ commit }, loginForm) => {
      return new Promise((resolve, reject) => {
        login(loginForm)
          .then(response => {
            commit('setToken', response.data.access_token)
            commit('setRoles', response.data.roles[0].role_name)
            commit('setUserProfile', response.data.user)
            commit('setUser', response.data.user)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    LOGOUT: ({ commit }) => {
      commit('removeToken')
      commit('removeRoles')
    },
    GET_POSTS: ({ commit }, id) => {
      getInfoUser(id).then(
        response => {
          console.log(response)
          commit('setPosts', response.data)
        },
        () => {
          console.log('error')
        }
      )
    }
  }
})

export default store
