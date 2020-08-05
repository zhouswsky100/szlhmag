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
                    :data="tableList"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="No."
                        type="index"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="名称"
                        width="500">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="附件">
                </el-table-column>
                    <el-table-column
                        prop="address"
                        label="时间">
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[10, 20, 50, 100, 200, 500]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </ToolBar>
</template>
<script>
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import HelpHint from '@/components/HelpHint/HelpHint.vue';
import {getTaxInit,getFindTaxFiles } from "@/api/search/search";

import store from '@/store';
    export default {
        data() {
            return {
                tableList: [],
                total:0,
                pageNum:1,
                pageSize:10,
                year:''

            }
        },
        components: {
            ToolBar,HelpHint,
        },
        methods: {
          init(){
            getTaxInit().then(res => {
                if (res.code === 200) {
                    this.tableList = res.data.record
                    this.total = res.data.pager.startRecord
                }
            });
          },
          handleSizeChange(val){
            this.pageSize = val
            this.initData();
          },
          handleCurrentChange(val){
            console.log(val)
            this.pageNum = val
            this.initData();
          },
        },
        created() {

        },
        mounted(){
             this.init()
          
        }
        
    }

</script>

<style scoped type="text/css" lang="less" >

</style>
