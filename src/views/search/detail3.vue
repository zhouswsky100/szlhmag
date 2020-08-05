<template>
    <ToolBar>
        <div>
            <el-select  v-model="year"  size="small" clearable placeholder="请选择年份" @change="changeSel()" style="width: 140px">
                <el-option
                        v-for="item in $Config.nfData"
                        :label="item.label"
                        :key=" item.value"
                        :value="item.value"
                        >
                </el-option>
            </el-select>  
        </div>
        <h3 class="g-mt-10">国土出让情况</h3>
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
               <el-table-column label="宗地号" width="400"  >
                <template slot-scope="scope">
                    <p><a :href="scope.row.href" target="_blank" >{{ scope.row.nomap }}</a></p>
                </template>
                </el-table-column>
                <el-table-column
                    prop="goods_use"
                    label="土地用途	">
                </el-table-column>
                  <el-table-column
                    prop="time"
                    label="时间">
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
    </ToolBar>
</template>
<script>
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import HelpHint from '@/components/HelpHint/HelpHint.vue';
import { getHomeInit } from "@/api/search/search";

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
                total:0
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

</style>
