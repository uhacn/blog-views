<template>
  <div>
    <el-table :data="fans">
      <el-table-column>
        <template slot-scope="scope">
          <div class="fans-list">
            <div>
              <el-tag type="danger" size="small" effect="plain">粉丝</el-tag>
              {{ scope.row.username }} 关注了你
            </div>
            <div>
              {{ scope.row.createTime }}
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev,pager,next"
      :total="count"
      :page-size="pageSize"
      :current-page="page"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
import { findFans } from "network/fans.network";

export default {
  data() {
    return {
      fans: [],
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
      findFans(this.page, this.$store.state.user.username).then(res => {
        this.fans = res.data.result;
        this.page = res.data.page;
        this.pageSize = res.data.pageSize;
        this.count = res.data.count;
      });
    },
    changePage(page) {
      this.page = page;
      this.getData;
    },
  },
};
</script>

<style scoped>
.fans-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>