var arrVal = [0.26]
var colorList = [];
colorList = Number(10) >= Number(2) ? '#56c274' : '#f05654';
const chartData = {
  "orgOption1": {
    title: {
      text: '2019-2020年龙华区预算支出规模及增速',
      x: 'center',
      top: '3%',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['2019', '2020']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位:亿',
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        data: [320, 332]
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '广告',
        data: [120, 132]
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '广告',
        data: [220, 182]
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '广告',
        data: [150, 232]
      },
      {
        name: '搜索引擎',
        type: 'bar',
        data: [862, 1018],
      },
      {
        name: '百度',
        type: 'bar',
        barWidth: 5,
        stack: '搜索引擎',
        data: [620, 732]
      },
      {
        name: '谷歌',
        type: 'bar',
        stack: '搜索引擎',
        data: [120, 132]
      },
      {
        name: '必应',
        type: 'bar',
        stack: '搜索引擎',
        data: [60, 72]
      },
      {
        name: '其他',
        type: 'bar',
        stack: '搜索引擎',
        data: [62, 82]
      }
    ]
  },
  "orgOption2": {
    title: {
      text: '2020年龙华区一般公共预算支出增速及占比分析',
      x: 'center',
      top: '3%',
    },
    xAxis: {},
    yAxis: {
      name: '同比增速:（%）',
    },
    series: [{
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68]
      ],
      type: 'scatter'
    }]
  },
  "orgOption3": {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    title: {
      text: '18 companies net profit and main business income (million)',
      subtext: 'By ecStat.regression',
      sublink: 'https://github.com/ecomfe/echarts-stat',
      left: 'center',
      top: 16
    },
    xAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      splitNumber: 20
    },
    yAxis: {
      type: 'value',
      min: -40,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    grid: {
      top: 90
    },
    series: [{
      name: 'scatter',
      type: 'scatter',
      emphasis: {
        label: {
          show: true,
          position: 'right',
          color: 'blue',
          fontSize: 16
        }
      },
      data: [
        [96.24, 11.35],
        [33.09, 85.11],
        [57.60, 36.61],
        [36.77, 27.26],
        [20.10, 6.72],
        [45.53, 36.37],
        [110.07, 80.13],
        [72.05, 20.88],
        [39.82, 37.15],
        [48.05, 70.50],
        [0.85, 2.57],
        [51.66, 63.70],
        [61.07, 127.13],
        [64.54, 33.59],
        [35.50, 25.01],
        [226.55, 664.02],
        [188.60, 175.31],
        [81.31, 108.68]
      ]
    }, {
      name: 'line',
      type: 'line',
      smooth: true,
      showSymbol: false,
      // data: myRegression.points,
      markPoint: {
        itemStyle: {
          color: 'transparent'
        },
        label: {
          show: true,
          position: 'left',
          // formatter: myRegression.expression,
          color: '#333',
          fontSize: 14
        },
        data: [{
          // coord: myRegression.points[myRegression.points.length - 1]
        }]
      }
    }]
  },
  "orgOption4": {
    title: {
      text: '本级企业国有资产（不含金融企业）',
      subtext: '',
      left: 'center'
  },
  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
      // orient: 'vertical',
      // top: 'middle',
      bottom: 10,
      left: 'center',
      data: ['西凉', '益州', '兖州', '荆州', '幽州']
  },
  series: [
      {
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            
              {value: 100, name: '负债',},
              {value: 510, name: '所有者权益'},
           
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
  "orgOption5": {
    title: {
        show: true,
        text:  "仪表盘",
        subtext:'预警值：10%',
        subtextStyle: {
            align: "center",
        },
        left: 400,
        bottom: 10,
        textStyle: {
            color: '#414957',
            fontSize: 24,
            align: 'center',
            fontFamily: '"Microsoft Yahei","微软雅黑"',
        },
    },
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 6.666,
        // boundaryGap: ['0', '10'],
        startAngle: 225
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: ['a', 'b', 'c'],
        z: 10
    },
    polar: {
        radius: '105%'
    },
    series: [{
            type: 'bar',
            data: [, , 5],
            z: 1,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: '警告事件',
            roundCap: true,
         
            barGap: '-100%',
        },
        {
            type: 'bar',
            data: [, , ],
            z: 2,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: '警告事件',
            roundCap: true,
            color: '#f00',
            barGap: '-100%',
        },
        {
            type: 'bar',
            data: [, , 5],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: 'C',
            roundCap: true,
            color: '#F1F3F5',
            barGap: '-100%',
        },
        {
            type: 'pie',
            labelLine: {
                show: false
            },
            z: 1,
            radius: 14,
            data: [{
                value: 5,
                itemStyle: {
                    color: 'rgba(108,116,132,0.15)',
                }
            }]
        }, {
            type: 'pie',
            labelLine: {
                show: false
            },
            z: 10,
            radius: 3,
            data: [{
                value: 100,
                itemStyle: {
                    color: '#fff',
                }
            }]
        }, {
            type: 'gauge',
            radius: '75%',
            splitNumber: 4,
            max: 5,
            detail: {
                show: false,
            },
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [0, "#DE585D"],
                        [1, "#DE585D"]
                    ],
                    width: 25,
                    opacity: 0 //刻度背景宽度
                }
            },
            "data": [{
                "name": "",
                "value": 5,
            }],
            splitLine: {
                length: 12, //长刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: "#c4c6cc"
                } //刻度节点线
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#c4c6cc",
                    width: 2
                },
                length: 5,
                splitNumber: 6
            },
            axisLabel: {
                show: false,
                color: '#333',
                fontSize: 18,
            },
            pointer: {
                show: true,
                length: '70%',
                itemStyle: {
                    color: '#DE585D',
                }
            },
        },
        {
            "type": "pie",
            radius: ['88%', '82%'],
            "hoverAnimation": false,
            startAngle: 225,
            endAngle: 0,
            "data": [{
                    "name": "",
                    "value": 5 / 5,
                    "label": {
                        show: false
                    },
                    "labelLine": {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                { //画中间的图标
                    "name": "",
                    "value": 0,
                    "label": {
                        position: 'inside',
                        backgroundColor: '#fff',
                        borderRadius: 7,
                        padding: 3,
                        borderWidth: 0,
                        borderColor: "#fff"

                    }
                }, {
                    "name": "",
                    value: 1.33 - 5/ 5,
                    "label": {
                        show: false
                    },
                    "labelLine": {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(255,255,255,0)'
                    }
                }
            ]
        }
    ],
    tooltip: {
        show: false
    },
  },
  "orgOption6" : {
    title: {
        text: '预警示图',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '债务限额'},
                {value: 310, name: '债务余额'},
              
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
  "orgOption7" :{
    title: {
        top: '33%',
        left: 'center',
        text: '剩余未发',
        textStyle: {
            color: 'rgba(0, 0, 0, 0.45)',
            fontWeight: 'normal',
            fontSize: 14
        },
        subtext: arrVal[0],
        subtextStyle: {
            color: 'rgba(0, 0, 0, 0.85)',
            fontSize: 18,
        }
    },
    series: [{
        type: 'liquidFill',
        radius: '90px',
        data: arrVal,
        color: ['#1890FF'], // 水波颜色
        label: {
            show: false
        },
        outline: {
            show: true,
            borderDistance: 1,
            itemStyle: {
                borderColor: '#1890FF',
                borderWidth: 2
            }
        },
        backgroundStyle: {
            color: '#fff' // 球内背景色
        }
    }]
  },
  "orgOption8" :{
          
    color: ['#00B6A4'],
    xAxis: [{
        type: 'value',
        position: 'bottom',
        axisLabel:{
            textStyle:{
                fontSize:16
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#d2d2d2',
                type: 'dashed',
                width: 1
            }
        }
    }],
    yAxis: [{
        type: 'category',
        data: [""],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
        //辅助x轴
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
        }
    ],
    series: [{
        name: '11',
        type: 'bar',
        barWidth: 18,
        itemStyle: {
            normal: {
                color: function (params) {
                    return colorList
                }
            }
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}天',
                textStyle : {
                    fontSize : 18
                }
            }
        },
        data: ['0天'],
    },
        //背景
        {
            name: '',
            type: 'bar',
            barWidth: 18,
            yAxisIndex: 1,
            //颜色透明度
            itemStyle: {
                normal: {
                    color: 'rgba(101, 101, 101,0.1)'
                }
            },
            markLine: {
                data: [{
                    xAxis: 10
                }],
                lineStyle: {
                    type: 'solid',
                    color: '#f05654'
                },
            },
            data: [10 * 2]
        },
    ]
}
}
export default {
  getChatData: function () {
    return chartData;
  }
}
