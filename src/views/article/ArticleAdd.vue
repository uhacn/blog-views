<template>
  <div>
    <el-form label-width="100px">
      <el-form-item label="文章标题">
        <el-input
          v-model="form.title"
          clearable=""
          placeholder="请输入文章标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <div id="editor"></div>
      </el-form-item>
      <el-form-item label="文章来源">
        <el-radio v-model="form.stemFrom" label="原创">原创</el-radio>
        <el-radio v-model="form.stemFrom" label="转载">转载</el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="success" round @click="submit">发布文章</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Editor from "wangeditor";

import { createArticle } from "network/article.network";

export default {
  data() {
    return {
      form: {
        title: "",
        stemFrom: "",
        author: this.$store.state.user.username,
      },
      editor: null,
    };
  },
  mounted() {
    //创建wangEditor实例
    this.editor = new Editor("#editor");

    //配置上传图片的接口地址
    // this.editor.config.uploadImgServer = `http://localhost:3000/upload/editor/img`
    // this.editor.config.uploadFileName = 'editorFile'
    // this.editor.config.uploadImgHeaders = {
    //   authorization: "Bearer " + localStorage.token
    // }

    //设置富文本编辑器高度
    this.editor.config.height = 380;
    //设置提示文字
    this.editor.config.placeholder = "编辑文章内容";

    this.editor.create();
  },
  methods: {
    submit() {
      // 获取文章内容
      const content = this.editor.txt.html();
      // 创建时间
      const date = new Date();
      const createTime = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      createArticle(this.form, content, createTime).then(res => {
        this.$message({
          message: res.data.msg,
          type: res.data.code === 200 ? "success" : "error",
        });
      });
    },
  },
};
</script>

<style>
</style>