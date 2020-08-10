<template>
    <div class="cont "  ref="parent">
        <div class="flexs">
           <!-- <div class="child " style=" flex-wrap: wrap;width:500px;flex-direction: inherit;margin-left:    0px;" v-if="ggybData.bord!=null&& stat==0"> 
                    <div class="flx" 
                        v-for= "(item,index)  in ggybData.bord" 
                        :key="index"
                        @click="getYsby2(item.code,item.name)"
                        v-if="item.sum>0"
                        style="margin-left:30px;width:100px;height: 150px;" >
                        <div  class="box bk cursor g-mt-50 cursor" :style="{ height:item.sum<50? '50px': item.sum*0.7 + 'px',width:item.sum<50? '50px': item.sum*0.7+ 'px' }">
                            <p class="boxtxt" >{{item.sum}}</p>
                        </div>
                        <p class="g-mt-10 name"   v-if="item.sum">{{item.name}}</p>
                    </div>
            </div>-->
              <div class="child " style=" align-items: center; justify-content: center;flex-direction: row;writing-mode: vertical-rl;   height: 600px; flex-wrap: wrap;width:500px;margin-left:0px;" v-if="ggybData.bord!=null &&stat==0"> 
                    <div class="flx" 
                        v-for= "(item,index)  in ggybData.bord" 
                        :key="index"
                        @click="getYsby2(item.code,item.name)"
                        v-if="item.sum>0"
                        style="margin-left:30px;width:100px;height: 150px;" >
                        <div  class="box bk cursor g-mt-50 cursor" :style="{ height:item.sum<50? '50px': item.sum*0.7 + 'px',width:item.sum<50? '50px': item.sum*0.7+ 'px' }">
                            <p class="boxtxt" >{{item.sum}}</p>
                        </div>
                        <p class="g-mt-10 name"   v-if="item.sum">{{item.name}}</p>
                    </div>
            </div>
            <div class="child" v-if="stat==0" > 
                    <div class="flx" 
                        v-for= "(item,index) in incomData.bord" 
                        :key="index"
                         v-if="item.sum>0"
                        @click="getYsby(item.code,item.name.split('、')[1]),exFlg = false,ExCode=item.code"
                        style="margin-bottom: 50px;" >
                        <div  class="box bk cursor g-mt-50 cursor"   :style="{ height:item.sum<50? '50px': item.sum*0.7 + 'px',width:item.sum<50? '50px': item.sum*0.7+ 'px' }">
                            <p class="boxtxt" >{{item.sum}}</p>
                        </div>
                        <p class="g-mt-10 name"   v-if="item.sum">{{item.name.split('、')[1]}}</p>
                    </div>
            </div>
            <div class="child" v-if="stat==1" > 
                    <div class="flx "   
                        v-for= "(item,index) in incomData.bord" 
                        :key="index"
                         v-if="item.sum>0" 
                        @click="getYsby(item.code,item.name.split('、')[1]),exFlg = false"
                        style="margin-bottom: 50px;">
                        <div class="box bk  g-mt-50 cursor" :style="{ height:item.sum<50? '50px': item.sum*0.7 + 'px',width:item.sum<50? '50px': item.sum*0.7+ 'px' }">
                            <p class="boxtxt" >{{item.sum}}</p>
                        </div>
                        <p class="g-mt-10 name"   v-if="item.sum">{{item.name}}</p>
                    </div>
            </div>
            <div class="fbox">
                <div class="boxs" style="top:110px">
                    <div class="flx " @click="showChild('本级收入合计'),type=2,exFlg = false">
                        <div class="box bk g-mt-50 cursor"  v-if="baseData.jMap!=null" :style="{ height: baseData.jMap[1][0].sum<50? '50px': baseData.jMap[1][0].sum + 'px',width:baseData.jMap[1][0].sum<50? '50px': baseData.jMap[1][0].sum + 'px' }">
                            <p class="boxtxt" >{{baseData.jMap[1][0].sum}}</p>
                        </div>
                        <p class="g-mt-10 name"  >本级收入合计</p>
                    </div>
                    <div class="flx" @click="getQueryBudgetGGYSByHTB('本级支出合计'),type=1,exFlg = false">
                        <div class="box bk g-mt-50 cursor"  v-if="baseData.jMap!=null" :style="{ height: baseData.jMap[2][1].sum<50? '50px': baseData.jMap[2][1].sum + 'px',width:baseData.jMap[2][1].sum<50? '50px': baseData.jMap[2][1].sum + 'px' }">
                            <p class="boxtxt" >{{baseData.jMap[2][1].sum}}</p>
                        </div>
                        <p class="g-mt-10 name"  >本级支出合计</p>
                    </div>
                </div>
               <p class="title">{{params.year}}一般公共预算数据关系</p>
                <div class="flx2">
                <div class="chart" id="main"></div>
                <p class="name"> 单位：亿元</p>
                </div>
                <div class="boxs" style="top:-110px">
                    <div class="flx" @click="showChild2('转移性收入'),type=2,exFlg = false">
                        <div class="box bk g-mt-50 cursor"  v-if="baseData.jMap!=null" :style="{ height: baseData.jMap[1][1].sum<50? '50px': baseData.jMap[1][1].sum + 'px',width:baseData.jMap[1][1].sum<50? '50px': baseData.jMap[1][1].sum + 'px' }">
                            <p class="boxtxt" >{{baseData.jMap[1][1].sum}}</p>
                        </div>
                        <p class="g-mt-10 name"  >转移性收入</p>
                    </div>
                    <div class="flx"  @click="getQueryBudgetGGYSByOID('转移性支出'),type=1,exFlg = false">
                        <div class="box bk g-mt-50 cursor"  v-if="baseData.jMap!=null" :style="{ height: baseData.jMap[2][1].sum<50? '50px': baseData.jMap[2][1].sum + 'px',width:baseData.jMap[2][1].sum<50? '50px': baseData.jMap[2][1].sum + 'px'}">
                            <p class="boxtxt" >{{baseData.jMap[2][1].sum}}</p>
                        </div>
                        <p class="g-mt-10 name"  >转移性支出</p>
                    </div>
                </div>
            </div>
        </div> 
        <div class="drwaerCont">
            <el-drawer
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose"
                size="30%"
                :modal='false'
                >
                <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                    <el-radio-button label="数据分析" @click="tabPosition='数据分析'">数据分析</el-radio-button>
                    <el-radio-button label="检测预警" @click="tabPosition='检测预警'">检测预警</el-radio-button>
                    <el-radio-button label="对应单位" @click="tabPosition='对应单位'">对应单位</el-radio-button>
                    <el-radio-button label="说明" @click="tabPosition='说明'">说明</el-radio-button>
                </el-radio-group>
                <div v-show="tabPosition=='数据分析'">
                    <div id="main2"></div>
                    <div class="flexs">
                        <div id="main3"></div>
                        <div id="main4"></div>
                    </div>
                </div>
                <div v-show="tabPosition=='检测预警'">
                    <p class="tabtit">{{title}}</p>
                    <el-table
                        :data="chartData.tableData"
                        style="width: 100%">
                            <el-table-column
                            prop="flag"
                            label="警示灯"
                            width="150">
                            </el-table-column>
                            <el-table-column
                            prop="cg_name"
                            label="预警指标">
                            </el-table-column>
                            <el-table-column
                            prop="result"
                            label="指标结果">
                            </el-table-column>
                    </el-table>
                </div>
                <div v-show="tabPosition=='对应单位'">
                    <p class="tabtit">{{title}}</p>
                </div>
                <div v-if="tabPosition=='说明'&&exFlg">
                    <p class="tabtit">{{title}}</p>
                    <el-tree 
                        ref="explanTree" lazy  
                        @node-click="handleNodeClick"
                       :load="initExplain"
                       :data="explainData"
                       :props="defaultProps"
                     ></el-tree>
                </div>
                <span slot="title">{{title}}</span>
            </el-drawer>     
        </div>     
    </div>
</template>
<script>
import echarts from 'echarts'
import {queryBudgetGGYSByOID,toGGYSMapPage,queryBudgetGGYSTax,queryBudgetGGYSByTID,querySubjectLevel,queryBudgetGGYSByNDTR,singleAlert,queryBudgetGGYSByHTB,queryBudgetGGYSSSByChild} from "@/api/budget/";
import  '@/assets/css/index.css' 
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import store from '@/store';
    export default {
        data() {
            return {
                baseData:{},
                tableData:[],
                incomData:{},
                ggybData:{},
                params:{
                     year:this.$route.query.year,	
                },
                child1:false,
                child2:false,
                drawer: false,
                direction: 'rtl',
                title:'本级收入合计',
                tabPosition: '数据分析',
                chartData:{
                    bord:[]
                },
                RMB:'亿元',
                stat:0,
                explainData:[],
                defaultProps: {
                    children:"children",
                    label:"name",
                    isLeaf:"leaf",
                },
                flg:true,
                type:'2',
                exFlg:false,
                ExCode:''
            }
        },
        components: {
            ToolBar
        },
        methods: {
            initData(){
                toGGYSMapPage(this.params).then(res => {
                    if (res.code === 200) {
                        this.baseData = res.data
                        this.initChart();
                    }
                });
            },
            initChart(){
                let myChart = echarts.init(document.getElementById('main'));
                let option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}亿元 ({d}%)",
                    },
                    series : [
                        {
                            name: '公共预算',
                            type: 'pie',
                            radius : '85%',
                            data:[
                                {value:this.baseData.jMap[0].incomeSum, name:'收入'+ this.baseData.jMap[0].incomeSum},
                                {value:this.baseData.jMap[0].spendSum, name:'支出' + this.baseData.jMap[0].incomeSum},
                            ],
                            label: {
                                 normal: { 
                                     show: true, 
                                     position: 'inner',
                                     textStyle:{
                                              fontSize:16
                                     }
                                 },
                            },
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option)
            },
            showChild(title){
                queryBudgetGGYSTax(this.params).then(res => {
                    if (res.code === 200) {
                        this.incomData = res.data;
                        this.stat = 0
                        this.chartData = {
                            polyline : res.data.his,
                            pie:res.data.take,
                            bord:res.data.bord,
                            tableData:res.data.alert

                        }
                        this.showDraw(title) 
                        this.initDraw()
                    }
                });
            },
            handleNodeClick(data) {
                this.initExplain(data.id,false)
            },
            showChild2(title){
                queryBudgetGGYSByTID(this.params).then(res => {
                    if (res.code === 200) {
                        this.incomData = res.data;
                        this.stat = 1
                        this.chartData = {
                            polyline : res.data.his,
                            pie:res.data.take,
                            bord:res.data.bord,
                            tableData:res.data.alert
                        }
                        this.initDraw()
                        this.showDraw(title) 
                    }
                });
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleClose(done) {
                 done();   
            },
            replace (original,target) {
                return original.replace(/^[一二三四五六七八九十]{1,3}、/,target||'').replace(/\s+/g, '');
            },
            replaceBrackets(original, target) {
                return original ? original.replace(/[\(|\（].+[\)|\）、?]/, target || '') : original
            },
            initDraw(){
                let self = this;
                let myChart = echarts.init(document.getElementById('main2'));
                let myChart2 = echarts.init(document.getElementById('main3'));
                let myChart3 = echarts.init(document.getElementById('main4'));
                let xdata = [this.chartData.polyline[0].year , this.chartData.polyline[1].year]
                myChart.setOption({
                    title: [{
                        text:this.chartData.polyline[0].year +'-'+ this.chartData.polyline[1].year+this.title,
                        x: 'center',
                        y: '8',
                        textStyle:{fontSize:16, color:'#4995b5'}
                    }],
                    tooltip: {
                        trigger: 'axis', 
                        axisPointer: {
                            type: 'cross', 
                            label: { 
                                backgroundColor: '#283b56'
                                }
                        },
                        formatter: function (a) {
                            var res = '';
                            if (a[0] && a[0].data) {
                                res += a[0].name + '年<br>';
                                res += a[0].seriesName + ': ' + a[0].value  + '亿元<br>';
                            }
                            if (a[1] && a[1].data) {
                                res += a[1].seriesName + ': ' + a[1].value + '亿元';
                            }
                            return res;
                        }
                   },
                    grid: {left: '5%', top:'22%',right: '1%', containLabel: true},
                    legend: [{x: 'center',bottom: 15,data: function () {
                            var data = [];
                            if(self.chartData.polyline[0].bSum){ data.push({name: '预算数'})}
                            if(self.chartData.polyline[0].fSum){ data.push({name: '决算数'})}
                            // if(self.chartData.polyline[0].srSum){ data.push({name: '收入完成数'})}
                            // if(self.chartData.polyline[0].zcSum){ data.push({name: '支出完成数'})}
                            return data;
                        }()}],
                    xAxis: [
                        {   type: 'category',
                            boundaryGap: true,
                            data: xdata,
                            axisTick: { show: true },
                            splitLine: {show: false},
                            axisLine: { color: '#FFF' }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            name:'单位：亿元',
                            axisTick: { show: false },
                            splitLine: {show: true}
                        }
                    ],
                    series: function () {
                        let series  = [];
                        let budgets = [], finals  = [], srComplete  = [], zcComplete  = [];
                        for(let x in self.chartData.polyline){
                            let dd = self.chartData.polyline[x];
                            if(dd){
                                budgets.push(dd.bSum ? dd.bSum : 0);
                                finals.push(dd.fSum ? dd.fSum : 0);
                                srComplete.push(dd.srSum ? dd.srSum : 0);
                                zcComplete.push(dd.zcSum ? dd.zcSum : 0);
                            }
                        }

                        dedup(budgets) && series.push({name: '预算数', type: 'bar', data: budgets, barMaxWidth: '10%'});
                        dedup(finals) && series.push({name: '决算数', type: 'bar', data: finals,  barMaxWidth: '10%'});
                        // dedup(srComplete) && series.push({name: '收入完成数', type: 'bar', data: srComplete,  barMaxWidth: '10%'});
                        // dedup(zcComplete) && series.push({name: '支出完成数', type: 'bar', data: zcComplete,  barMaxWidth: '10%'});

                        function dedup(array) {
                            return array.toString().replace(/[0,|0]/g,'');
                        }
                        return series;
                    }()
                })
                myChart2.setOption({
                        title: [{
                            text: this.title+'占收入百分比',
                            x: 'center',
                            y: '85%',
                            textStyle:{fontSize:14}
                        }],
                        tooltip: {
                            trigger: 'item',
                            formatter: function (a){
                                if(a.dataIndex==0){
                                    return a.data.name +':'+ a.data.original+'(100%)';
                                }
                                //不使用a.percent 是为了解决饼图的某一数据为负数的情况, sibling为series中自定义的参数
                                // return a.name+':'+a.value+_this.suffix+'('+a.percent+')%';
                                return a.name+':'+a.value+'万'+'('+Number(a.data.value/a.data.sibling*100).toFixed(2)+')%';
                            }
                        },
                        series: [
                            {
                                name:'',
                                type:'pie',
                                radius: ['55%', '80%'],
                                center: ['50%','45%'],
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {show: true,position: 'center', formatter: function(b){
                                        if (b.dataIndex == 1){
                                            return Number(b.data.value/b.data.sibling*100).toFixed(2)+'%';
                                        }
                                        return '';
                                        }},
                                    emphasis: {show: true, textStyle: {fontSize: '14',fontWeight: 'bold'}}
                                },
                                data:function () {
                                    if(!self.chartData.pie) return ;
                                    let xSum = self.chartData.pie.ySum - self.chartData.pie.xSum;
                                    return  [
                                        {
                                            value: xSum < 0 ? 0 : xSum,
                                            name: self.chartData.pie + '合计',
                                            original: self.chartData.pie.ySum ,
                                            itemStyle: {normal: {color: '#c9ccd2'}},
                                            label: {normal: {textStyle: {color: '#C23531'}}}
                                        },
                                        {value: self.chartData.pie.xSum, name: self.replaceBrackets(self.chartData.pie.name), sibling: self.chartData.pie.ySum}
                                    ]
                                }()
                            }
                        ]
                })
                myChart3.setOption({
                        title: [{
                            text: this.params.year+'年'+this.title+'\n'+(name.replace(/(.{10})/g, "$1 \n")),
                            x: 'center',
                            y: '85%',
                            textStyle:{  fontSize:14}
                        }],
                        tooltip: this.chartData.bord.length > 0 &&{
                            trigger: 'item',
                            formatter: '{a} {b}: {c}'+(this.RMB||'万元')+' ({d}%)'
                        },
                        series: [
                            {
                                name:'',
                                type:'pie',
                                radius: '80%',
                                center: ['50%','45%'],
                                label: {
                                    normal: {show: false, formatter: function(b){
                                            return b.data.name.replace(/(.{7})/g, "$1 \n");
                                        }}
                                },
                                data: function () {
                                    var modles = [];
                                    for (let i in self.chartData.bord) {
                                        if (!Number(self.chartData.bord[i].sum)) continue;
                                        modles.push({'value': self.chartData.bord[i].sum, 'name': self.replace(self.chartData.bord[i].name)});
                                    };
                                    return modles.length>0 ? modles : [{value:0, name:'无下级科目'}];
                                }()
                            }
                        ]
                })
            },
            refreshNodeBy(id){
                 let parentNode = this.$refs.explanTree.getNode(id);
                // 重新调用父节点的展开方法
                parentNode.loaded = false;
                parentNode.expand();
            },
            initExplain(node, resolve){
                let pid 
                let code = [[230],[101,103],[110],[ 201,202,203,204,205,206,207,208,210,211,212,213,214,215,216,217,219,220,221,222,227,232,229]]
                if(this.title=='本级收入合计'){
                   code = code[1].toString()
                }else if(this.title=='本级支出合计'){
                   code = code[3].toString()()
                }else if(this.title=='转移性收入'){ //110
                   code =  code[2].toString()
                }else if(this.title=='转移性收入'){//230
                   code =  code[0].toString()
                }else{
                   code = this.ExCode
                }
                let params ={ 
                    flag: 1 ,
                    type:this.type,//分收入和支出：其中支出1：收入2
                    code:code,
                    pid:pid
                }
                if(node!=undefined){
                   if (node.level != 0) {
                        delete params.code
                        if(node.data){
                            params.pid = node.data.id
                        }
                    } 
                }
                querySubjectLevel(params).then(res => {
                    if (res.code === 200) {
                        let rootChildren = [];
                        res.data.datalist.forEach(item => {
                            rootChildren.push({
                                name: item.label,
                                id: item.id,
                                children: []
                            });
                        }) 
                        if (resolve) {
                            resolve(rootChildren);//动态加载时
                        }else {
                            //更新节点时：
                            node.childNodes = [];
                            node.doCreateChildren(rootChildren);
                        }   
                    }
                });
            },
            getYsby(code,name){
                let params ={
                    year: this.params.year,
                    name: name,
                    code: code
                }
                queryBudgetGGYSByNDTR(params).then(res => {
                    if (res.code === 200) {
                        this.ggybData = res.data
                        let dom = this.$refs.parent
                        if(this.flg){
                            dom.style.width = dom.offsetWidth+300+'px'
                            this.flg = false;
                        }
                         this.showDraw(name) 

                    }
                });
            },
            showDraw(name){
                this.title = name
                this.drawer = true
                this.exFlg = true
            },
            getYsby2(code,name){
                 let params ={
                    year: this.params.year,
                    code: code
                }
                queryBudgetGGYSSSByChild(params).then(res => {
                    if (res.code === 200) {
                         this.chartData = {
                            polyline : res.data.his,
                            pie:res.data.take,
                            bord:res.data.bord,
                        }
                        this.getSingleAlert(code,res.data.alert.data[0].id)
                        this.showDraw(name) 
                    }
                });
            },
            getSingleAlert(bmCode,quotaId){
                let params = {
                    quotaId: quotaId,
                    bmCode: bmCode
                }
                 singleAlert(params).then(res => {
                    if (res.code === 200) {
                         this.chartData.tableData=[res.data.deptLists]
                         this.initDraw()
                    }
                });
            },
            getQueryBudgetGGYSByHTB(title){
                queryBudgetGGYSByHTB(this.params).then(res => {
                    if (res.code === 200) {
                        this.incomData = res.data;
                        this.stat = 0
                        // this.chartData = {
                        //     polyline : res.data.his,
                        //     pie:res.data.take,
                        //     bord:res.data.bord,
                        //     tableData:res.data.alert

                        // }
                        this.showDraw(title) 
                        this.initDraw()
                    }
                });
            },
            getQueryBudgetGGYSByOID(title){
                 
                queryBudgetGGYSByOID(this.params).then(res => {
                    if (res.code === 200) {
                        this.incomData = res.data;
                        this.stat = 0
                        // this.chartData = {
                        //     polyline : res.data.his,
                        //     pie:res.data.take,
                        //     bord:res.data.bord,
                        //     tableData:res.data.alert
                        // }
                        this.initDraw()
                        this.showDraw(title)
                    }
                });

            }
        },
        created() {
            
        },
        mounted(){
            this.initData();
        },
        filters: {
            calcBox: function (value) {
                if(value<50){
                    return 50
                }else{
                    return value
                }
            }
        }
    }

</script>

<style scoped>
    .fbox{
        top: -90px;
        position: relative;
        flex:1
    }
    .title{
        font-size: 22px;
        color: #282E3E;
        text-align: center;
        font-family: PingFang-SC-Medium;
        margin-top: 20px;
    }
    .flx{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition:all .4s;
        -moz-transition:all .4s;
        -webkit-transition:all .4s;
        animation: slideInLeft 1s ease-out 0s 1 forwards;
       -webkit-animation: slideInLeft 1s ease-out 0s 1 forwards;
        -o-transition:all .4s;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: bounceIn;
        z-index: 999;
    }
    
    .flx2{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        background-color: #23bfff;
        border-radius: 50%;
        box-sizing: content-box;
        color: #fff;
        
        }
    .flx :hover{
      	transform:scale(1.2);
    }
    .boxtxt{
        font-weight: bold;
        font-size: 18px;
    }
    .boxs{
        display: flex;
        justify-content: space-around;
        position: relative;
    }
    .name{
        font-size: 18px;
        color: #858DA1;
        font-family: PingFang-SC-Medium;
    }
    .chart {
        width: 400px;
        margin: 0 auto;
        height: 320px;
     }
     .cont{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow:auto;
     }
     .child{
         left: 100px;
         top:20px;
         position: relative;
         display: flex;
         flex-direction: column;
         transition:all .4s;
        -moz-transition:all .4s;
        -webkit-transition:all .4s;
        -o-transition:all .4s;
        z-index: 999;
        float: left

     }
     .child :hover{
        transform:scale(1.2);

     }
     .flexs{
        display: flex;
        width: 100%;
     }
     .drwaerCont /deep/.el-drawer__header {
        font-size: 24px;
        background-color: rgb(24, 144, 255);
        color: #fff;
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
    .drwaerCont /deep/ .el-drawer__wrapper {
       position: static;
     }
     #main2{
         width:400px;
         height: 250px;
     }
     #main3{
         width:200px;
         height: 220px;
     }
    #main4{
         width:200px;
         height: 220px;
     }
     .tabtit{
        color: #4995b5;
        text-align: center;
        padding: 10px;
        font-size: 1.3vw;
        font-weight: bold;
        margin-top: -20px;
        margin-bottom: 10px;
     }
  
</style>
