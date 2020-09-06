<template>
  <div id="profile-user">
    <el-row>
      <el-col :span="12"> User Profile</el-col>
      <el-col :span="12"> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "profile-user",
  data() {
    return {
      profileUser: {
        email: "",
        password: ""
      }
      
    };
  },
  methods: {
   
  },
  computed: {
    
  }
};
</script>

<style scoped>


</style>
