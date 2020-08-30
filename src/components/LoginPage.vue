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
    <button @click="logout" >Logout</button>
  </div>
</template>

<script>
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
      this.$store.dispatch("LOGIN", this.loginForm);
    },
    logout() {
      this.$store.dispatch("LOGOUT");
    }
  }
};
</script>

<style scoped></style>
