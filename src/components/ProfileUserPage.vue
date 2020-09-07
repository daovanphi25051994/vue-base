<template>
  <div id="profile-user">
    <el-row>
      <el-col :span="8">
        <h1>User Profile</h1>
        <p>Id: {{ userInfo.id }}</p>
        <p>First Name:{{ userInfo.first_name }}</p>
        <p>Last Name:{{ userInfo.last_name }}</p>
      </el-col>
      <el-col :span="16"
        >Bài viết
        <button @click="logout">Logout</button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "profile-user",
  data() {
    return {
      userInfo: this.$store.getters.getUser
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT").then(() => {});
    }
  },
  mounted(){
    this.$store.dispatch("GET_POSTS", this.$store.state.userProfile.id);
  }
};
</script>

<style scoped></style>
