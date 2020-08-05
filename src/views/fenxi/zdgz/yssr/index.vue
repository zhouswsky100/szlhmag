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
    <el-card class="box-card">
      <div class="content">
        <echart :id="'yssr-3'" :data="opt3"></echart>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="content">
        <echart :id="'yssr-4'" :data="opt4"></echart>
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
        opt3: {
          title: {
            text: '2020年龙华区一般公共预算支出结构(按功能科目)',
            subtext: '单位：亿元',
            left: 'center'
          },
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
            trigger: 'item',
            formatter: '{b} : {c}亿元 ({d}%)'
          },
          legend: {
            // orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
            // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '一般公共服务支出'},
                {value: 310, name: '外交支出'},
                {value: 234, name: '国防支出'},
                {value: 135, name: '公共安全支出'},
                {value: 1548, name: '教育支出'},
                {value: 1548, name: '科学技术支出'},
                {value: 1548, name: '文化旅游体育与传媒支出'},
                {value: 1548, name: '社会保障和就业支出'},
                {value: 1548, name: '卫生健康支出'},
                {value: 1548, name: '节能环保支出'},
                {value: 1548, name: '城乡社区支出'},
                {value: 1548, name: '农林水支出'},
                {value: 1548, name: '资源勘探工业等支出'},
                {value: 1548, name: '商业服务业等支出'},
                {value: 1548, name: '金融支出'},
                {value: 1548, name: '援助其他地区支出'},
                {value: 1548, name: '自然资源海洋气象等支出'},
                {value: 1548, name: '住房保障支出'},
                {value: 1548, name: '灾害防治及应急管理支出'},
                {value: 1548, name: '预备费'},
                {value: 1548, name: '其他支出'},
                {value: 1548, name: '债务还本支出'},
                {value: 1548, name: '债务付息支出'},
                {value: 1548, name: '债务发行费用支出'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        opt4: {
          title: {
            text: '2020年龙华区一般公共预算支出结构(按经济科目)',
            subtext: '单位：亿元',
            left: 'center'
          },
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
            trigger: 'item',
            formatter: '{b} : {c}亿元 ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
            // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 36.47, name: '工资福利'},
                {value: 7.87, name: '商品和服务支出'},
                {value: 0.2, name: '对个人和家庭的补助'},
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
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
