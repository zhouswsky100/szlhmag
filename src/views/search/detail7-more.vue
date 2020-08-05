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
            <el-tab-pane label="国有资产基本情况分析">
                <div class="title"> 一、龙华区本级企业国有资产基本情况</div>
                <p>（1）本级企业国有资产基本情况</p>
                <p>（1）本级企业国有资产 (不含金融企业)国有资产效益情况</p>
                <p>（1）国有资产人工情况表</p>
                <p>（1）本级国有企业名单表</p>
            </el-tab-pane>
            <el-tab-pane label="报告报表">
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
                <el-table-column label="文件名称" width="400"  >
                    <template slot-scope="scope">
                        <p><a :href="scope.row.href" target="_blank" >{{ scope.row.nomap }}</a></p>
                    </template>
                    </el-table-column>
                    <el-table-column
                        prop="goods_use"
                        label="文件大小	">
                    </el-table-column>
                    <el-table-column
                        prop="goods_use"
                        label="上传时间">
                    </el-table-column>
                </el-table>
              </el-tab-pane>
        </el-tabs>
    </ToolBar>
</template>
<script>
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import HelpHint from '@/components/HelpHint/HelpHint.vue';
import { getHomeInit } from "@/api/search/search";
import echarts from 'echarts'
import charData from '@/moke/chart.js'
import store from '@/store';
    export default {
        data() {
            return {
                year: '',
                tableData:[],
                currentPage:1 ,
                loading:false,
                pageNum:1,
                pageSize:10,
                total:0,
                chartAllData: charData.getChatData(),
                select:''

            }
        },
        components: {
            ToolBar,HelpHint
        },
        methods: {
            initData(){
                let params = {
                    pageNum:this.pageNum,
                    year:this.year,	
                    pageSize:this.pageSize,
                }
                this.loading = true
                getHomeInit(params).then(res => {
                    this.loading = false
                    this.tableData= res.data.lists
                    this.total = res.data.pager.totalRecord
                    
                });
            },
            handleSizeChange(val){
                this.pageNum = val
                this.initData();
            },
            handleCurrentChange(val){
                console.log(val)
                this.pageNum = val
                this.initData();
            },
            changeSel(){
                this.initData();
            },
        },
        created() {

        },
        mounted(){
             this.initData()
        }
        
    }

</script>

<style scoped type="text/css" lang="less" >

a{
    color:#409eff
}
.title{
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;

}
.more{
    color: #333;
    float: right;
}
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    border: solid 1px #ddd;
    padding: 10px
}
.item{
    display: flex;
    flex-wrap: wrap;
    margin: 0;
}
.chart{
    width:500px;
    height:300px
}
</style>
