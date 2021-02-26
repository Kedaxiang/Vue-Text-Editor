<template>
  <el-card>
    <div slot="header">
        <el-button type="primary" @click="()=>{goodsId = null; addFormVisible = true}">添加课程</el-button>
    </div>
    <el-table :data="commodityList" border style="width: 100%">
        <el-table-column prop="id" label="课程ID" width="70"></el-table-column>
        <el-table-column prop="name" label="名称" width="210"></el-table-column>
        <el-table-column prop="sortId" label="所属类别" width="110"></el-table-column>
        <el-table-column v-if="commodityList[0] && commodityList[0].updateTime" prop="updateTime" label="更新时间" width="200" sortable>
            <template slot-scope="scope">
                {{scope.row.updateTime | convertDate}}
            </template>
        </el-table-column>
        <el-table-column label="操作" min-width="240">
            <template slot-scope="scope">
                <el-tooltip effect="dark" content="编辑课程" placement="top" :enterable="false">
                    <el-button type="primary" size="small" circle icon="el-icon-edit" @click="handleEditCourse(scope.row.id)"></el-button>
                </el-tooltip>
                <el-tooltip effect="dark" content="删除课程" placement="top" :enterable="false">
                    <el-button type="danger" size="small" circle icon="el-icon-delete" @click="handleDelete(scope.row)"></el-button>
                </el-tooltip>
            </template>
        </el-table-column>
    </el-table>

    <!-- <el-pagination
        @size-change="(size)=>{ pageQuery.pageSize = size; fetchGoods()}"
        @current-change="(page)=>{ pageQuery.pageNum = page; fetchGoods()}"
        :current-page="pageQuery.pageNum"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="pageQuery.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="commodityTotal"
        background
        style="margin-top: 30px;">
    </el-pagination> -->

    <!-- 添加课程表单 -->
    <el-dialog :title="`${courseId ? '编辑' : '添加'}课程`" :visible.sync="addFormVisible" @close="resetForm('addFormData')">
        <el-form :model="addFormData" ref="addFormData" label-width="100px">
            <el-form-item label="课程名称：" prop="name">
                <el-input v-model="addFormData.name" placeholder="课程名称"></el-input>
            </el-form-item>
            <el-form-item label="课程简介：" prop="introduce">
                <el-input v-model="addFormData.introduce" placeholder="课程简介"></el-input>
            </el-form-item>
            <el-form-item label="视频链接：" prop="address">
                <el-input v-model="addFormData.videoUrl" placeholder="视频链接"></el-input>
            </el-form-item>
            <el-form-item label="课程图片：" prop="picture">
                <!-- :action="`${axios.defaults.baseURL}/goods/uploadGoodsPic`" -->
                <el-upload
                    class="avatar-uploader"
                    name="pic"
                    action=""
                    :show-file-list="false"
                    :on-progress="uploadProgress"
                    :on-success="res => {addFormData.picture = res.data; isUpload = false}">
                    <el-progress v-if="isUpload" type="circle" :percentage="progressPercentage" :width="160" style="display:block"></el-progress>
                    <img v-else-if="addFormData.picture" :src="addFormData.picture" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="addFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="goodsId ? handlePut() : handleAdd()">确 定</el-button>
        </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
    data() {
        return {
            commodityList: [],
            addFormVisible: false,
            courseId: null,
            addFormData: {
                introduce: '',
                videoUrl: '',
                name: '',
                picture: '',
            },
            isUpload: false,
            progressPercentage: 0
        }
    },
    methods: {
        handleEditCourse() {

        },
        handleDelete() {

        },
        resetForm() {

        },
        handlePut() {

        },
        handleAdd() {

        },
        uploadProgress(event, file, fileList){
            this.isUpload = true;
            this.progressPercentage = +file.percentage.toFixed(0)
        }
    }
}
</script>

<style>

</style>