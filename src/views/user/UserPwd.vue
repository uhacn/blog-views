<template>
  <div>
    <el-form
      label-width="80px"
      :model="form"
      status-icon
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item label="用户名">
        <el-col :span="6">
          <el-input v-model="form.username" disabled></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="原密码">
        <el-col :span="6">
          <el-input
            v-model.trim="form.oldPassword"
            placeholder="请输入原密码"
            autocomplete="off"
            show-password
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="新密码">
        <el-col :span="6">
          <el-input
            v-model.trim="form.newPassword"
            placeholder="请输入新密码"
            autocomplete="off"
            show-password
          ></el-input>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('ruleForm')">修 改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updatePwd } from "network/user.network";

export default {
  data() {
    const validatorOldPwd = (rule, value, callback) => {
      //密码规则
      console.log(1);
      if (value === "") {
        return callback(new Error("请输入原密码"));
      } else if (this.form.oldPassword !== this.form.password) {
        return callback(new Error("原密码不正确"));
      } else if (this.form.oldPassword === this.form.newPassword) {
        return callback(new Error("新密码不能与原密码一致"));
      } else {
        callback();
      }
    };
    const validatorNewPwd = (rule, value, callback) => {
      //密码规则
      if (value === "") {
        return callback(new Error("请输入新密码"));
      } else if (this.form.oldPassword === this.form.newPassword) {
        return callback(new Error("新密码不能与原密码一致"));
      } else {
        callback();
      }
    };
    return {
      uploadHeader: {
        authorization: "Bearer " + sessionStorage.token,
      },
      form: {
        username: "",
        password: "",
        oldPassword: "",
        newPassword: "",
      },
      rules: {
        oldPassword: [{ validator: validatorOldPwd, trigger: "blur" }],
        newPassword: [{ validator: validatorNewPwd, trigger: "blur" }],
      },
    };
  },
  created() {
    this.form = this.$store.state.user;
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updatePwd({
            username: this.form.username,
            password: this.form.newPassword,
            oldPassword: this.form.oldPassword,
          })
            .then((res) => {
              this.$message({
                message: "密码修改成功，请重新登陆",
                type: res.data.code === 200 ? "success" : "error",
              });
              sessionStorage.clear();
              this.$router.push({
                path: "/login",
              });
            })
            .catch((err) => {
              this.$message({
                message: err.response.data,
                type: err.response.status === 400 ? "error" : "warning",
              });
            });
        }
      });
    },
  },
};
</script>

<style>
.small-img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.avatar-div {
  display: flex;
  align-items: center;
}
</style>           