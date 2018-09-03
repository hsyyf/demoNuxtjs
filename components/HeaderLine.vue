<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-row>
        <el-col :span="-1">
          <span class="grid-content bg-purple" style="font-size: large">系统</span>
        </el-col>
        <el-col :span="23">
          <span style="font-size: large" v-text="this.$store.state.token"></span>
          <span style="font-size: large" v-on:click="logout"><i class="el-icon-setting"></i>退出</span>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>


<script>

  export default {
    data() {
      return {}
    },
    name: "HeaderLine",
    methods: {
      logout: function () {
        this.$store.state.token = null
        this.$router.push({path: "/loginpage"})
      }
    }
  }
</script>


<style scoped>
  .top-line {
    top: 0;
    right: 0;
    padding-left: 25px;
    padding-right: 46px;
    background-color: #fff;
    font-size: 14px;
    height: 54px;
    min-width: 750px;
  }
</style>
