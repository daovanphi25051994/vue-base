<template>
  <div>
    <el-container style=" border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>Navigator One</template
            >
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>Navigator Two</template
            >
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>Navigator Three</template
            >
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-input v-model="searchKey" style="width: 200px"></el-input>
          <el-button type="primary" style="margin-right: 20px" @click="search"
            >Search</el-button
          >
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item
                ><el-link @click="logout">Logout</el-link></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ username }}</span>
        </el-header>

        <el-main>
          <el-table :data="users">
            <el-table-column prop="id" label="ID"> </el-table-column>
            <el-table-column prop="username" label="User Name">
            </el-table-column>
            <el-table-column prop="gender" label="Gender"> </el-table-column>
            <el-table-column prop="email" label="Email"> </el-table-column>
            <el-table-column prop="phone" label="Phone"> </el-table-column>
            <el-table-column prop="address" label="Address"> </el-table-column>
            <el-table-column prop="status" label="Status"> </el-table-column>
            <el-table-column label="Details">
              <el-button type="primary">Details</el-button>
            </el-table-column>
            <el-table-column label="Action">
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  icon="el-icon-lock"
                  circle
                  @click="lockUser(scope.row)"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      users: [],
      icons: "",
      username: this.$route.params.username,
      searchKey: ""
    };
  },
  methods: {
    lockUser(row) {
      let message = "";
      if (row.status === 1) {
        message = "Bạn có muốn khóa tài khoản này?";
      } else {
        message = "Bạn có muốn mở tài khoản này?";
      }
      let isAgree = confirm(message);
      if (isAgree) {
        if (row.status === 1) {
          row.status = 0;
        } else {
          row.status = 1;
        }
        this.$store
          .dispatch("LOCK_USER", row)
          .then(user => {})
          .catch(err => {});
      }
    },
    logout() {
      this.$store
        .dispatch("LOGOUT")
        .then(result => {
          this.$router.push("/");
        })
        .catch(err => {});
    },
    search() {
      const newArray = [];
      const rootUser = this.$store.state.UserManagements.users;
      rootUser.forEach(user => {
        if (user.username.startsWith(this.searchKey)) {
          newArray.push(user);
        }
      });
      this.users = newArray;
    }
  },
  mounted() {
    this.$store
      .dispatch("GET_USERS")
      .then(users => {
        this.users = users;
        // const result = users.filter(user => {
        //   if (user.gender === 1) {
        //     return (user.gender = "Nam");
        //   } else {
        //     return (user.gender = "Nữ");
        //   }
        // });
        // const finalResult = result.filter(user => {
        //   if (user.status === 1) {
        //     return (user.status = "Hoạt động");
        //   } else {
        //     return (user.status = "Khóa");
        //   }
        // });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
