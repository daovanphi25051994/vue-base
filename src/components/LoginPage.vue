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
            <div id="forgot-pass">
              <el-link type="primary">Quên tài khoản?</el-link>
            </div>
            <hr />
            <div id="btn-register">
              <el-button type="success" @click="dialogFormVisible = true"
                >Tạo tài khoản mới</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>





    <el-dialog
      id="register-form"
      title="Đăng ký"
      :visible.sync="dialogFormVisible"
    >
    <p class="message">{{ messgage }}</p>
      <el-form
        :model="registerForm"
        :rules="rules"
        ref="registerForm"
        class="demo-ruleForm"
      >
        <el-form-item>
          <el-input placeholder="Họ" v-model="registerForm.first_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="Tên" v-model="registerForm.last_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="Email" v-model="registerForm.email"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-input type="password" placeholder="Mật khẩu" v-model="registerForm.password"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-input type="password" placeholder="Xác nhận mật khẩu" v-model="registerForm.confirm_password"></el-input>
        </el-form-item>
        
         <el-date-picker type="date" placeholder="Ngày sinh"  style="width: 100%;" v-model="registerForm.birth_date"></el-date-picker>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="register"
          >Đăng ký</el-button
        >
      </span>
    </el-dialog>





  </div>
</template>

<script>
import loginForm from "./public/LoginForm";
import Footer from "./public/Footer";
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
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",

      dialogTableVisible: false,
      dialogFormVisible: false,
      registerForm: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        status: 1,
        birth_date: ""
      },
      formLabelWidth: "120px",
      messgage: ''
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
    },
    register(){
      console.log(this.registerForm)
      this.$store.dispatch("REGISTER", this.registerForm).then(data =>{
        this.messgage = 'Đăng ký thành công!! Chào mừng '+ data.last_name + ' đến với facebook.'
      }, err =>{
        this.messgage = 'Đăng ký thất bại!'
      })
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    }
  },
  components: {
    loginForm,
    Footer
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
#btn-register {
  margin-top: 30px;
  text-align: center;
}
#register-form {
  margin: 0 auto;
  width: 60%;
}
.message{
  color: green;
}
</style>
