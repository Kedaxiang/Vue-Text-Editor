<template>
  <el-card>
    <el-link type="primary" target="_blank" href="https://view.officeapps.live.com/op/view.aspx?src=http://mczaiyun.top/ht/3.docx">点击查看专业报告</el-link>
    <el-table
      :data="currentData"
      border
      style="width: 100%;margin: 25px 0;">
      <el-table-column
        prop="indicator"
        label="一级指标"
        min-width="140">
      </el-table-column>
      <el-table-column
        prop="context"
        label="具体内容"
        min-width="250">
      </el-table-column>
      <el-table-column
        prop="assess"
        label="评估"
        min-width="370">
        <template slot-scope="scope">
          <el-radio-group v-model="scope.row.assess">
            <el-radio :label="1">达到</el-radio>
            <el-radio :label="2">基本达到</el-radio>
            <el-radio :label="3">未达到</el-radio>
          </el-radio-group>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :page-size="size"
      :total="tableData.length">
    </el-pagination>

    <el-divider></el-divider>
    <h2>专家意见填写：</h2>
    <el-input type="textarea" :rows="5" v-model="opinion" placeholder="请在此处填写专家意见"></el-input>

    
    <el-button type="primary" style="margin-top: 20px" @click="handleSubmit">提交</el-button>
  </el-card>
</template>

<script>
export default {
  computed: {
    currentData(){
      console.log(this.size*(this.page-1), this.size*this.page)
      return this.tableData.slice(this.size*(this.page-1), this.size*this.page)
    }
  },
  data(){
    return {
      tableData: [{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },{
        indicator: '这是一级指标',
        context: '这是一级指标对应的具体内容',
        assess: 0
      },],
      opinion: "",
      page: 1,
      size: 5
    }
  },
  methods: {
    handleCurrentChange(page){
      this.page = page;
    },
    handleSubmit(){
      this.$message.success("提交成功");
    }
  }
}
</script>

<style lang="less" scoped>
h2{
  margin: 20px 0;
}

/deep/ textarea{
  max-width: 600px;
}
</style>