<template>
  <div>
    <h1>login form</h1>
    <form>
      <label>Email: </label>
      <input type="text" v-model="loginForm.email"><br>
      <label>Password: </label>
      <input type="text" v-model="loginForm.password"><br>
      <button @click.prevent="login">Login</button>
    </form>
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
      console.log(this.loginForm);
    }
  }
};
</script>

<style scoped></style>
