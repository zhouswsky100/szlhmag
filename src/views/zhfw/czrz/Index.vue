<template>
<div>
    <ToolBar>
      <div style="float: right">
          <el-select v-model="select" size="small" clearable placeholder="请选择分类" @change="changeSel()" style="width: 140px">
            <el-option
                    v-for="item in $Config.czData"
                    :label="item.label"
                    :key=" item.value"
                    :value="item.value">
            </el-option>
          </el-select>
          <el-input
                  placeholder="用户名称"
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
              "label":"记录名称",
              "width":"200"
         },{
              "prop":"文件大小",
              "label":"访问地址",
              "width":"180"
         },{
              "prop":"文件类型",
              "label":"状态",
              "width":"180"
         },{
              "prop":"上传用户",
              "label":"异常",
              "width":"180"
         },{
              "prop":"上传时间",
              "label":"操作用户",
              "width":"180"
         },{
              "prop":"上传时间",
              "label":"创建时间",
              "width":"180"
         }]
      }
    },
    methods: {
      changeSel(){
          console.log(this.select)
          console.log(this.input)
      },
      clearSel(){
          this.select = ''
          this.input = ''
      },
    },
    components: {
        ToolBar,HelpHint,TableService
    }
  }
</script>