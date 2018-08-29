<template>

  <section class="login-box">
    <header-line/>

    <div id="loginForm">
      <input v-model="username" type="text" placeholder="username" class="el-input--medium"/>
      <input v-model="password" type="password" placeholder="password" class="el-input--medium"/>
      <br>
      <button v-on:click="loginPost" class="el-button--danger">登录</button>
      <button v-on:click="forgotPassword" class="el-button--success">忘记密码</button>
      <el-button v-on:click="checkToken" type="primary">获取token</el-button>

      <br/>
      <select id="storeList">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <button v-on:click="getStoreList">搜索</button>
      <input v-model="tempString" type="text"/>
      <br>


    </div>
  </section>
</template>


<script src="~/assets/login.js">


</script>

<style scoped>

  .login-box {
    background: url("/static/loginbag.png");
    cursor: cell;
  }

</style>
