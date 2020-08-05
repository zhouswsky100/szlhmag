<template>
  <div>
    <el-card class="box-card">
      <div class="content">
        <echart :id="'yssr-1'" :data="opt1"></echart>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="content">
        <echart :id="'yssr-2'" :data="opt2"></echart>
      </div>
    </el-card>
  </div>
</template>

<script>
  import Echart from "@/components/Echart/Echart";

  export default {
    name: "index",
    components: {
      Echart
    },
    data() {
      return {
        opt1: {
          title: [{
            text: '2018年-2020年龙华区预算支出规模及增速',
            left: 'center',
          }],
          toolbox: {
            show: true,
            top: 'top',
            // right: '20%',
            feature: {

              mark: {show: true},

              dataView: {show: true, readOnly: false},

              magicType: {show: true, type: ['line', 'bar', 'stack']},

              restore: {show: true},

              saveAsImage: {show: true}

            }

          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            },
          },
          grid: {

            // left: '5%',
            //
            // right: '20%',

            containLabel: true

          },
          legend: [{
            // y: 'bottom',
            x: '22.5%',
            bottom: '18',
            // orient:'vertical',  //'horizontal'
            data: [
              {name: '一般公共预算支出（亿元）'}, {name: '政府性基金预算支出（亿元）'},
              {name: '国有资本经营预算支出（亿元）'},
            ]
          },
            {
              y: 'bottom',
              x: 'center',
              // orient:'vertical',  //'horizontal'
              data: [
                {name: '一般公共预算支出增长率(%)', icon: 'line'},
                {name: '政府性基金预算支出增长率(%)', icon: 'line'},
                {name: '国有资本预算支出增长率(%)', icon: 'line'},
              ],
              selected: {
                '一般公共预算支出增长率(%)': false,
                '政府性基金预算支出增长率(%)': false,
                '国有资本预算支出增长率(%)': false,
              }
            }
          ],
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['2018年', '2019年', '2020年'],
              axisTick: {
                show: true
              },
              splitLine: {show: false},
              axisLine: {
                color: '#FFF'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              max: 350,
              min: 0,
              interval: 50,
              axisLabel: {
                formatter: function (p) {
                  return p == 0 ? '-' : p + ".00";
                },
              },
              axisTick: {
                show: false
              },
              splitLine: {show: true},
            },
            {
              type: 'value',
              scale: true,
              max: 180,
              min: -30,
              interval: 30,
              axisLabel: {
                show: true
              },
              splitLine: {show: false},
              axisTick: {
                show: false
              }
            }
          ],
          series: [
            {
              name: '一般公共预算支出（亿元）',
              type: 'bar',
              data: [295, 278.6, 313.8],
              label: {
                normal: {
                  textStyle: {
                    color: '#FFF',
                    fontSize: 10
                  },
                  show: false,
                  position: 'inside'
                }
              },
              barMaxWidth: '20%',
            },
            {
              name: '政府性基金预算支出（亿元）',
              type: 'bar',
              data: [57.57, 69.8, 127.48],
              label: {
                normal: {
                  textStyle: {
                    color: '#FFF',
                    fontSize: 10
                  },
                  show: false,
                  position: 'inside'
                }
              },
              barMaxWidth: '20%',
              barGap: 0
            },
            {
              name: '国有资本经营预算支出（亿元）',
              type: 'bar',
              data: [0.23, 0.63, 0.75],
              label: {
                normal: {
                  textStyle: {
                    color: '#FFF',
                    fontSize: 10
                  },
                  show: false,
                  position: 'inside'
                }
              },
              barMaxWidth: '20%',
              barGap: 0
            },
            {
              name: '一般公共预算支出增长率(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [, -5.56, 12.63],
              label: {
                normal: {
                  textStyle: {
                    color: '#000',
                  },
                  show: false,
                  position: 'top',
                  formatter: function (p) {
                    return p.value + "%";
                  }
                }
              }
            }, {
              name: '政府性基金预算支出增长率(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [, 21.24, 82.64],
              label: {
                normal: {
                  textStyle: {
                    color: '#000',
                  },
                  show: false,
                  position: 'top',
                  formatter: function (p) {
                    return p.value + "%";
                  }
                }
              }
            }, {
              name: '国有资本预算支出增长率(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [, 173.91, 19.05],
              label: {
                normal: {
                  textStyle: {
                    color: '#000',
                  },
                  show: false,
                  position: 'top',
                  formatter: function (p) {
                    return p.value + "%";
                  }
                }
              }
            }
          ]
        },
        opt2: {
          title: [{
            text: '2018年-2020年龙华区一般公共预算税收收入趋势情况',
            left: 'center',
          }],
          toolbox: {
            show: true,
            top: 'top',
            // right: '20%',
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            },
          },
          grid: {

            // left: '5%',
            //
            // right: '20%',

            containLabel: true

          },
          legend: [{
            // y: 'bottom',
            x: '22.5%',
            bottom: '18',
            // orient:'vertical',  //'horizontal'
            data: [
              {name: '税收收入（亿元）'}
            ]
          },
            {
              y: 'bottom',
              x: 'center',
              // orient:'vertical',  //'horizontal'
              data: [
                {name: '税收收入增速(%)', icon: 'line'},],
              selected: {
                '税收收入增速(%)': false,
              }
            }
          ],
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['2018年', '2019年', '2020年'],
              axisTick: {
                show: true
              },
              splitLine: {show: false},
              axisLine: {
                color: '#FFF'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              max: 150,
              min: 0,
              interval: 30,
              axisLabel: {
                formatter: function (p) {
                  return p == 0 ? '-' : p + ".00";
                },
              },
              axisTick: {
                show: false
              },
              splitLine: {show: true},
            },
            {
              type: 'value',
              scale: true,
              max: 10,
              min: 0,
              interval: 2,
              axisLabel: {
                show: true
              },
              splitLine: {show: false},
              axisTick: {
                show: false
              }
            }
          ],
          series: [
            {
              name: '税收收入（亿元）',
              type: 'bar',
              data: [126.07, 137.3, 141.74],
              label: {
                normal: {
                  textStyle: {
                    color: '#FFF',
                    fontSize: 10
                  },
                  show: false,
                  position: 'inside'
                }
              },
              barMaxWidth: '20%',
            },
            {
              name: '税收收入增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [, 8.91, 3.23],
              label: {
                normal: {
                  textStyle: {
                    color: '#000',
                  },
                  show: false,
                  position: 'top',
                  formatter: function (p) {
                    return p.value + "%";
                  }
                }
              }
            },
          ]
        },
      }
    }
  }
</script>

<style scoped>
  .box-card {

    margin: 0 auto;
    margin: .3rem;
  }

  .content {
    height: 8rem;
  }
</style>
