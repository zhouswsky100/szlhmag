<template>
  <div class="container">
    <h1>审计查出问题分析预警</h1>
    <el-row>
      <el-card class="box-card">
        <h2><a href="#">2017-2019年同类再次出现问题提醒</a></h2>
        <div>
          <el-table
            :data="tableData"
            border
            @row-click="test"
            style="width: 100%">
            <el-table-column
              type="index"
              :index="indexMethod"
              label="再次出现"
              width="150"
            >
            </el-table-column>
            <el-table-column v-for="(item,index) in barList"
                             :key="index"
                             :prop="item.prop"
                             :label="item.label"
                             :width="item.width">
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card class="box-card">
          <h2><a href="#">2018年审计工作报告及整改</a></h2>
          <div class="content">
            <div class="itemLeft">
              <p>正在整改数量 <span>173</span> 个</p>
              <p>审计问题总数 <span>173</span> 个</p>
            </div>
            <div class="itemRight">
              <echart :id="'chart1'" :data="op1"></echart>
            </div>
          </div>

        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <h2><a href="#">2019年绩效审计报告及整改</a></h2>
          <div class="content">
            <div class="itemLeft num">
              <p>已完成整改数 <span>29</span> 个</p>
              <p>正在整改数量 <span>24</span> 个</p>
              <p>审计问题总数 <span>53</span> 个</p>
            </div>
            <div class="itemRight">
              <echart :id="'chart2'" :data="op2"></echart>
            </div>
          </div>

        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <h2><a href="#">2019年审计问题类型分析</a></h2>
          <div class="content">
              <echart :id="'chart3'" :data="op3" style="min-height: 2.6rem"></echart>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import Echart from "@/components/Echart/Echart";

  export default {
    name: "",
    components: {
      Echart
    },
    data() {
      return {
        barList: [{
          prop: "date",
          label: "日期",
          width: "180",
        }, {
          prop: "pro",
          label: "明细问题",
        }, {
          prop: "address",
          label: "涉及单位",
        }],
        tableData: [{
          date: '2020',
          pro: '治水提质黑臭水体治理工程工期滞后',
          address: '市水务局'
        }, {
          date: '2019',
          pro: '产业用地出让计划完成率低',
          address: '深圳市规划和国土资源委员会'
        }, {
          date: '2019',
          pro: '市国资委未经批准设立创新资金',
          address: '深圳市人民政府国有资产监督管理委员会'
        }, {
          date: '2018',
          pro: '少数参保单位涉嫌违法提供挂靠参保',
          address: '深圳市社会保险基金管理局'
        }],
        op1: {
          series: [{
            name: '已完成',
            type: 'gauge',
            radius: '70%',
            center: ['50%', '57%'],
            title: {
              show: true,
              offsetCenter: [0, 0], // x, y，单位px
              rich: {},
              backgroundColor: '#0a286ca3',
              color: '#FFFFFF',
              borderRadius: 15,
              height: 40,
              width: 95,
              lineHeight: 40,
              offsetCenter: [0, '80%'],
              fontSize: 16
            },
            detail: {
              rich: {},
              offsetCenter: [0, 0],
              textStyle: {
                fontFamily: 'DS-DIGIB',
                fontSize: 34,
                color: '#36ce9b'
              },
              formatter: function (params) {
                return params + '%'
              }
            },
            //分隔线样式。
            splitLine: {
              show: false,
            },
            //刻度样式。
            axisTick: {
              show: false,
            },
            //刻度标签。
            axisLabel: {
              show: false,
            },
            //仪表盘指针。
            pointer: {
              show: false,
              //指针长度
              length: '90%',
              width: 10,
            },
            data: [{
              value: Math.round(0.74 * 100),
              name: '整改完成度',
            }
            ],
            axisLine: { // 坐标轴线
              show: true,
              lineStyle: { // 属性lineStyle控制线条样式
                width: 22,
                color: [
                  [0.74.toFixed(2), '#f73e50'],
                  [1, '#262795']
                ]
              },

            },
          }],
        },
        op2: {
          series: [{
            name: '已完成',
            type: 'gauge',
            radius: '70%',
            center: ['50%', '57%'],
            title: {
              show: true,
              offsetCenter: [0, 0], // x, y，单位px
              rich: {},
              backgroundColor: '#0a286ca3',
              color: '#FFFFFF',
              borderRadius: 15,
              height: 40,
              width: 95,
              lineHeight: 40,
              offsetCenter: [0, '80%'],
              fontSize: 16
            },
            detail: {
              rich: {},
              offsetCenter: [0, 0],
              textStyle: {
                fontFamily: 'DS-DIGIB',
                fontSize: 34,
                color: '#36ce9b'
              },
              formatter: function (params) {
                return params + '%'
              }
            },
            //分隔线样式。
            splitLine: {
              show: false,
            },
            //刻度样式。
            axisTick: {
              show: false,
            },
            //刻度标签。
            axisLabel: {
              show: false,
            },
            //仪表盘指针。
            pointer: {
              show: false,
              //指针长度
              length: '90%',
              width: 10,
            },
            data: [{
              value: Math.round(0.1 * 100),
              name: '整改完成度',
            }
            ],
            axisLine: { // 坐标轴线
              show: true,
              lineStyle: { // 属性lineStyle控制线条样式
                width: 22,
                color: [
                  [0.1.toFixed(2), '#f73e50'],
                  [1, '#262795']
                ]
              },

            },
          }],
        },
        op3: {
            color:['#3399cc','#fe787a','#ffcc00','#ff3333','#00cc66','#9a22f9','#ff6f2b','#92009c','#003eb3','#ff764d','#b0cb5a'],
            title: {
                text:'',
                left:'33%',
                top: '46%',
                textStyle: {
                    color: '#000000',
                    fontFamily:'DS-DIGIB',
                    fontSize:30
                }
            },
            legend: {
                textStyle: {
                    color: '#000000',
                    fontSize: 15,

                },
                orient: 'vertical',
                y:'center',
                right:'15%',
                icon: 'roundRect',
                data: [{"name":"专项资金:4","value":4},{"name":"政府投资项目:4","value":4}],
                formatter:'{name}个',
            },
            tooltip : {
                trigger: 'item',
                formatter: "{b}个({d}%)"
            },
            series : [
                {
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    name:'说明',
                    type:'pie',
                    radius: ['15%','65%'],
                    center: ['35%','52%','35%','55%'],
                    data:[{"name":"专项资金:4","value":4},{"name":"政府投资项目:4","value":4}],
                    roseType: 'radius',
                }
            ]
        }
      }
    },
    methods: {
      indexMethod(index) {
        return "问题" + (index + 1);
      },
      test() {
        alert(111)
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    padding: 0 .3rem;
    /*height: calc(100vh - 84px);*/

    h1 {
      height: .8rem;
      line-height: .8rem;
      font-size: .35rem;
      text-align: center;
    }

    .box-card {


      h2 {
        text-align: center;
        height: .4rem;
        line-height: .4rem;

        a {
          font-size: .3rem;
          color: #000000
        }

        a:hover {
          display: block;
          transform: scale(1.1);
          color: #00ba69;
        }
      }

      .content {
        min-height: 2.6rem;
        display: flex;

        .itemLeft {
          width: 50%;
          height: .6rem;
          line-height: .6rem;
          font-weight: bold;
          position: relative;
          top: .6rem;

          p {
            font-size: .25rem;

            span {
              color: red;
              font-size: .35rem;
              font-family: "electronicFont";
            }
          }
        }

        .itemRight {
          width: 50%;
        }
      }
    }

    .el-row:nth-of-type(2) {
      margin-top: .1rem;
    }

    .num {
      top: .4rem !important;
    }

    .el-table-column tr:hover {
      cursor: pointer;
    }
  }
</style>
