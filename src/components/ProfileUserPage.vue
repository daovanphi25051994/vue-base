<template>

  <div id="profile-user">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6"
        ><div class="grid-content bg-purple">
            <NavBar></NavBar>
            <el-col :span="12">
              <h1>User Profile</h1>
              <p>Id: {{ user.id }}</p>
              <p>First Name:{{ user.first_name }}</p>
              <p>Last Name:{{ user.last_name }}</p>
            </el-col>
            <el-col :span="12">
              
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
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import NavBar from "./public/NavBar";
export default {
  name: "profile-user",
  data() {
    return {
      user: null,
      posts: this.$store.state.posts.posts
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
    }
  },
  mounted() {
    let username = this.$route.params.username;
    this.$store
      .dispatch("GET_USER_ID", username)
      .then(id => {
        this.$store
          .dispatch("GET_POSTS", id)
          .then(posts => {
            this.posts = posts;
          })
          .catch(err => {
            console.log("Can not get Posts");
          });
      })
      .catch(err => {
        console.log("Can not get User");
      });

    this.$store
      .dispatch("GET_USER_BY_USERNAME", username)
      .then(user => {
        this.user = user;
      })
      .catch(err => {
        console.log("Can not get user");
      });
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 500px;
}

.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
