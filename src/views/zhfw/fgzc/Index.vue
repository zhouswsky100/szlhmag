<template>
  <div>
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small">上传文件</el-button>
      <el-button type="primary" icon="el-icon-document-add" size="small" @click="save">保存排序
      </el-button>
      <div style="float: right">
        <el-select v-model="queryInfo.tbaId" size="small" clearable placeholder="请选择分类"
                   style="width: 140px">
          <el-option
            v-for="item in areas"
            :label="item.tbaName"
            :key=" item.tbaId"
            :value="item.tbaId">
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入您要查询的文件名称"
          size="small"
          style="width: 240px"
          v-model="queryInfo.tbaName"
          clearable>
        </el-input>
        <el-button type="success" icon="el-icon-search" size="small" @click="getLawsFiles()"></el-button>
      </div>
    </ToolBar>
    <TableService :tableData="tableData" :tableItemList="tableItemList" :flg='true' :total="total"
                  :currentPage="currentPage" @handleSizeChange="handleSizeChange" :isOpen="isOpen" :drop="drop"
                  @handleCurrentChange="handleCurrentChange" @getFileList="getLawsFiles" ref="test">
    </TableService>
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar/ToolBar.vue';
  import HelpHint from '@/components/HelpHint/HelpHint.vue';
  import TableService from '@/components/TableService/tableService.vue';
  import {getLawsFiles, editFileId} from '@/api/zhfw.js';

  export default {
    data() {
      return {
        queryInfo: {}, // 查询字符串
        total: 0, // 总数
        currentPage: 1, // 当前页数
        areas: [], // 分类
        tableData: [], // 表格数据
        isOpen: true, // 是否打开pdf
        drop: true, // 是否可拖动排序
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
          "width": "100",
          "align": "center"
        }, {
          "prop": "tbaName",
          "label": "所属区域",
          "width": "100",
          "align": "center"
        }, {
          "prop": "userName",
          "label": "上传用户",
          "width": "100",
          "align": "center"
        }, {
          "prop": "createtime",
          "label": "上传时间",
          "width": "100",
          "align": "center"
        }]
      }
    },
    created() {
      this.getLawsFiles()
    },
    methods: {
      // 文件列表获取
      getLawsFiles() {
        getLawsFiles(this.queryInfo).then(res => {
          this.areas = res.data.areas
          this.tableData = res.data.files
          this.currentPage = res.data.pager["pageNum"]
          this.total = res.data.pager["totalRecord"]
          this.queryInfo = res.data.record
          this.queryInfo.pageNum = res.data.pager["pageNum"]
          this.queryInfo.pageSize = res.data.pager["pageSize"]
        })
      },
      // 分页数量改变
      handleSizeChange(val) {
        this.queryInfo.pageSize = val
        this.getLawsFiles(this.queryInfo)
      },
      // 分页页码改变
      handleCurrentChange(val) {
        this.queryInfo.pageNum = val
        this.getLawsFiles(this.queryInfo)
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
