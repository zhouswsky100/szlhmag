<template>
  <div>
    <ToolBar>
      <div style="float: right">
        <el-select v-model="queryInfo.tbaId" size="small" clearable placeholder="请选择分类" @change="changeSel()"
                   style="width: 140px">
          <el-option
            v-for="item in areas"
            :label="item.tbaName"
            :key=" item.tbaId"
            :value="item.tbaId">
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入文件名称"
          size="small"
          style="width: 240px"
          v-model="queryInfo.tsfName"
          clearable>
        </el-input>
        <el-button type="success" icon="el-icon-search" size="small" @click="getLawsFiles()"></el-button>
        <el-button type="success" icon="el-icon-refresh" size="small" @click="clearSel()"></el-button>
      </div>
    </ToolBar>
    <div class="g-mt-10">
      <el-table
        :data="tableData"
        row-key="id"
        style="width: 100%">
        <el-table-column
          type="index"
          label="No."
          align="center"
          width="50">
        </el-table-column>
        <el-table-column
          header-align="center"
          show-overflow-tooltip
          label="标题">
          <template slot-scope="scope">
            <span @click="openPdf(scope.row)">{{ scope.row.tsfName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="tsfPeriod"
          align="center"
          label="文号及日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="tsfUnit"
          label="发文单位"
          align="center"
          show-overflow-tooltip
          width="200">
        </el-table-column>
        <el-table-column
          prop="createtime"
          label="发布时间"
          align="center"
          width="200">
        </el-table-column>
      </el-table>
    </div>
    <div class="g-mt-10">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pagesize"
        :page-size="10"
        background
        layout="sizes, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar/ToolBar.vue';
  import {getLawsFiles} from '@/api/zhfw.js';
  import {viewPdf} from "@/api/zhfw";

  export default {
    data() {
      return {
        input: '',
        select: '',
        queryInfo: {}, // 查询字符串
        currentPage: 1,
        tableData: [],
        pagesize: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        total: 0,
        areas: [], //
      }
    },
    mounted() {
    },
    created() {
      this.getLawsFiles()
    },
    methods: {
      handleSizeChange(val) {
        this.queryInfo.pageSize = val
        this.getLawsFiles(this.queryInfo)
      },
      handleCurrentChange(val) {
        this.queryInfo.pageNum = val
        this.getLawsFiles(this.queryInfo)
      },
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
      changeSel() {
        console.log(this.select)
        console.log(this.input)
      },
      clearSel() {
        this.queryInfo = {}
      },
      openPdf(cell) {
        viewPdf(cell.tsfId)
      },
    },
    components: {
      ToolBar
    }
  }
</script>
