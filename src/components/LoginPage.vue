<template>
  <div id="login-form">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-image :src="src"></el-image>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-form
            :model="loginForm"
            status-icon
            :rules="rules"
            ref="loginForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="Email" prop="email">
              <el-input
                type="email"
                v-model="loginForm.email"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.prevent="login"
                >Submit</el-button
              >
            </el-form-item>
          </el-form>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var checkEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the email'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      }
      callback()
    }

    return {
      loginForm: {
        email: '',
        password: ''
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        email: [{ validator: checkEmail, trigger: 'blur' }]
      },
      src:
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  },
  methods: {
    login () {
      this.$store.dispatch('LOGIN', this.loginForm).then(() => {
        this.$router.push(this.$store.getters.getUser.username)
      })
    },
    logout () {
      this.$store.dispatch('LOGOUT')
    }
  },
  computed: {
    getUser () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style scoped></style>
