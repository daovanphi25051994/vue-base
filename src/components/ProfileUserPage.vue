<template>
  <div id="profile-user">
    <el-row>
      <el-col :span="12">
        <h1>User Profile</h1>
        <p>Id: {{userInfo.id}}</p>
        <p>First Name:{{userInfo.first_name}}</p>
        <p>Last Name:{{userInfo.last_name}}</p>
        <!-- <p>Email:{{userInfo}}</p>
        <p>Phone:{{userInfo}}</p>
        <p>username:{{userInfo}}</p> -->
      </el-col>
      <el-col :span="12">Bài viết </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "profile-user",
  data() {
    return {

        userInfo: this.$store.getters.getUser
       
    }
  },
  methods: {},
  computed: {
    
  }
//   ,
//   mounted() {
//     this.userInfo = this.$store.getters.getUser
//   }
};
</script>

<style scoped></style>
