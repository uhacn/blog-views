<template>
  <el-container class="home-container">
    <el-header class="header-box">
      <div class="header-title">博客后台管理系统</div>
      <div class="header-right">
        <span>网站首页</span>
        <span>头像</span>
        <span>admin</span>
        <span>退出</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-submenu index="/admin/user">
            <template slot="title">
              <span>个人中心</span>
            </template>
            <el-menu-item index="/admin/user/info">个人资料</el-menu-item>
            <el-menu-item index="/admin/user/password">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="/admin/article">
            <template slot="title">
              <span>文章管理</span>
            </template>
            <el-menu-item index="/admin/article/add">发布文章</el-menu-item>
            <el-menu-item index="/admin/article/list">文章列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="/admin/comment">
            <template slot="title">
              <span>评论管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/admin/fans">
            <template slot="title">
              <span>粉丝管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/admin/star">
            <template slot="title">
              <span>点赞管理</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.el-container {
  height: 100%;
}

.home-container {
  width: 100%;
  height: 100vh;
  min-width: 1450px;
}

.el-header {
  background: #ffffff;
  border-bottom: 1px solid #ccc;
  height: 80px !important;
}

.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-box .header-title {
  font-size: 30px;
  font-weight: bold;
}
.header-box .header-right {
  cursor: pointer;
}

.el-aside {
  background: #b3c7e0;
}

.el-main {
  background: #f0f2f5;
}
</style>