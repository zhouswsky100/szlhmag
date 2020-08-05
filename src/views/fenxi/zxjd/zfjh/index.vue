<template>
  <div class="zfjh">
    <div class="jhLeft">
      <div class="lTitle">
        <div class="top">
          <h1>政府项目投资计划</h1>
          <div>
            <el-row>
              <el-select class="" v-model="year" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value1" placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value3" placeholder="请选择">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-button type="primary">搜索</el-button>
            </el-row>
          </div>
        </div>
        <div class="bottom">
          <div class="map">

          </div>
          <div class="item-1">
            <div class="item-1-1">
              <p><img src="~@/assets/images/zxjd/icon1.png" alt="" width="25">&nbsp;政府投资项目（包含区属项目）</p>
              <p>项目个数：<span class="total-item">671</span>个</p>
              <p>总安排年度投资：<span>146.00</span>亿元</p>
              <p>重大项目个数：<span>0</span>个</p>
            </div>
            <div class="item-1-2">
              <p><img src="~@/assets/images/zxjd/icon2.png" alt="" width="25">&nbsp;A类：<span>237</span>个</p>
              <p>安排年度投资：<span>94.51</span>亿元</p>
            </div>
            <div class="item-1-2">
              <p><img src="~@/assets/images/zxjd/icon2.png" alt="" width="25">&nbsp;B类：<span>237</span>个</p>
              <p>安排年度投资：<span>94.51</span>亿元</p>
            </div>
            <div class="item-1-2">
              <p><img src="~@/assets/images/zxjd/icon2.png" alt="" width="25">&nbsp;C类：<span>237</span>个</p>
              <p>安排年度投资：<span>94.51</span>亿元</p>
            </div>
          </div>
          <div class="item-2">
            <h3>图例</h3>
            <p class="item-number"><i></i>项目个数</p>
            <p class="item-supervise"><i></i>跟踪监督项目</p>
          </div>
          <div class="item-3">
            <h3>资金比例</h3>
            <p>小于0.2亿</p>
            <p>0.2-0.5亿</p>
            <p>0.5-1亿</p>
            <p>1-5亿</p>
            <p>大于5亿</p>
          </div>
        </div>
      </div>
    </div>
    <div class="jhright">
      <div class="chart">
        <h2><a href="#"><span>2020 观湖街道 (A类) </span>政府投资项目计划</a></h2>
        <div id="charts2_1">
          <echart :id="'charts2_1'" :data="op"></echart>
        </div>
      </div>
      <div class="chart">
        <h2><a href="#"><span>2020 观湖街道 (A类)</span>安排年度投资及占比</a></h2>
        <div id="charts2_2">
          <echart :id="'charts2_2'" :data="op1"></echart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Echart from "@/components/Echart/Echart";

  export default {
    name: "index",
    data() {
      return {
        op: {
          grid: {
            bottom: '100',
            left: '55',
            right: '10',
          },
          tooltip: {
            trigger: 'axis',
            confine: true,
            textStyle: {
              fontSize: '18',
              color: '#ffffff',
            },
            formatter: '{b}: <br />{a0}:{c0}亿元<br />{a1}: {c1}亿元'
          },

          legend: {
            x: '40%',
            y: '10%',
            textStyle: {
              color: '#000',
              fontSize: '12',
            },
            data: ['项目总投资', '已安排投资'],
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              color: '#000',
              fontSize: '11',
              rotate: 45,
            },
            data: ["专项预留", "保障住房", "党政机关", "公共安全", "农林水利治理", "医疗卫生", "城市建设", "市容环提", "征地拆迁", "教育", "文化体育", "环保及地质灾害治理", "科技及产业配套", "道路交通"]
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              fontSize: '14',
              color: '#000',
            },
            name: '单位：亿元',
            nameTextStyle: {
              fontSize: '12',
              color: '#000',
            }
          },
          series: [
            {
              name: '项目总投资',
              data: [5, 20.45, 86.86, 21.21, 184.73, 93.28, 136.84, 12.25, 2.6, 106.06, 69.91, 1.13, 89.38, 181.55],
              type: 'bar',
              itemStyle: {
                barBorderRadius: [10, 10, 0, 0],
                color: '#29c770',
              },
              barWidth: '10',
            },
            {
              name: '已安排投资',
              data: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
              type: 'bar',
              itemStyle: {
                barBorderRadius: [10, 10, 0, 0],
                color: '#f9820d',
              },
              barWidth: '10',
            },
          ]
        },
        op1: {
          color: ['#ffea68', '#60daab', '#01c9fd', '#ff8f5f', '#6fc36f', '#fc5976', '#ae74f3', '#ff7391', '#ffb759', '#4c83ff'],
          grid: {
            bottom: '0',
            right: '5'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>{d}%",
            confine: true,
            textStyle: {
              color: '#fff',
              fontSize: 18,
            }
          },
          legend: {
            orient: 'vertical',
            type: "scroll",
            x: 'right',
            top: '5%',
            // bottom: '5%',
            itemGap: 5,
            textStyle: {
              color: '#000',
              fontSize: '12',
            },
            data: ["专项预留：5亿元", "保障住房：4.97亿元", "党政机关：5.85亿元", "公共安全：4.06亿元", "农林水利治理：24.22亿元", "医疗卫生：11.08亿元", "城市建设：27.71亿元", "市容环提：9.63亿元", "征地拆迁：2.6亿元", "教育：16.74亿元", "文化体育：10.82亿元", "环保及地质灾害治理：0.34亿元", "科技及产业配套：9.64亿元", "道路交通：13.57亿元"],
          },
          series: [
            {
              type: 'pie',
              radius: ['30%', '45%'],
              center: ['28%', '50%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{"value": 5, "name": "专项预留：5亿元"}, {"value": 4.97, "name": "保障住房：4.97亿元"}, {
                "value": 5.85,
                "name": "党政机关：5.85亿元"
              }, {"value": 4.06, "name": "公共安全：4.06亿元"}, {"value": 24.22, "name": "农林水利治理：24.22亿元"}, {
                "value": 11.08,
                "name": "医疗卫生：11.08亿元"
              }, {"value": 27.71, "name": "城市建设：27.71亿元"}, {"value": 9.63, "name": "市容环提：9.63亿元"}, {
                "value": 2.6,
                "name": "征地拆迁：2.6亿元"
              }, {"value": 16.74, "name": "教育：16.74亿元"}, {"value": 10.82, "name": "文化体育：10.82亿元"}, {
                "value": 0.34,
                "name": "环保及地质灾害治理：0.34亿元"
              }, {"value": 9.64, "name": "科技及产业配套：9.64亿元"}, {"value": 13.57, "name": "道路交通：13.57亿元"}]
            }
          ]
        },
        options: [{
          value: '2020',
          label: '2020'
        }],
        options1: [{
          value: '全部',
          label: '全部'
        }, {
          value: '观湖街道',
          label: '观湖街道'
        }, {
          value: '民治街道',
          label: '民治街道'
        }, {
          value: '龙华街道',
          label: '龙华街道'
        }, {
          value: '大浪街道',
          label: '大浪街道'
        }, {
          value: '福城街道',
          label: '福城街道'
        }, {
          value: '观澜街道',
          label: '观澜街道'
        }, {
          value: '区属项目',
          label: '区属项目'
        }],
        options2: [{
          value: '专项预留',
          label: '专项预留'
        }, {
          value: '保障住房',
          label: '保障住房'
        }, {
          value: '党政机关',
          label: '党政机关'
        }, {
          value: '公共安全',
          label: '公共安全'
        }, {
          value: '农林水利治理',
          label: '农林水利治理'
        }, {
          value: '医疗卫生',
          label: '医疗卫生'
        }, {
          value: '城市建设',
          label: '城市建设'
        }, {
          value: '市容环提',
          label: '市容环提'
        }, {
          value: '征地拆迁',
          label: '征地拆迁'
        }, {
          value: '教育',
          label: '教育'
        }, {
          value: '文化体育',
          label: '文化体育'
        }, {
          value: '环保及地质灾害治理',
          label: '环保及地质灾害治理'
        }, {
          value: '科技及产业配套',
          label: '科技及产业配套'
        }, {
          value: '道路交通',
          label: '道路交通'
        }],
        options3: [{
          value: '全部',
          label: '全部'
        }, {
          value: 'A类',
          label: 'A类'
        }, {
          value: 'B类',
          label: 'B类'
        }, {
          value: 'C类',
          label: 'C类'
        }],
        year: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
      }

    },
    components: {
      Echart
    },
    mounted() {
      // 初始化echarts实例
    }
  }
</script>

<style lang="scss" scoped>
  .zfjh {
    width: 100%;
    height: calc(100vh - 84px);
    color: #ffffff;
    display: flex;

    .jhLeft {
      width: 70%;
      position: relative;
      background-image: url("~@/assets/images/zxjd/bj.png");

      .top {
        padding: .2rem;
        text-align: center;

        h1 {
          font-size: .5rem;
          padding-bottom: .1rem;
        }

        div {
          .el-select {
            width: 1.8rem;
          }
        }
      }

      .bottom {
        position: relative;

        .map {

        }

        .item-1 {
          position: absolute;
          left: .1rem;
          top: 1.5rem;

          p {
            height: .6rem;
            line-height: .6rem;
            font-size: .25rem;

            span {
              color: #ffa51f;
              font-weight: bold;
            }

            .total-item {
              color: #ff584f;
            }
          }
        }

        h3 {
          font-size: .3rem;
          padding: .1rem;
          text-align: center;
          background-color: #0094fa;
        }

        .item-2 {
          width: 2.2rem;
          position: absolute;
          right: .5rem;
          background: rgba(0, 0, 0, .5);


          p {
            height: .7rem;
            line-height: .7rem;
            display: flex;
            padding-left: .3rem;
            font-size: .22rem;
          }

          i {
            display: block;
            width: .3rem;
            height: .3rem;
            border-radius: .05rem;
            position: relative;
            top: .2rem;
            margin-right: .1rem;
          }

          .item-number {
            i {
              background-color: #ff584f;
            }
          }

          .item-supervise {
            i {
              background-color: #ffa51f;
            }
          }
        }

        .item-3 {
          width: 2.2rem;
          position: absolute;
          top: 2.2rem;
          right: .5rem;
          background: rgba(0, 0, 0, .5);
          text-align: center;

          p {
            height: .4rem;
            line-height: .4rem;
            cursor: pointer;
          }

          p:hover {
            transform: scale(1.1);
          }

          p:nth-of-type(1) {
            background-color: #93c9ea
          }

          p:nth-of-type(2) {
            background-color: #75a8e4
          }

          p:nth-of-type(3) {
            background-color: #39BAE8
          }

          p:nth-of-type(4) {
            background-color: #4472CA
          }

          p:nth-of-type(5) {
            background-color: #0000A1
          }
        }
      }
    }

    .jhright {
      width: 30%;
      background-color: #f7f7f7;

      .chart {
        width: 100%;
        height: 50%;


        h2 {
          font-size: .25rem;
          height: .6rem;
          line-height: .6rem;
          text-align: center;

          a {
            color: #000000;
          }

          a:hover {
            color: #ffa51f;
          }
        }

        #charts2_1, #charts2_2 {
          width: 100%;
          height: 4rem;
        }

      }
    }
  }


</style>
