<template>
  <div id="header" class="top-line">
    <span> 测试同步</span>
    <br/>
    <span id="token">{{$store.state.token}}</span>
  </div>
</template>

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
