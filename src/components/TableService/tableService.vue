<template>
  <div>
    <!--  表格  -->
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="tableList"
      style="width: 100%">
      <el-table-column
        type="index"
        label="No."
        width="55">
        <template slot-scope="scope">
          <span>{{(currentPage - 1) * pageSize + scope.$index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item,index) in tableItemList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
        :header-align="item.headerAlign"
        :show-overflow-tooltip='item.showTooltip'
         background
        :formatter="item.formatter">
        <template slot-scope="scope">
          <span
            v-if="item.label==='文件名称'"
            class="link"
            @click="openPdf(scope.row)"
          >{{ scope.row.tsfName }}</span>
          <span v-else>{{ scope.row[item.prop]  }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        :render-header="tableAction"
        width="180"
        v-if="flg"
        align="center"
      >
        <template slot-scope="scope">
          <el-button @click="down(scope.row.tsfId,scope.row.tsfName)" type="info" icon="el-icon-download" size="small"
                     circle></el-button>
          <el-button @click="del(scope.row.tsfId)" type="primary" icon="el-icon-delete" size="small"
                     circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--   分页   -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100, 200, 500]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import HelpHint from '@/components/HelpHint/HelpHint.vue';
  import {delFiles, viewPdf} from '@/api/zhfw.js';
  import {download} from '@/utils/request.js';
  import Sortable from "sortablejs";

  export default {
    name: 'TableService',
    props: {
      tableData: {
        type: Array,
        required: true,
      },
      tableItemList: {
        type: Array,
        required: true,
      },
      flg: {
        type: Boolean,
        required: true,
      },
      total: {
        type: Number,
        required: false,
      },
      currentPage: {
        type: Number,
        required: false,
        default:1

      },
      loading: {
        type: Boolean,
        required: false,
        // default:true
      },
      isOpen: {
        type: Boolean,
        required: false,
        default: false
      },
      drop: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        data: [],
        pageSize: 10
      };
    },
    computed: {
      tableList() {
        return this.tableData
      },
    },
    components: {
      HelpHint
    },
    mounted() {
      this.rowDrop()
    },
    methods: {
      tableAction() {
        return this.$createElement('HelpHint', {
          props: {
            content: '下载 / 删除'
          }
        }, '操作');
      },
      // 下载文件
      down(id, name) {
        // downloadFiles(id).then(res => {
        //   console.log(res);
        // })
        // downloadFile('file/tsfile/downloadFile_get?tsfId=' + id)
        download('file/tsfile/downloadFile?tsfId=' + id, "", name)
      },
      // 删除文件
      del(id) {
        this.$confirm('确定删除吗')
          .then(_ => {
            delFiles(id).then(res => {
              if (res.code === 200) {
                this.$message({
                  message: res.msg,
                  type: 'success'
                });
                this.$emit("getFileList")
              }
            })
          })
          .catch(_ => {
          });
      },
      // 页数量改变
      handleSizeChange(val) {
        this.pageSize = val
        this.$emit("handleSizeChange", val)
      },
      // 页码切换
      handleCurrentChange(val) {
        this.$emit("handleCurrentChange", val)
      },
      // 打开pdf文件
      openPdf(cell) {
        if (this.isOpen) {
          viewPdf(cell.tsfId)
        }
      },
      //行拖拽
      rowDrop() {
        if (this.drop) {
          const tbody = document.querySelector('.el-table__body-wrapper tbody')
          Sortable.create(tbody, {
            onEnd: ({newIndex, oldIndex}) => {
              var $li = tbody.children[newIndex],
                $oldLi = tbody.children[oldIndex];
              // 先删除移动的节点
              tbody.removeChild($li)
              // 再插入移动的节点到原有节点，还原了移动的操作
              if (newIndex > oldIndex) {
                tbody.insertBefore($li, $oldLi)
              } else {
                tbody.insertBefore($li, $oldLi.nextSibling)
              }
              const currRow = this.tableData.splice(oldIndex, 1)[0]
              this.tableData.splice(newIndex, 0, currRow)
            }
          })
        }
      },
    },

  }
</script>
<style scoped>

</style>
