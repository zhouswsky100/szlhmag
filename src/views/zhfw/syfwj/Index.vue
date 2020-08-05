<template>
  <div>
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="open">上传文件</el-button>
      <el-button type="primary" icon="el-icon-document-add" size="small" @click="save">保存排序</el-button>
      <div style="float: right">
        <el-select v-model="queryInfo.tsfType" size="small" clearable placeholder="请选择分类"
                   style="width: 140px">
          <el-option
            v-for="item in typeList"
            :label="item.tsftName"
            :key=" item.tsftId"
            :value="item.tsftId">
          </el-option>
        </el-select>
        <el-input
          placeholder="搜索标题"
          size="small"
          style="width: 240px"
          v-model="queryInfo.tsfName"
          clearable>
        </el-input>
        <el-button type="success" icon="el-icon-search" size="small" @click="getFileList()"></el-button>
      </div>
    </ToolBar>
    <!-- 上传弹窗层-->
    <div class="dialogbox" v-show='upFlg'>
      <div class="main">
        <p class="title">文件上传</p>
        <div class="cont">
          <el-select v-model="tsfType" placeholder="请选择">
            <el-option
              v-for="item in typeList"
              :key="item.tsftId"
              :label="item.tsftName"
              :value="item.tsftId">
            </el-option>
          </el-select>
          <el-upload
            ref="upload"
            class="upload-demo"
            :action="'/dev-api/file/tsfile/uploadFile?tsfType='+tsfType+'&access_token='+$store.state['user'].token"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="5"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :auto-upload="false">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <div class="g-mt-20">
          <el-button type="primary" @click="upLoad()">发布</el-button>
          <el-button plain @click="open()">关闭</el-button>
        </div>
      </div>
    </div>
    <TableService :tableData="tableData" :tableItemList="tableItemList" :flg='true' :total="total"
                  :currentPage="currentPage" @handleSizeChange="handleSizeChange" :is-open="isOpen" :drop="drop"
                  @handleCurrentChange="handleCurrentChange" @getFileList="getFileList">
    </TableService>
  </div>
</template>
<script>
  import ToolBar from '@/components/ToolBar/ToolBar.vue';
  import HelpHint from '@/components/HelpHint/HelpHint.vue';
  import TableService from '@/components/TableService/tableService.vue';

  import {editFileId, getFileList, getTypeList, uploadFile} from "@/api/zhfw";

  export default {
    data() {
      return {
        queryInfo: {}, // 查询字符串
        total: 0, // 总数
        currentPage: 1, // 当前页数
        typeList: [], // 分类
        tableData: [], // 表格数据
        isOpen: true, // 打开pdf
        drop: true, // 是否可拖动
        upFlg: false,
        options: [],
        fileList: [],
        tsfType: '',
        access_token: '',
        // 表头
        tableItemList: [{
          "prop": "tsfName",
          "label": "文件名称",
          "headerAlign": "center",
          "showTooltip": true
        }, {
          "prop": "tsfSize",
          "label": "文件大小",
          "width": "100",
          "align": "center"
        }, {
          "prop": "tsftName",
          "label": "文件类型",
          "width": "180",
          "align": "center"
        }, {
          "prop": "userName",
          "label": "上传用户",
          "width": "150",
          "align": "center"
        }, {
          "prop": "createtime",
          "label": "上传时间",
          "width": "180",
          "align": "center"
        }]
      }
    },
    created() {
      this.getFileList()
      this.getTypeList()
    },
    // computed: {
    //   data() {
    //     return {"tsfType": this.tsfType}
    //   }
    // },
    methods: {
      // 获取分类列表
      getTypeList() {
        getTypeList().then(res => {
          if (res.code === 200) {
            this.typeList = res.data
          }
        });
      },
      // 获取文件列表
      getFileList() {
        getFileList(this.queryInfo).then(res => {
          if (res.code === 200) {
            this.tableData = res.data.files
            this.currentPage = res.data.pager["pageNum"]
            this.total = res.data.pager["totalRecord"]
            this.queryInfo = res.data.record
            this.queryInfo.pageNum = res.data.pager["pageNum"]
            this.queryInfo.pageSize = res.data.pager["pageSize"]
          }
        });
      },
      // 上传
      upLoad() {
        this.$refs.upload.submit();
        // uploadFile(this.tsfType).then(res => {
        //   console.log(res);
        //   if (res.code == 200) {
        //   }
        // })
      },
      // 分页数量改变
      handleSizeChange(val) {
        this.queryInfo.pageSize = val
        this.getFileList(this.queryInfo)
      },
      // 分页页码改变
      handleCurrentChange(val) {
        this.queryInfo.pageNum = val
        this.getFileList(this.queryInfo)
      },
      handleClick(row) {
        this.$alert(row, '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
      },
      tableAction() {
        return this.$createElement('HelpHint', {
          props: {
            content: '下载 / 删除'
          }
        }, '操作');
      },
      open() {
        if (this.upFlg) {
          this.upFlg = false
        } else {
          this.upFlg = true
        }
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
      },
      // 保存排序
      save() {
        let data = this.tableData.map((item, index) => {
          const totalIndex = (this.queryInfo.pageNum - 1) * this.queryInfo.pageSize + index + 1
          item.tsfSort = totalIndex
          return {"tsfSort": item.tsfSort, "tsfId": item.tsfId, "tsfName": item.tsfName}
        })
        // console.log(data);
        editFileId(data).then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$message({
              message: "排序成功",
              type: 'success'
            });
          }
        })
      }
    },
    components: {
      ToolBar, HelpHint, TableService
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .dialogbox {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    z-index: 1000;

    .main {
      font-family: Tahoma, Geneva, sans-serif;
      font-size: 12px;
      font-weight: normal;
      max-width: 320px;
      min-width: 170px;
      padding: 15px;
      position: relative;
      margin: 10% auto 0;
      background-color: rgb(255, 255, 255);
      border: solid 0 rgb(90, 90, 90);
      overflow: auto;
    }

    .title {
      margin-bottom: 0;
      font-size: 18px;
      line-height: 1;
      color: #303133;
      text-align: left;
    }

    .cont {
      margin-top: 20px;
      display: flex;

      /deep/ .upload-demo {
        padding-left: 15px;
      }
    }
  }

</style>
