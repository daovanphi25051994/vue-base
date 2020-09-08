import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import AdminPage from '@/components/AdminPage'
import UserProfile from '../components/ProfileUserPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/:username',
      name: 'user-profile',
      component: UserProfile
    },
    {
      path: '/admin/:username',
      name: 'adminPage',
      component: AdminPage
    }
  ]
})
