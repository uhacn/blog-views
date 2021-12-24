<template>
  <div>
    <el-table :data="articles" style="width: 100%">
      <el-table-column label="文章标题" prop="title"></el-table-column>
      <el-table-column label="发布时间" prop="createTime"></el-table-column>
      <el-table-column label="文章来源" prop="stemFrom"></el-table-column>
      <el-table-column label="阅读量" prop="read"></el-table-column>
      <el-table-column label="点赞数" prop="star"></el-table-column>
      <el-table-column label="评论数" prop="comment"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="update(scope.row)" type="primary" size="mini"
            >编辑</el-button
          >
          <el-button @click="del(scope.row)" type="danger" size="mini"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页按钮 -->
    <el-pagination
      background
      layout="prev,pager,next"
      :total="count"
      :page-size="pageSize"
      :current-page="page"
      @current-change="changePage"
      style="margin-top: 20px"
    ></el-pagination>
  </div>
</template>

<script>
import { getAllArticle, removeArticle } from "network/article.network";

export default {
  data() {
    return {
      articles: [],
      page: 1,
      pageSize: 0,
      count: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getAllArticle(this.page, this.$store.state.user.username).then((res) => {
        this.articles = res.data.result;
        this.page = res.data.page;
        this.pageSize = res.data.pageSize;
        this.count = res.data.count;
      });
    },
    update(row) {
      this.$router.push({
        path: "/admin/article/update",
        query: {
          id: row.id,
        },
      });
    },
    del(row) {
      this.$confirm("确定要删除吗？", "提示", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
          removeArticle(row.id).then(res => {
            this.$message({
              message: res.data.msg,
              type: res.data.code === 200 ? "success" : "error",
            });
            if (res.data.code === 200) {
              this.getData();
            }
          });
        })
        .catch(() => {});
    },
    changePage(page) {
      this.page = page;
      this.getData();
    },
  },
};
</script>

<style>
</style>