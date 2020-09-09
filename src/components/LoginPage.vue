<template>
  <div id="login-page">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">
          <div class="grid-content bg-purple">
            <el-image :src="src"></el-image>
          </div></div
      ></el-col>
      <el-col :span="2"></el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <div class="grid-content bg-purple-light">
          <el-form
            :model="loginForm"
            status-icon
            :rules="rules"
            ref="loginForm"
            class="demo-ruleForm"
          >
            <el-form-item>
              <el-input
                type="email"
                v-model="loginForm.email"
                autocomplete="off"
                placeholder="Email"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                v-model="loginForm.password"
                autocomplete="off"
                placeholder="Mật khẩu"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button id="btn-login" type="primary" @click.prevent="login"
                >Đăng nhập</el-button
              >
            </el-form-item>
          </el-form>
          <div  id="forgot-pass">
          <el-link type="primary">Quên tài khoản?</el-link>
          </div><hr>
          <div id="btn-register">
          <el-button type="success">Tạo tài khoản mới</el-button>

          </div>
           
        </div> </el-card>
      </el-col>
    </el-row>
    <Footer/>
  </div>
  
</template>

<script>
import loginForm from "./public/LoginForm";
import Footer from  "./public/Footer"
export default {
  name: "login",
  data() {
    var checkEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the email"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      }
      callback();
    };

    return {
      loginForm: {
        email: "",
        password: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }]
      },
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  },
  methods: {
    login() {
      this.$store.dispatch("LOGIN", this.loginForm).then(data => {
        let username = data[0];
        let role = data[1];
        if (role == "USER") {
          this.$router.push(username);
        } else {
          this.$router.push(`/admin/${username}`);
        }
      });
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    }
  },
  components: {
    loginForm, Footer
  }
};
</script>

<style scoped>
#login-page {

  background-color: #f0f2f5;
  padding-top: 150px;
}
#btn-login {
  width: 100%;
}
#forgot-pass {
  margin-top: 0;
  text-align: center;
}
#btn-register{
  margin-top: 30px;
  text-align: center;
  
}
</style>
