<template>
    <ToolBar>
        <div class="title"> 龙华区2019年度国有资产管理情况</div>
        <el-tabs type="border-card">
            <el-tab-pane label="本级企业国有资产">
             <p class= " g-fz-16 more cursor" @click="goUrl()">更多</p>
             <div class="con">
                <div id="main1"   class="chart" ></div>
             </div>
             <div class="item">
                <div class="list">
                     2019年国有资产效益情况表
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="项目"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="行次"
                        width="120">
                    </el-table-column>
                    <el-table-column label="营业收入（万元）">
                        <el-table-column
                            prop="province"
                            label="2018"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            prop="city"
                            label="2019"
                            width="120">
                        </el-table-column>
                    </el-table-column>
                        <el-table-column label="利润总额（万元）">
                        <el-table-column
                            prop="province"
                            label="2018"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            prop="city"
                            label="2019"
                            width="120">
                        </el-table-column>
                    </el-table-column>
                    <el-table-column label="净利润（万元）">
                        <el-table-column
                            prop="province"
                            label="2018"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            prop="city"
                            label="2019"
                            width="120">
                        </el-table-column>
                    </el-table-column>
                      <el-table-column label="其中：国有净利润（万元）">
                        <el-table-column
                            prop="province"
                            label="2018"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            prop="city"
                            label="2019"
                            width="120">
                        </el-table-column>
                    </el-table-column>
                </el-table>
                </div>
                <div  class="list">
                      2019年龙华区国有资产情况报告
                        <el-table
                            :data="tableData"
                            style="width: 100%"
                            height="250">
                            <el-table-column
                                prop="date"
                                type="index"
                                width="150">
                            </el-table-column>
                           
                          
                        </el-table>
                </div>
             </div>
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
            goUrl(){
              this.$router.push('search/detail7-more')
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
              var myChart =  echarts.init(document.getElementById('main1'));
              myChart.setOption(this.chartAllData.orgOption4)
        }
        
    }

</script>

<style scoped type="text/css" lang="less" >

a{
    color:#409eff
}
.title{
    text-align: center;
    font-size: 24px;
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
