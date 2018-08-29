<template>

  <section>
    <header-line/>

    <div id="loginForm">
      <input v-model="username" type="text" placeholder="username"/>
      <input v-model="password" type="password" placeholder="password"/>
      <br>
      <button v-on:click="loginPost">登录</button>
      <button v-on:click="forgotPassword">忘记密码</button>
      <button v-on:click="checkToken">获取token</button>

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

</style>
