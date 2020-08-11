<template>
<div>
   <ToolBar>
        <div class="g-f-s g-mt-25">
            <el-date-picker
                v-model="year"
                type="year"
                value-format="yyyy"
                @change ="init()"
                placeholder="选择年">
            </el-date-picker>
            <p class="g-pl-20 ">预警结果:</p>
        </div>
        <div class="cont">
            <p  @click="showDig(), dialogStatus = '0'"><el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"   ></el-progress></p>
            <p  @click="showDig(), dialogStatus = '1'"><el-progress :text-inside="true" :stroke-width="20" :percentage="50"  :color="customColors"></el-progress></p>
        </div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="预算编制" name="first">
                    <div class="table">
                    <h3>一、合法性预警</h3>
                        <el-table
                           border
                            :data="yjList"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500"
                                >
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{++scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>二、合规性提醒</h3>
                        <el-table
                           border
                            :data="yjList2"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{5+scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>三、合理性提示</h3>
                        <el-table
                            border
                            :data="yjList3"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                              <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span  @click="showDetail(scope)"  style="margin-left: 10px">{{8+scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>四、风险预警</h3>
                        <el-table
                             border
                            :data="yjList4"
                            style="width: 100%">
                            <el-table-column
                                prop="data"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                           <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{16+scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="预算执行" name="second">
                    <div class="table">
                    <h3>一、执行进度预警</h3>
                        <el-table
                             border
                            :data="yjList7"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{++scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>二、异常预警</h3>
                        <el-table
                             border
                            :data="yjList8"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                          <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{6+scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>三、预算批复及公开情况预警</h3>
                        <el-table
                            border
                            :data="yjList9"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{8+scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="决算编制" name="third">
                    <div class="table">
                      <h3>一、合法性预警</h3>
                        <el-table
                            border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="200">
                            </el-table-column>
                            <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{++scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>二、合规性提醒</h3>
                        <el-table
                             border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{9+scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="zbjg"
                                label="指标结果">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="table">
                        <h3>三、合理性提示</h3>
                        <el-table
                              border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="yjzbmc"
                                    label="预警指标"
                                    width="500">
                                    <template slot-scope="scope">
                                        <span   @click="showDetail(scope)" style="margin-left: 10px">{{13+scope.$index}} {{ scope.row.yjzbmc }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="zbjg"
                                    label="指标结果">
                                </el-table-column>
                        </el-table>
                    </div>
                     <div class="table">
                        <h3>四、风险预警</h3>
                        <el-table
                             border
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="预警灯"
                                width="180">
                            </el-table-column>
                             <el-table-column
                                prop="yjzbmc"
                                label="预警指标"
                                width="500">
                                <template slot-scope="scope">
                                    <span   @click="showDetail(scope)" style="margin-left: 10px">{{22+scope.$index}} {{ scope.row.yjzbmc }}</span>
                                </template>
                             </el-table-column>
                             <el-table-column
                                prop="zbjg"
                                label="指标结果">
                             </el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-dialog :title="titleMap[dialogStatus]" :visible.sync="dialogFormVisible">
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
        <el-dialog title="预警详情" :visible.sync="dialogTableVisible">
        <table border="1" class="el-table__header">
            <tr>
                <td class="w80"> 预警目的 </td>
                <td> {{gridData.fxmd}}</td>
            </tr>
             <tr>
                <td  class="w80">预警标准 </td>
                <td> {{gridData.xtxs}}</td>
            </tr>
             <tr>
                <td  class="w80">预警依据 </td>
                <td> {{gridData.fxyj}}</td>
            </tr>
             <tr>
                <td  class="w80">预警明细 </td>
                 <td> {{gridData.jmx}}</td>

            </tr>
             <tr>
                <td  class="w80">预警示图 </td>
                <td>  
                    <div id="main"  v-show="gridData.echart=='eChart1'"></div>  
                    <div id="main2" v-show="gridData.echart=='eChart2'"></div>  
                    <div id="main3" v-show="gridData.echart=='eChart3'"></div>
                    <div id="main4" v-show="gridData.echart=='eChart4'"></div>
                    <div  v-if="gridData.echart=='default'">无示图</div>
                </td>
            </tr>
        </table>
        </el-dialog>
                       

  </ToolBar>
</div>
</template>
<script>
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import {getAlert} from '@/api/zhfw.js';
import echarts from 'echarts'
import charData from '@/moke/chart.js'
import  'echarts-liquidfill'

export default {
    data() {
        return {
            year:'2020',
            activeName: 'first',
            tableData:[],
            customColors: '#FFD700',
            dialogStatus:'0',
            dialogFormVisible:false,
            titleMap:['红色预警详情','黄色预警详情'],
            yjList:[],
            yjList2:[],
            yjList3:[],
            yjList4:[],
            yjList5:[],
            yjList6:[],
            yjList7:[],
            yjList8:[],
            yjList9:[],
            yjList10:[],
            yjList11:[],
            yjList12:[],
            dialogTableVisible:false,
            gridData:{},
            chartAllData: charData.getChatData(),
            fxmd:'',
            xtxs:'',
            fxyj:'',
            jmx:'',
            echart:'',
            tabName:'first'
        }
    },
    components: {
        ToolBar
    },
    methods: {
      showDetail(scope){
          if(this.dialogTableVisible){
                this.dialogTableVisible = false
          }else{
                 this.dialogTableVisible = true
                 this.gridData = scope.row
                 console.log(this.fxmd )
                 this.$nextTick(() => {
                   var myChart = echarts.init(document.getElementById('main'));
                   myChart.setOption(this.chartAllData.orgOption5);
                    var myChart = echarts.init(document.getElementById('main2'));
                   myChart.setOption(this.chartAllData.orgOption6);
                   var myChart = echarts.init(document.getElementById('main3'));
                   myChart.setOption(this.chartAllData.orgOption7);
                    var myChart = echarts.init(document.getElementById('main4'));
                   myChart.setOption(this.chartAllData.orgOption8);
                 });
                
             }
        
      },
      handleClick(tab, event) {
          this.tabName =  tab.name
          this.init()
      },
      showDig(){
          this.dialogFormVisible = true;
      },
      init(){
          let type
          if(this.tabName =='first'){
              type = 1
          }else if(this.tabName =='second'){
              type = 2
          }else{
               type = 3
          }
          let data = {
               type:type,
               year:this.year
           }
           getAlert(data).then(res => {
                if (res.code === 200) {
                     if(res.data.alertLists.length>0){
                         console.log(`当前类型${type}`)
                        if(type==1){
                            this.yjList = res.data.alertLists.slice(0,4);
                            this.yjList2 = res.data.alertLists.slice(5,8);
                            this.yjList3 = res.data.alertLists.slice(8,16);
                            this.yjList4 = res.data.alertLists.splice(16,20);
                      }else if(type==2){
                            this.yjList7 = res.data.alertLists.slice(0,5);
                            this.yjList8 = res.data.alertLists.slice(6,8);
                            this.yjList9 = res.data.alertLists.slice(8,11);
                     }else{
                            this.yjList10 = res.data.alertLists.slice(0,8);
                            this.yjList11 = res.data.alertLists.slice(9,12);
                            this.yjList12 = res.data.alertLists.slice(13,21);
                            this.yjList13= res.data.alertLists.splice(22,25);
 
                     }
                    }
                }
            });
      }
    },
    mounted() {
        this.init()
     
   }, 
}
</script>

<style scoped >
.table{
     margin: 20px;
}
h3{
    margin-bottom: 20px;
}
.w80{
    width: 80px;
    text-align: center;
    word-break: break-word;
    background-color: #f8f8f9;
    color: #515a6e;
    height: 40px;
    font-size: 13px
}
.cont /deep/ .el-progress-bar__outer{
    width: 400px;
    background-color: #A9A9A9;
    top: -50px;
    position: relative;
    left: 340px;
    margin-top: 10px;
}
.cont{
    height: 30px;
}
#main{
    width:100px;
    height:200px
}
#main2{
    width:300px;
    height:200px
}
#main3{
    width:150px;
    height:150px
}
#main4{
    width:150px;
    height:150px
}
td{
    border: 1px solid #dfe6ec;
}
</style>

