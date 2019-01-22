<!-- 顶部样式 -->
<template>
  <div class="navbar" style="height: 100%;width:400px;background:rgb(62,117,200)">
    <hamburger class="hamburger-container"/>站点名称图标
    <div class="sidebar-container el-scrollbar">
      <div style="width:400px;height:400px;background:rgb(62,117,200) ">
        <div style="padding: 43 43 43 0;"></div>
      </div>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" >
        <span slot="title" style="font-size: 26px;">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <span style="font-size: 26px;">石仓</span>
        </template>
        <el-menu-item index="2-1">出入库</el-menu-item>
        <el-menu-item index="2-2">荒料</el-menu-item>
        <el-menu-item index="2-3">大板</el-menu-item>
        <el-menu-item index="2-4">条板</el-menu-item>
        <el-menu-item index="2-5">其他</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span style="font-size: 26px;">工程</span>
        </template>
        <el-menu-item index="3-1">项目</el-menu-item>
        <el-menu-item index="3-2">清单</el-menu-item>
        <el-menu-item index="3-3">进度</el-menu-item>
        <el-menu-item index="3-4">用料</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span style="font-size: 26px;">财务</span>
        </template>
        <el-menu-item index="4-1">结算</el-menu-item>
        <el-menu-item index="4-2">单据</el-menu-item>
        <el-menu-item index="4-3">资产</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <span style="font-size: 26px;">设置</span>
        </template>
        <el-menu-item index="5-1">仓库管理</el-menu-item>
        <el-menu-item index="5-2">车间管理</el-menu-item>
        <el-menu-item index="5-3">石类管理</el-menu-item>
        <el-menu-item index="5-4">工序管理</el-menu-item>
        <el-menu-item index="5-5">角色管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style>
  .el-menu-vertical {
    width: 400px;
  }
  .el-menu-item{
    background-color:rgb(108,154,225);
    height: 70px;
    line-height: 70px;
    color: white;
    text-align: center;
    font-size: 24px;
    color: white;
    border-bottom: solid 1px #3269BC;
  }
  .el-menu-item:hover{
    background-color:rgb(50,105,188);
  }
  .el-submenu{
    background-color:rgb(108,154,225);
    color: white;
  }
  .el-submenu__title {
    text-align: center;
    height: 70px;
    line-height: 70px;
    color: white;
    border-bottom: solid 1px #3269BC;
  }
  .el-submenu__title:hover{
    background-color:rgb(50,105,188);
  }
  .el-menu-item.is-active {
    background-color: rgb(50,105,188) !important;
    color: white;
    font-weight:bold;
  }
  .el-submenu.is-active .el-submenu__title{
    border-bottom: solid 1px #3269BC;
  }
  .el-submenu__title i{
    color: white;
  }
  .el-submenu .el-menu-item{
    height: 60px;
    line-height: 60px;
  }
  body{
    margin: 0px;
  }
</style>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>