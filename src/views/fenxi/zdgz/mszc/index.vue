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
            text: params.fnThreeTitle,
            x: 'center',
            top: '3%',
            textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'cross'},
            textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let marker = p[0].name + '<br>';
              $.each(p, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + this.data
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : suffix) + '<br>';
              });
              return marker;
            },
            confine: true
          },
          grid: options.grid,
          legend: options.legend && {
            x: 'center',
            bottom: 0,
            data: __bname__,
            textStyle: {fontSize: options.legend_fontSize},
            selected: function () {
              let o = {};
              o[__bname__[1]] = false;
              o[__bname__[2]] = false;
              return o;
            }()
          },
          toolbox: options.toolbox,
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: __year__,
              splitLine: {show: false},
              axisLine: {color: '#FFF'},
              axisLabel: {
                fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位：' + params.fnSuffix,
              nameTextStyle: {
                fontSize: options.yAxis_fontSize
              },
              axisLabel: {
                fontSize: options.yAxis_axisLabel_fontSize
              }
            },
            {
              type: 'value',
              name: '',
              axisLabel: {
                formatter: '{value}%',
                fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          series: function () {//设置数据
            let o = [];
            $.each(__data__, function (index) {
              // let j = {type: 'bar', barMaxWidth: options.barMaxWidth};
              let j = {type: 'pictorialBar', barCategoryGap: '-20%', barMaxWidth: '40%'};
              j.symbol = 'path://d="M150 50 L130 130 L170 130  Z"';
              j.itemStyle = {
                // normal: {
                //     color: function(params) {
                //         let colorList = [
                //             'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                //             'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                //             'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                //         ];
                //         return colorList[params.dataIndex];
                //     }
                // },
                normal: {color: 'rgba(29,103,182,0.6)'},
                emphasis: {opacity: 1}
              };
              if (this[basenameKey].indexOf('%') != -1) {
                j.type = 'line';
                j.yAxisIndex = 1;
                j.symbol = 'circle';
                j.symbolSize = 12;
                j.itemStyle = {
                  normal: {
                    // borderWidth: 1,
                    color: ['#00c4b3', '#ec9b5b'][index - 1],
                    // borderColor:'rgba(255,255,255,.3)',
                    shadowBlur: 2,
                    shadowColor: '#9ff3f3',
                    // shadowOffsetX: 1,
                    // shadowOffsetY: 1
                  },
                }
              }
              j['name'] = this[basenameKey];
              j['data'] = this[basevalueKey];
              o.push(j)
            });
            return o;
          }()
        },
        opt2: {
          title: [{
            text: params.fnThreeTitle,
            x: 'center',
            top: '3%',
            textStyle: options.textStyle
          }],
          tooltip: {
            trigger: 'axis',
            axisPointer: {type: 'shadow', axis: 'y'},
            formatter: function (p) {
              let marker = p[0].marker + p[0].axisValue + '<br>';
              $.each(p, function () {
                marker += '&nbsp;&nbsp;&nbsp;' + this.name + ': ' + this.data[2] + params.fnSuffix + '<br>';
              });
              return marker;
            },
            textStyle: options.tooltip_font_size,
            confine: true
          },
          legend: options.legend && {
            x: 'center',
            bottom: 0,
            width: '80%',
            textStyle: {fontSize: options.legend_fontSize},
            data: __bname__
          },
          grid: options.group ? {top: '15%', bottom: '20%', left: '18%'} : {bottom: '12%', left: '5%', right: '5%'},
          xAxis: {
            type: 'category',
            data: __year__,
            // boundaryGap: false,
            splitLine: {
              // show: true,
              lineStyle: {color: '#999', type: 'dashed'}
            },
            axisLabel: {
              fontSize: options.yAxis_axisLabel_fontSize,
            }
          },
          yAxis: {
            type: 'category',
            data: __bname__,
            name: '单位：' + params.fnSuffix,
            axisTick: {show: false},
            splitLine: {show: true, lineStyle: {color: '#999', type: 'dashed'}},//options.group
            nameTextStyle: {
              // padding:function () {
              //     if(!options.group){
              //         return [0,0,0,50]
              //     }
              // }(),
              padding: [0, 0, 0, 50],   //若写死有问题请用上面那个方式
              fontSize: options.yAxis_fontSize
            },
            axisLabel: {
              formatter: function (v) {
                return options.group ? v : '';
              },
              fontSize: options.yAxis_axisLabel_fontSize
            }
          },
          series: function () {
            let dd = [], dn = [], max;
            $.each(__data__, function () {
              $.each(this[basevalueKey], function () {
                if (this[0] == __year__.length - 1) {
                  dn.push(this[2]);
                }
              });
            });
            max = Math.max.apply(null, dn);

            $.each(__data__, function () {
              dd.push({
                name: this[basenameKey], data: this[basevalueKey], type: 'scatter', symbolSize: function (v) {
                  if (v[0] == __year__.length - 1) {  //合计数圈圈的大小
                    let n = v[2] == max ? 40 : 40 - ((max - v[2]) / (max / 18));
                    return options.group ? n : n / 2;
                  }
                  let _s = options.group ? v[2] / 2 + 15 : v[2] / 4 + 5;
                  return _s > 30 ? 30 : _s;
                }
              })
            });
            return dd;
          }()
        },
        opt3: {
          title: [{
            text: params.fnThreeTitle,
            x: 'center',
            top: '2%',
            textStyle: options.textStyle
          }],
          legend: {
            icon: 'rect',
            bottom: 0,
            data: ['支出金额(亿元)', '支出增速(%)']
          },
          radar: [
            {
              splitNumber: 4,
              center: ['50%', '52%'],
              indicator: dimensionData,
              radius: radius,
              name: {
                show: true,
                backgroundColor: '#629af4',
                padding: 5,
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            {
              splitNumber: 4,
              indicator: dimesion2,
              center: ['50%', '52%'],
              name: {
                show: false
              },
              radius: radius
            }
          ],
          //极坐标系
          polar: {
            radius: radius,
            center: ['50%', '52%'],
          },
          angleAxis: {
            axisLine: {
              show: false,
            },
          },
          radiusAxis: {
            type: 'value',
            min: min,
            max: max,
            axisLabel: {
              formatter: '',
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(238,238,238, 0.2)'
              }
            }
          },
          series: [
            {
              type: 'radar',
              radarIndex: 0,
              name: '支出增速(%)',
              data: [{
                value: data
              }],
              symbol: 'circle',
              symbolSize: 6,
              areaStyle: {
                normal: {
                  color: 'rgba(41, 86, 222, 0.6)',
                }
              },
              itemStyle: {
                normal: {
                  color: '#2956DE', //折点颜色
                  lineStyle: {
                    width: 1,
                    color: '#2956DE' //折线颜色
                  }
                }
              }
            },
            {
              name: '支出金额(亿元)',
              type: 'radar',
              radarIndex: 1,
              data: [{
                value: data2,
              }],
              symbol: 'circle',
              symbolSize: 6,
              itemStyle: {
                normal: {
                  color: '#DB4800', //折点颜色
                  lineStyle: {
                    width: 1,
                    color: '#DB4800' //折线颜色
                  }
                }
              },
              areaStyle: {
                normal: {
                  color: 'rgba(232, 116, 59, 0.8)',
                }
              }
            }]
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
