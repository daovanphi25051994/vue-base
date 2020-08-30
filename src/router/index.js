import Vue from "vue";
import Router from "vue-router";
import LoginPage from "@/components/LoginPage";
import AdminPage from "@/components/AdminPage";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "loginPage",
      component: LoginPage
    },
    {
      path: "/admin",
      name: "adminPage",
      component: AdminPage
    }
  ]
});
