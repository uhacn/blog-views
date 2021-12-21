<template>
<div>
  <img v-show="avatarUrl" :src="avatarUrl"  class="small-img">
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
 
</template>

<script>
export default {
  data() {
    return {
      uploadHeader: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inh4eHgiLCJwYXNzd29yZCI6IjUzYzkxNTAxY2Y0M2U5MTNlODM0NTQzN2JiMjU4NDc0IiwiaWF0IjoxNjM5OTc5NTAzLCJleHAiOjE2NDAwNjU5MDN9.iAsPRAni3hCrVbiK1qLDA4toISW9bkBJKsGzDeqGm8E",
      },
      avatarUrl: ''
    };
  },
  methods: {
    async onSuccess(res) {
      const {username} = res;
      this.avatarUrl = `http://localhost:8000/user/avatar/${username}`
      console.log(this.avatarUrl);
},
  },
};
</script>

<style>
.small-img{
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.avatar-div{
  display: flex;
  align-items: center;
}
</style>           