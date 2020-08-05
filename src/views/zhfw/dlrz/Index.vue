<template>
<div>
    <ToolBar>
      <div style="float: right">
          <el-input
                  placeholder="用户名称或登录时间"
                  size="small"
                  style="width: 240px"
                  v-model="input"
                  clearable>
          </el-input>
          <el-button type="success" icon="el-icon-search" size="small"  @click="changeSel()"></el-button>
      </div>
    </ToolBar>
    <TableService  :tableData="tableData3" :tableItemList="tableItemList" :flg='false'> </TableService>

  </div>
</template>

<script>
  import ToolBar from '@/components/ToolBar/ToolBar.vue';
  import HelpHint from '@/components/HelpHint/HelpHint.vue';
  import TableService from '@/components/TableService/tableService.vue';

  export default {
    data() {
      return {
         input:'',
         select:'',
         tableData3: [],
         tableItemList:[{
              "prop":"name",
              "label":"No.",
              "width":"120"
         },{
              "prop":"文件名称",
              "label":"用户名称",
              "width":"200"
         },{
              "prop":"文件大小",
              "label":"登录ip",
              "width":"180"
         },{
              "prop":"文件类型",
              "label":"登录端口",
              "width":"180"
         },{
              "prop":"上传用户",
              "label":"mac地址",
              "width":"180"
         },{
              "prop":"上传时间",
              "label":"登录客户端",
              "width":"180"
         },{
              "prop":"上传时间",
              "label":"浏览器内核",
              "width":"180"
         },{
              "prop":"上传时间",
              "label":"登录时间",
              "width":"180"
         }]
      }
    },
    methods: {
      handleClick(row) {
        this.$alert(row, '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
      },
      changeSel(){
          console.log(this.select)
          console.log(this.input)
      },
      clearSel(){
          this.select = ''
          this.input = ''
      },
      tableAction(){
        return this.$createElement('HelpHint',{
          props:{
            content:'下载 / 删除'
          }
        },'操作');
      },
    },
    components: {
        ToolBar,HelpHint,TableService
    }
  }
</script>