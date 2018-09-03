<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-menu-item v-on:click="clickMenu('1')" index="1">导航1</el-menu-item>
      </el-menu>
      <el-menu>
        <el-menu-item v-on:click="clickMenu('2')" index="2">导航2</el-menu-item>
      </el-menu>
      <el-menu>
        <el-menu-item v-on:click="clickMenu('3')" index="3">导航3</el-menu-item>
      </el-menu>

    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-row>
          <el-col :span="-1">
            <span class="grid-content bg-purple" style="font-size: large">系统</span>
          </el-col>
          <el-col :span="23">
            <span style="font-size: large" v-text="this.$store.state.token"></span>
            <span v-on:click="logOut" style="font-size: large"><i class="el-icon-setting"></i>退出</span>
          </el-col>
        </el-row>
      </el-header>

      <!--<el-main>-->
      <!--<h1> This Main {{menuTitle}}</h1>-->
      <!--</el-main>-->
      <el-main v-model="CenterMain">
        <component :is="tabView"></component>
      </el-main>

    </el-container>

  </el-container>


</template>

<script>

  import MenuFirst from "~/components/MenuFirst.vue"
  import MenuSec from "~/components/MenuSec.vue"

  export default {
    data() {
      return {
        menuTitle: null,
        CenterMain: null,
        tabView: MenuFirst
      }
    },

    components: {MenuFirst, MenuSec},
    methods: {
      logOut: function () {
        this.$store.state.token = null
        this.$router.push("/loginPage")
      },
      clickMenu: function (msg) {
        switch (parseInt(msg)) {
          case 1:
            this.tabView = MenuFirst;
            break
          case 2:
            this.tabView = MenuSec;
            break

        }
      }
    }
  }


</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

</style>

