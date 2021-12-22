<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="头像">
        <div class="avatar-div">
          <img :src="form.avatarUrl" class="small-img" />
          <el-upload
            action="http://localhost:8000/upload/avatar"
            name="avatar"
            :headers="uploadHeader"
            :show-file-list="false"
            :on-success="onSuccess"
          >
            <el-button>上传</el-button>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="用户名">
        <el-col :span="6">
          <el-input
            v-model="form.username"
            disabled
            placeholder="请输入用户名"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.sex" label="男">男</el-radio>
        <el-radio v-model="form.sex" label="女">女</el-radio>
        <el-radio v-model="form.sex" label="保密">保密</el-radio>
      </el-form-item>
      <el-form-item label="个人简介">
        <el-col :span="6">
          <el-input
            type="textarea"
            v-model="form.desc"
            rows="3"
            placeholder="填写你的个人简介"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="手机号">
        <el-col :span="6">
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="电子邮箱">
        <el-col :span="6">
          <el-input
            v-model="form.email"
            placeholder="请输入邮箱地址"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="userinfoModify">修 改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updateUserInfo } from "network/user.network";

export default {
  data() {
    return {
      uploadHeader: {
        authorization: "Bearer " + sessionStorage.token,
      },
      form: {
        _id: "",
        sex: "男",
        avatarUrl: "",
        desc: "",
        email: "",
        phone: "",
      },
    };
  },
  created() {
    this.form = this.$store.state.user;
  },
  methods: {
    onSuccess(res) {
      this.form.avatarUrl = `http://localhost:8000/user/avatar/${res.username}`;
    },
    userinfoModify() {
      updateUserInfo(this.form)
        .then((res) => {
          this.$message({
            message: res.data.msg,
            type: res.data.code === 200 ? "success" : "error",
          });
        })
        .catch((err) => {
          console.log(err);
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