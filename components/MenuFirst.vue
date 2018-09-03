<template>

  <el-container>
    <el-header class="selectHeader"> 测试头部</el-header>
    <el-row>
      <span>分馆：</span>

      <store-list-select @storeChange="getStoreId"/>


      <el-button v-on:click="getSelectedStore"> 筛选</el-button>
    </el-row>
  </el-container>
</template>

<script>
  import StoreListSelect from "./StoreListSelect";

  export default {
    name: "MenuFirst",
    components: {StoreListSelect},
    data() {
      return {storeId: null}
    },
    methods: {
      getSelectedStore: function () {
        alert(this.storeId)
      },
      getStoreId: function (msg) {
        this.storeId = msg
      }
    }
  }
</script>

<style scoped>
  .selectHeader {
    border-radius: 36px;
    box-shadow: darkgrey 10px 10px 10px 5px

  }

</style>
