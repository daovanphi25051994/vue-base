<template>
  <div id="profile-user">
    <el-row>
      <el-col :span="8">
        <h1>User Profile</h1>
        <p>Id: {{ userInfo.id }}</p>
        <p>First Name:{{ userInfo.first_name }}</p>
        <p>Last Name:{{ userInfo.last_name }}</p>
      </el-col>
      <el-col :span="8">
        <el-card
          :body-style="{ padding: '0px' }"
          v-for="post in posts"
          :key="post.id"
        >
          <h3>{{ post.content }}</h3>
          <p>{{ post.createDate }}</p>
          <img :src="post.image" class="image" />
          <p>Likes : {{ post.likeQuantity }}</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <h2>Side bar</h2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "profile-user",
  data() {
    return {
      userInfo: this.$store.getters.getUser,
      posts: this.$store.state.posts.posts
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
    }
  },
  mounted() {
    console.log("get posts");
    // eslint-disable-next-line no-unused-vars
    let userName = this.$route.params.username
    this.$store
      .dispatch("GET_USER_ID", userName)
      .then(id => {
        console.log(id)
        this.$store
          .dispatch("GET_POSTS", id )
          .then(result => {
            console.log(result);
            this.posts = result;
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 500px;
}
</style>
