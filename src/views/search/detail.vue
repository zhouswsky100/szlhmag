<template>
    <ToolBar>
        <div>
          <el-select v-model="year" size="small" clearable placeholder="请选择年份" @change="change()" style="width: 140px">
            <el-option
                    v-for="item in $Config.nfData"
                    :label="item.label"
                    :key=" item.value"
                    :value="item.value">
            </el-option>
          </el-select>  
          <el-button :type="stat==0? 'warning':'primary '"  @click="showTab(0)">预算</el-button>
          <el-button :type="stat==1? 'warning':'primary '"  @click="showTab(1)">执行</el-button>
          <el-button :type="stat==2? 'warning':'primary '"  @click="showTab(2)">决算</el-button>
          </div>
          <div class="itme-list">
             <el-button plain  icon="el-icon-s-data">分析</el-button>
             <el-button plain  icon="el-icon-s-opportunity">预警</el-button>
             <el-button plain  icon="el-icon-document">审查报告</el-button>
          </div>
         <div class="tabs" v-if="stat=='0'">
            <el-tabs v-model="activeName" @tab-click="handleClick" >
                <el-tab-pane label="预算报告" name="first">
                    <el-table
                        v-if="tableData.tsFiles!=null"
                        border
                        v-loading="loading"
                        :data="tableData.tsFiles.data"
                        style="width: 100%">
                        <el-table-column label="标题" width="400">
                            <template slot-scope="scope">
                                  <p  @click="openPdf(scope.row)" class="cursor">{{ scope.row.tsfName }}</p>
                            </template>
                        </el-table-column>
                        
                        <el-table-column
                            prop="tsfSize"
                            label="	文件大小">
                        </el-table-column>
                        <el-table-column
                            prop="updatetime"
                            label="	上传日期">
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
                </el-tab-pane>
                <el-tab-pane label="区本级预算" name="second">
                    <div>
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt cursor" @click="goUrl('/budgetfinal')">一般公共预算 </span> 
                         <span class="ptl_100 txt">| 收入：<span   v-if="tableData.ggys!=null" class="txt">{{tableData.ggys.incomeSum}} 亿元</span> </span> 
                         <span class="txt g-pl-10"> | 支出：<span  v-if="tableData.ggys!=null" class="txt">{{tableData.ggys.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                    <table class="ctbl" border='1'>
                        <tr>
                            <td>1、 一般公共预算收入表</td>
                            <td>2、 一般公共预算收支平衡表</td>
                        </tr>
                         <tr>
                            <td>3、 一般公共预算支出表</td>
                            <td>4、一般公共预算基本支出经济科目表</td>
                        </tr>
                    </table>
                    <div class="mt-20">
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt">政府性基金预算 </span> 
                         <span class="ptl_100 txt">| 收入：<span   v-if="tableData.zfxjj!=null"  class="txt">{{tableData.zfxjj.incomeSum}} 亿元</span> </span> 
                         <span class="txt g-pl-10"> | 支出：<span  v-if="tableData.zfxjj!=null" class="txt">{{tableData.zfxjj.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                    <table class="ctbl" border='1'>
                        <tr>
                            <td>5、  政府性基金预算收支表</td>
                        </tr>
                    </table>
                    <div  class="mt-20">
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt">国有资本经营预算 </span> 
                         <span class="ptl_100 txt">| 收入：<span class="txt" v-if="tableData.gyzb!=null" >{{tableData.gyzb.incomeSum}} 亿元</span> </span> 
                         <span class="txt g-pl-10"> | 支出：<span class="txt" v-if="tableData.gyzb!=null" >{{tableData.gyzb.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                    <table class="ctbl" border='1'>
                        <tr>
                            <td>6、 国有资本经营预算收支表</td>
                        </tr>
                    </table>
                </el-tab-pane>
                <el-tab-pane label="部门预算" name="third">
                  <el-table
                        border
                        v-loading="loading"
                        :data="tableData.depts"
                        style="width: 100%">
                        <el-table-column label="部门" width="400">
                            <template slot-scope="scope">
                                  <p class="cursor" @click="openPdf(scope.row)">{{ scope.row.deptName }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="inSum"
                            label="	收入">
                        </el-table-column>
                        <el-table-column
                            prop="outSum"
                            label="	支出">
                        </el-table-column>
                       <el-table-column label="图表" width="400">
                            <template slot-scope="scope">
                                  <p class="cursor" @click="goUrl('/toDeptData',scope.row.deptId,scope.row.deptName)">图表</p>
                            </template>
                        </el-table-column>
                    </el-table>
                     <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[1, 2, 5, 10]"
                        :page-size="10"
                        :total="total2"
                        >
                    </el-pagination>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="tabs" v-if="stat=='1'">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="区本级预算" name="first">
                   <div>
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt">一般公共预算 </span> 
                         <span class="txt g-pl-10"> | 支出：<span class="txt" v-if="tableData.ggys!=null">{{perData.ggys.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                      <div>
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt">政府性基金预算 </span> 
                         <span class="ptl_100 txt">| 收入：<span class="txt"  v-if="tableData.zfxjj!=null">{{perData.zfxjj.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                      <div>
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt">国有资本经营预算 </span> 
                         <span class="ptl_100 txt">| 收入：<span class="txt"  v-if="tableData.gyzb!=null">{{perData.gyzb.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="tabs" v-if="stat=='2'">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="决算报告" name="first">
                    <el-table
                        border
                        :data="accData.tsFiles.data"
                        style="width: 100%">
                        <el-table-column label="标题" width="600"  >
                            <template slot-scope="scope">
                                <p class="cursor" > {{ scope.row.tsfName }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tsfSize"
                            label="	文件大小">
                        </el-table-column>
                        <el-table-column
                            prop="updatetime"
                            label="	上传日期">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="区本级预算" name="second">
                     <div>
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt">一般公共预算 </span> 
                         <span class="ptl_100 txt">| 收入：<span class="txt" v-if="accData.ggys!=null">{{accData.ggys.incomeSum}} 亿元</span> </span> 
                         <span class="txt g-pl-10"> | 支出：<span class="txt" v-if="accData.ggys!=null">{{accData.ggys.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                    <table class="ctbl" border='1'>
                         <tr>
                            <td>3、 一般公共预算支出表</td>
                            <td>4、一般公共预算基本支出经济科目表</td>
                        </tr>
                    </table>
                      <div>
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt">政府性基金预算 </span> 
                         <span class="ptl_100 txt">| 收入：<span class="txt" v-if="accData.zfxjj!=null">{{accData.zfxjj.incomeSum}} 亿元</span> </span> 
                         <span class="txt g-pl-10"> | 支出：<span class="txt" v-if="accData.zfxjj!=null">{{accData.zfxjj.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                    <table class="ctbl" border='1'>
                         <tr>
                            <td>3、 一般公共预算支出表</td>
                            <td>4、一般公共预算基本支出经济科目表</td>
                        </tr>
                    </table>
                      <div>
                       <div class="head">
                         <img src="../../assets/images/search/dept-icon.png" style="width: 45px; height: 45px">
                         <span class="ptxt">国有资本经营预算 </span> 
                         <span class="ptl_100 txt">| 收入：<span class="txt"  v-if="accData.gyzb!=null">{{accData.gyzb.incomeSum}} 亿元</span> </span> 
                         <span class="txt g-pl-10"> | 支出：<span class="txt" v-if="accData.gyzb!=null"> {{accData.gyzb.spendSum}} 亿元</span> </span> 
                       </div>  
                    </div>
                    <table class="ctbl" border='1'>
                         <tr>
                            <td>3、 一般公共预算支出表</td>
                            <td>4、一般公共预算基本支出经济科目表</td>
                        </tr>
                    </table>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-dialog :title="rowTitle" :visible.sync="dialogFormVisible">
            <el-table
                    border
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="指标项目"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="指标结果">
                    </el-table-column>
                </el-table>
        </el-dialog>
    </ToolBar>
</template>
<script>
import {getBudgetfinal,getPerformfinal,getAccounts} from "@/api/budget/";
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import { viewPdf} from '@/api/zhfw.js';
import store from '@/store';
    export default {
        data() {
            return {
                year: '2020',
                tableData:'',
                activeName: 'first',
                stat:0,
                currentPage:1 ,
                loading:false,
                pageNum:1,
                pageSize:10,
                total:0,
                total2:0,
                dialogFormVisible:false,
                rowTitle:'',
                perData:'',
                accData:'',
                flg:false
            }
        },
        components: {
            ToolBar
        },
        methods: {
            handleClick(){

            },
            showTab(stat){
                this.stat = stat
                if(this.stat==0){
                    this.initData();
                }else if(this.stat==1){
                    this.initPerData();
                }else{
                    this.initAccounts();
                }
            },
            goUrl(url,fjdpcode,title){
                this.$router.push({path:url, query:{ year:this.year,fjdpcode:fjdpcode,title:title }})
            },
            initData(){
                this.loading = true
                let params = {
                    pageNum:this.pageNum,
                    year:this.year,	
                    pageSize:this.pageSize,
                }
                getBudgetfinal(params).then(res => {
                    this.loading = false
                    if (res.code === 200) {
                       this.tableData = res.data;
                       this.flg =  true
                       this.total = res.data.tsFiles.data.length;
                       this.total2 =res.data.depts.length;
                    }
                });
            },
            change(){
                if(this.stat==0){
                    this.initData();
                }else if(this.stat==1){
                    this.initPerData();
                }else{
                    this.initAccounts();
                }
            },
            initPerData(){
                let params = {
                    pageNum:this.pageNum,
                    year:this.year,	
                    pageSize:this.pageSize,
                }
                getPerformfinal(params).then(res => {
                    if (res.code === 200) {
                       this.perData = res.data;
                       this.flg =  true
                    }
               });
            },
            initAccounts(){
                let params = {
                    pageNum:this.pageNum,
                    year:this.year,	
                    pageSize:this.pageSize,
                }
                getAccounts(params).then(res => {
                    if (res.code === 200) {
                       this.accData = res.data;
                       this.flg =  true

                    }
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
            showDig(data){
                this.dialogFormVisible = true;
                this.rowTitle = data.deptName
            },
            openPdf(cell) {
                viewPdf(cell.tsfId)
            },
        },
        created() {

        },
        mounted(){
            this.initData();
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

.mt-20{
    margin-top: 30px;
}
</style>
