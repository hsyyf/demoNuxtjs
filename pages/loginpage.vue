<template>
  <section>
    <div>
      <el-form id="loginForm" style="margin: 10% 40% 60% 40%">
        <span>用户名</span>
        <el-input id="username" v-model="user"></el-input>
        <br/>
        <span>密码</span>
        <el-input id="password" v-model="pass" type="password"></el-input>

        <el-button-group>
          <el-button v-on:click="login">登录</el-button>
          <el-button>忘记密码</el-button>
        </el-button-group>
      </el-form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "loginpage",
    data() {
      return {
        user: null,
        pass: null
      }
    },
    methods: {
      login() {
        let user = this.user
        let pass = this.pass
        this.http.post("/login", {username: user, password: pass}).then(res => {
          if (res.data.code === 1) {
            alert("账号密码错误")
            return
          }
          this.$store.state.token = res.data.token
          this.$router.push({path: "/"})

        })
      }
    },
  }


</script>

<style scoped>

</style>
