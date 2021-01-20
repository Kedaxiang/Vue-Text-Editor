<template>
  <el-card style="padding: 50px 0;">
    <el-link :underline="false" class="link" @click="to('/experts/guide')">
      点击查看评审指南
    </el-link>

      <el-button class="btn" @click="to('/experts/report')">开始评审</el-button>
    
  </el-card>
</template>

<script>
export default {
  methods: {
    to(path){
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.link{
  font-size: 45px;
  display: block;
  text-align: center;
}

.btn{
  margin: 40px auto 0 auto;
  display: block;
}
</style>