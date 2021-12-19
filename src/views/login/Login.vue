<template>
  <div class="login">
    <el-card>
      <div class="login-title">简书后台管理系统</div>
      <el-form>
        <el-form-item>
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="pwd" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      pwd: ''
    }
  }
};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  background: url("~assets/image/loginBackground.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-card {
  width: 420px;
  height: 300px;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}

.el-button {
  width: 160px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>