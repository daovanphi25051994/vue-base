<template>
  <div>
    <h1>login form</h1>
    <form>
      <label>Email: </label>
      <input type="email" v-model="loginForm.email" /><br />
      <label>Password: </label>
      <input type="password" v-model="loginForm.password" /><br />
      <button @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
       loginForm: {
          email: "",
        password: ""
       }
    };
  },
  methods: {
    login() {
      console.log(this.loginForm);
      axios
        .post("https://vndreamers-dev.herokuapp.com/auth/login", this.loginForm)
        .then(
          data => {
            console.log(data);
          }
        ),error => {
          console.log(error)
        }
    }
  }
};
</script>

<style scoped></style>
