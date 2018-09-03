<template>
  <el-container>
    <el-select filterable v-model="key" value="storeList" @change="changeStoreSelect">
      <el-option v-for="item in options"
                 :key="item.id"
                 :label="item.name"
                 :value="item.id"> {{item.name}}
      </el-option>
    </el-select>
  </el-container>
</template>

<script>
  export default {
    name: "StoreListSelect",
    data() {
      return {
        options: null,
        key: ""
      }
    },
    created: function () {
      this.http.get("/store-list").then(res => {
        if (res.data.code === 0) {
          this.options = res.data.data
        }
      })

    },

    methods: {
      changeStoreSelect: function () {
        this.$emit("storeChange", this.key)
      }
    }

  }
</script>

<style scoped>

</style>
