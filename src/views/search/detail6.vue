<template>
    <ToolBar>
      <div class="g-mb-10 ">
        <el-select v-model="select" size="small" clearable placeholder="请选择年份" @change="changeSel()" style="width: 140px">
                <el-option
                        v-for="item in $Config.nfData"
                        :label="item.label"
                        :key=" item.value"
                        :value="item.value">
                </el-option>
            </el-select> 
        </div> 
        <el-tabs type="border-card">
            <el-tab-pane label="审计工作报告及整改报告">
                <div class="g-mt-10">
                    <el-table
                        border
                        :data="tableData"
                        v-loading="loading"
                        element-loading-text="拼命加载中"
                        element-loading-spinner="el-icon-loading"
                        element-loading-background="rgba(0, 0, 0, 0.8)"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="No."
                            type="index"
                            width="100">
                        </el-table-column>
                    <el-table-column label="名称" width="400"  >
                        <template slot-scope="scope">
                            <p><a :href="scope.row.href" target="_blank" >{{ scope.row.nomap }}</a></p>
                        </template>
                        </el-table-column>
                        <el-table-column
                            prop="goods_use"
                            label="时间	">
                        </el-table-column>
                    </el-table>
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[1, 2, 5, 10]"
                            :page-size="10"
                            :total="total"
                            >
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="绩效审计报告及整改报告">
              
            </el-tab-pane>
        </el-tabs>
        
    </ToolBar>
</template>
<script>
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import { getFiscal,getSubjectName,getFnName,getNatureName } from "@/api/search/search";

import store from '@/store';
    export default {
        data() {
            return {
                select: '',
                tableData:[],
                value1: [],
                flg:true,
                total:'',

            }
        },
        components: {
            ToolBar,
        },
        methods: {
            handleSizeChange(val){
                this.pageSize = val
                this.initData();
            },
            handleCurrentChange(val){
                console.log(val)
                this.pageNum = val
                this.initData();
            },
            initData(){
                getFiscal().then(res => {
                    
                });
            },
        },
        created() {

        },
        mounted(){
            // this.initData()
          
        }
        
    }

</script>

<style scoped type="text/css" lang="less" >
.tabs{
    margin-top: 10px;
}
.head{
    display: flex;
    justify-content: flex-start;
    align-items: center
}
.ptxt{
    font-size: 20px;
    padding-left: 20px;
}
.txt{

    font-size: 15px;
    color: #868686;
}
.ptl_100{
    padding-left: 100px;
}
.ctbl{
    border: solid 1px #d8dde6;
    width: 100%;
    background-color: #fff;
    color: #666;
    border-collapse: collapse;
    border-spacing: 0;
    display: table;
    margin: 10px;
    line-height: 33px;
    td{
        padding-left: 15px;
    }
}

/deep/ .el-tabs__item {
    font-size: 16px;
}
.itme-list{
    position: relative;
    top: 20px;
    left: 70%;
}
.drwaerCont /deep/.el-drawer__header {
 font-size: 24px;
 padding-bottom: 20px;
 margin-bottom: 10px;
}
.drwaerCont /deep/ button{
    border: none;
    outline: none; 
}
.drwaerCont /deep/ .el-drawer__body {
    display: block;
    padding-left: 15px;
    margin-top: 5px;
}

.drwaerCont /deep/ .el-divider--horizontal {
    margin: 10px 0;
}

</style>
