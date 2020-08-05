<template>
    <ToolBar>
        <div>
            <el-select  v-model="year" :disabled='flg'  size="small" clearable placeholder="请选择年份" @change="getWeek()" style="width: 140px">
                <el-option
                        v-for="item in $Config.nfData"
                        :label="item.label"
                        :key=" item.value"
                        :value="item.label"
                        >
                </el-option>
            </el-select>  
            <el-button :type="stat==0? 'warning':'primary '"  @click="showTab(0)">国库支付</el-button>
            <el-button :type="stat==1? 'warning':'primary '"  @click="showTab(1),type=6">月季报</el-button>
            <el-button :type="stat==2? 'warning':'primary '"  @click="showTab(2),type=10">月通报</el-button>
        </div>
        <div class="g-mt-20">
            <el-button type="primary"  icon="el-icon-ice-cream-square" @click="showDig">筛选条件</el-button>
        </div>
        <div class="drwaerCont">
            <el-drawer
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose"
                size="80%"
                >
                <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
                    <el-form-item label="支付时间" label-width="100px" >
                        <el-date-picker
                        v-model="dateRange"
                        size="small"
                        style="width: 240px"
                        value-format="yyyy-MM-dd"
                        type="daterange"
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        ></el-date-picker>
                    </el-form-item>
                    <i class="el-icon-info" @click="tableAction" title="请不要跨年查询、未选择时间则默认查询当前年份"></i>
                    <div> 
                    <el-form-item label="单位名称" label-width="100px">
                        <el-select v-model="value1" multiple filterable placeholder="请输入关键词" style="width:400px" @change="getTwoList()"> 
                            <el-option
                                v-for="(item,index) in fiscalList"
                                :key="index"
                                :label="item.name"
                                :value="item.code">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    </div>
                    <div>
                    <el-form-item label="经济科目名称" label-width="100px">
                         <el-select v-model="value2" multiple placeholder="请选择" @change="getTwoList()">
                            <el-option
                                v-for="(item,index) in subjectList"
                                :key="index"
                                :label="item.name"
                                :value="item.code">
                            </el-option>
                       </el-select>
                       <el-select v-model="value2_1" multiple placeholder="请选择">
                            <el-option
                                v-for="(item,index)  in subjectList2"
                                :key="index"
                                :label="item.name"
                                :value="item.code">
                            </el-option>
                       </el-select>
                    </el-form-item>
                    </div> 
                    <div>
                    <el-form-item label="功能科目名称" label-width="100px">
                          <el-select v-model="value3" multiple placeholder="请选择" @change="getTwoList2()" >
                            <el-option
                                v-for="(item,index) in fnList"
                                :key="index"
                                :label="item.name"
                                :value="item.code">
                            </el-option>
                          </el-select>
                          <el-select v-model="value3_1" multiple placeholder="请选择" @change="getTwoList3()">
                            <el-option
                                v-for="(item,index)  in fnList2"
                                :key="index"
                                :label="item.name"
                                :value="item.code">
                            </el-option>
                          </el-select>
                           <el-select v-model="value3_2" multiple placeholder="请选择">
                            <el-option
                                v-for="(item,index)  in fnList3"
                                :key="index"
                                :label="item.name"
                                :value="item.code">
                            </el-option>
                          </el-select>
                    </el-form-item>
                    </div>
                    <div>
                    <el-form-item label="资金性质名称" label-width="100px">
                        <el-select v-model="value4" multiple placeholder="请选择">
                            <el-option
                                v-for="(item,index) in natureList"
                                :key="index"
                                :label="item.name"
                                :value="item.code">
                            </el-option>
                        </el-select>
                        <!--<el-select v-model="value4_1" multiple placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>-->
                        
                    </el-form-item>
                    </div>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search"    @click="handleQuery">搜索</el-button>
                        <el-button icon="el-icon-refresh" type="info" @click="resetQuery">重置</el-button>
                    </el-form-item>
                </el-form> 
                <span slot="title">筛选条件</span>
            </el-drawer>     
        </div>
        <div class="g-mt-20">
            <TableService   :tableData="tableData" :tableItemList="tableItemList" :flg='false' :loading='loading'  :total="total" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"> </TableService>
        </div>
    </ToolBar>
</template>
<script>
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import HelpHint from '@/components/HelpHint/HelpHint.vue';
import TableService from '@/components/TableService/tableService.vue';
import { getFiscal,getSubjectName,getFnName,getNatureName,getInitFiscal,getTwoSubjectName,getTwoFnName,getThreeFnName,getlistFiles} from "@/api/search/search";
import store from '@/store';
    export default {
        data() {
            return {
                select: '',
                tableData:[],
                loading:true,
                stat:0,
                dateRange:'',
                queryParams:{
                    dw:'',
                    jj:'',
                    gn:'',
                    zc:'',
                },
                drawer: false,
                direction: 'ttb',
                tableItemList:[],
                tableItem1:[
                   {
                        "prop":"enName",
                        "label":"单位名称",
                        "width":"200"
                    },{
                        "prop":"enName",
                        "label":"处室名称",
                        "width":"180"
                    },{
                        "prop":"bsiName",
                        "label":"经济科目名称",
                        "width":"180"
                    },{
                        "prop":"bsName",
                        "label":"功能科目名称",
                        "width":"180"
                    },{
                        "prop":"blName",
                        "label":"指标来源名称",
                        "width":"180"
                    },{
                        "prop":"mkName",
                        "label":"资金性质名称",
                        "width":"180"
                    },{
                        "prop":"bpName",
                        "label":"指标类型名称",
                        "width":"180"
                    },{
                        "prop":"smName",
                        "label":"预算项目名称",
                        "width":"180"
                    },{
                        "prop":"clearDate",
                        "label":"支付时间",
                        "width":"180"
                    },{
                        "prop":"clearMoney",
                        "label":"清算金额",
                        "width":"180"
                    },{
                        "prop":"remark",
                        "label":"摘要",
                        "width":"180"
                    },{
                        "prop":"payeeAccountName",
                        "label":"收款名称",
                        "width":"180"
                    },{
                        "prop":"payeeAccountNo",
                        "label":"收款账户",
                        "width":"180"
                    },{
                        "prop":"payeeAccountBank",
                        "label":"收款银行",
                        "width":"180"
                    },{
                        "prop":"smName",
                        "label":"指标用途",
                        "width":"180"
                    },{
                        "prop":"budgetFileName",
                        "label":"指标文号",
                        "width":"180"
                    }
                ],
                tableItem2:[
                   {
                        "prop":"名称",
                        "label":"名称",
                        "width":"500px"
                    },{
                        "prop":"附件",
                        "label":"附件",
                        "width":"300px"
                    },{
                        "prop":"时间",
                        "label":"时间",
                        "width":"300px"
                    }
                ],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value1: [],
                value2: [],
                value2_1: [],
                value3: [],
                value3_1: [],
                value3_2: [],
                value4: [],
                value4_1: [],
                flg:true,
                queryInfo:{
                    pageNum:1,
                    pageSize:10,
                },
                fiscalList:[],
                subjectList:[],
                subjectList2:[],
                fnList:[],
                fnList2:[],
                fnList3:[],
                natureList:[],
                type:[],
                year:'',
                total:0
            }
        },
        components: {
            ToolBar,HelpHint,TableService
        },
        methods: {
            initData(params,flg){
                this.loading = true
                if(flg){
                      params = this.queryInfo
                }
                getInitFiscal(params).then(res => {
                    if (res.code === 200) {
                       this.tableData  = res.data.toList;
                       this.total  = res.data.pager.totalRecord
                       this.loading = false;
                    }
               });
            },
            getWeek(){
                  this.loading = true
                  let params = {
                      type:this.type,
                      year:this.year
                  }
                  getlistFiles(params).then(res => {
                    if (res.code === 200) {
                       this.tableData  = res.data.toList;
                       this.loading = false;
                    }
               });

            },
            getSearchList(){
                getFiscal().then(res => {
                    if (res.code === 200) {
                       this.fiscalList = res.data;
                    }
               });
                getSubjectName().then(res => {
                        if (res.code === 200) {
                        this.subjectList = res.data;
                        }
                });
                getFnName().then(res => {
                    if (res.code === 200) {
                        this.fnList  = res.data;
                    }
                });
                getNatureName().then(res => {
                    if (res.code === 200) {
                        this.natureList  = res.data;
                    }
                });
            },
            getTwoList(){
                this.value1 
                let params  = {
                   'codes': this.value2.concat(this.value1).join(",")
                }
                getTwoSubjectName(params).then(res => {
                    if (res.code === 200) {
                        this.subjectList2 = res.data;
                    }
                });
            },
            getTwoList2(){
                this.value1 
                let params  = {
                   'codes': this.value3.concat(this.value1,this.value2).join(",")
                }
                getTwoFnName(params).then(res => {
                    if (res.code === 200) {
                        this.fnList2 = res.data;
                    }
                });
            },
            getTwoList3(){
                this.value1 
                let params  = {
                   'codes': this.value3_1.concat(this.value1,this.value2,this.value3).join(",")
                }
                getThreeFnName(params).then(res => {
                    if (res.code === 200) {
                        this.fnList3 = res.data;
                    }
                });
            },
            showTab(stat){
                this.stat = stat
                this.showTable()
            },
            showTable(){
                if( this.stat==0){
                     this.flg  = true
                     this.tableItemList = this.tableItem1
                }else{
                     this.flg  = false
                     this.tableItemList = this.tableItem2
                     this.getWeek()
                }
            },
            handleClose(done) {
               done();   
            },
            showDig(){
               this.drawer = true
            },
            handleQuery(){
              let params ={
                    'enCodes' :       this.value1.join(","),
                    'bsiCodes' :      this.value2.join(","),
                    'bsiCodes2' :     this.value2_1.join(","),
                    'bsCodes' :       this.value3.join(","),
                    'bsCodes2' :      this.value3_1.join(","),
                    'bsCodes3' :      this.value3_2.join(","),
                    'mkCodes' :       this.value4.join(","),
                    'payDateStart' :  this.dateRange[0],
                    'payDateEnd' :    this.dateRange[1]
              }
              this.initData(params,false)
            },
            resetQuery(){
                this.value1 = []
                this.value2 = []
                this.value2_1 = []
                this.value3 = []
                this.value3_1 = []
                this.value3_2 = []
                this.value4 = []
                this.value4_1 = []
                this.dateRange=''

            },
            handleSizeChange(val) {
                this.queryInfo.pageSize = val
                this.initData('',true)
            },
            handleCurrentChange(val) {
                this.queryInfo.pageNum = val
                this.initData('',true)
            },
            tableAction(){
                this.$message({
                    showClose: true,
                    message: '请不要跨年查询、未选择时间则默认查询当前年份'
              });
            },
        },
        created() {

        },
        mounted(){
             this.showTable() ;
             this.initData('',true) ;
             this.getSearchList() ;
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
.drwaerCont /deep/ .el-drawer {
    height:80%;
    overflow:scroll
}

</style>
