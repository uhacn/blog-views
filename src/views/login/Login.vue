<template>
  <div class="login">
    <el-card>
      <div class="login-title">博客后台管理系统</div>
      <el-form :model="form" status-icon :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model.trim="form.username"
            placeholder="请输入用户名"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model.trim="form.password"
            placeholder="请输入密码"
            autocomplete="off"
            show-password
          >
            ></el-input
          >
        </el-form-item>
        <el-form-item class="login-btn">
          没有账号？立即注册
          <el-checkbox
            v-model="state"
            @change="changeState"
            style="margin-right: 20px; margin-left: 6px"
          ></el-checkbox>
          <el-button type="primary" @click="submit('ruleForm')">{{
            state ? "注 册" : "登 录"
          }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { userReg, userLogin } from "network/user.network";
export default {
  data() {
    //设置表单校验规则
    let validatorUserName = (rule, value, callback) => {
      //用户名规则
      if (value === "") {
        return callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

    let validatorPwd = (rule, value, callback) => {
      //密码规则
      if (value === "") {
        return callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      form: {
        //登录的表单项
        username: "",
        password: "",
      },
      rules: {
        //表单校验规则
        username: [{ validator: validatorUserName, trigger: "blur" }],
        password: [{ validator: validatorPwd, trigger: "blur" }],
      },
      state: false, //按钮状态，true为登录，false为注册
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.state) {
            userReg({
              username: this.form.username,
              password: this.form.password,
            })
              .then((res) => {
                this.$message({
                  message: "注册成功",
                  type: "success",
                });
              })
              .catch((err) => {
                this.$message({
                  message: err.response.data,
                  type: "error",
                });
              });
          } else {
            userLogin({
              username: this.form.username,
              password: this.form.password,
            })
              .then((res) => {
                sessionStorage.setItem("token", res.data.token);
                this.$router.push({
                  path: "/admin",
                });
                this.$message({
                  message: "登录成功",
                  type: "success",
                });
              })
              .catch((err) => {
                this.$message({
                  message: err.response.data,
                  type: "error",
                });
              });
          }
        }
      });
    },
    changeState() {
      //改变登录按钮状态
      this.form = {
        username: "",
        password: "",
      };
    },
  },
};
</script>

<style scoped>
/* 登录页面背景图片样式 */
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/image/loginBackground.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* el-card卡片组件样式 */
.el-card {
  width: 420px;
  height: 300px;
}
/* 登录标题样式 */
.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}
/* 登录按钮 */
.login-btn {
  text-align: right;
}
</style>