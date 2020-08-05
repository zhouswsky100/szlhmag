<template>
  <div class="container">
    <!--  导航栏  -->
    <div class="navigation">
      <a href="#" @click="drawer=true" v-show="!drawer"><i class="el-icon-menu icon"></i></a>
      <el-drawer
        title="执行分析图表导航栏"
        size="20%"
        :modal=false
        header-background="#f5f5f5"
        :visible.sync="drawer"
        :direction="direction">
        <div class="menu">
          <ul class="fir-menu">
            <li>
              <h2><a href="#ys_zx1">一、预算执行情况</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_zx1">国库支付执行情况</a></li>
                <li><a href="#ys_zx2">预算支出执行情况</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_zx3">二、一般公共预算执行情况</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_zx3">类级支出执行情况</a></li>
                <li><a href="#ys_zx4">三公经费执行分析</a></li>
                <li><a href="#ys_zx5">民生支出执行分析</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_zx6">三、政府性基金预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_zx6">政府基金收支规模</a></li>
                <li><a href="#ys_zx7">政府基金历年情况</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_zx8">四、国有资本经营预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_zx8">国资经营规模和结构</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </el-drawer>
    </div>
    <!--  数据展示  -->

    <div class="item">
      <h2>一、预算执行情况</h2>
      <el-card class="box-card" id="ys_zx1">
        <div class="content">
          <echart :id="'zx1'" :data="opt1"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_zx2">
        <div class="content">
          <echart :id="'zx2'" :data="opt2"></echart>
        </div>
        <div class="content">
          <echart :id="'zx3'" :data="opt3"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_zx3">
        <div class="content">

        </div>
      </el-card>
      <el-card class="box-card" id="ys_zx4">
        <div class="content">
          <echart :id="'zx4'" :data="opt4"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>二、一般公共预算执行情况</h2>
      <el-card class="box-card" id="ys_zx5">
        <div class="content">
          <echart :id="'zx5'" :data="opt5"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_zx6">
        <div class="content">
          <echart :id="'zx6'" :data="opt6"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_zx7">
        <div class="content">
          <echart :id="'zx7'" :data="opt7"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_zx8">
        <div class="content">
          <echart :id="'zx8'" :data="opt8"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>三、政府性基金预算</h2>
      <el-card class="box-card" id="ys_zx9">
        <div class="content">
          <echart :id="'zx9'" :data="opt9"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_zx10">
        <div class="content">
          <echart :id="'zx10'" :data="opt10"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_zx11">
        <div class="content">
          <echart :id="'zx11'" :data="opt11"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>四、国有资本经营预算</h2>
      <el-card class="box-card" id="ys_zx12">
        <div class="content">
          <echart :id="'zx12'" :data="opt12"></echart>
        </div>
      </el-card>
    </div>
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
        drawer: true,
        direction: 'rtl',
        opt1: {
          title: {
            text: '2020年龙华区国库支付系统每天执行情况',
            x: 'center',
            top: '3%',
          },
          grid: {top: '20%', bottom: '10%', left: '10%', right: '5%'},
          // toolbox: options.toolbox && options.toolbox,
          tooltip: {
            trigger: 'axis',
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              return "2020年" + p[0].name + '<br>' + p[0].marker + '执行金额:' + p[0].value + '万元';
            },
          },
          xAxis: [{
            // offset:1,
            type: 'category',
            data: ["7月11日", "7月10日", "7月9日", "7月8日", "7月7日", "7月6日", "7月5日", "7月4日", "7月3日", "7月2日",
              "7月1日", "6月30日", "6月29日", "6月28日", "6月27日", "6月26日", "6月25日", "6月24日", "6月23日", "6月22日"],
            axisLabel: {
              // fontSize: options.yAxis_axisLabel_fontSize,
              margin: 20, align: 'left',
            },
            axisTick: {show: true}
          }, {
            type: 'category',
            data: ["7月11日", "7月10日", "7月9日", "7月8日", "7月7日", "7月6日", "7月5日", "7月4日", "7月3日", "7月2日",
              "7月1日", "6月30日", "6月29日", "6月28日", "6月27日", "6月26日", "6月25日", "6月24日", "6月23日", "6月22日"],
            show: false,
          }],
          yAxis: [{
            type: 'value',
            scale: true,
            min: 0,
            offset: 1,
            name: '单位：万元',
            nameTextStyle: {
              color: '#555',
              padding: [0, 0, 0, 50],
              // fontSize: options.yAxis_fontSize
            },
            axisLabel: {
              show: true,
              color: '#555',
              // fontSize: options.yAxis_axisLabel_fontSize,
              margin: 20
            },
            splitLine: {
              lineStyle: {color: '#ccc'}
            },
            axisLine: {lineStyle: {color: '#555'}},
            axisTick: {lineStyle: {color: '#ccc'}, show: true}
          }, {
            type: 'value',
            scale: true,
            max: 100,
            min: 0,
            boundaryGap: 0,
            splitLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            axisLine: {
              lineStyle: {color: '#ccc'}    // y轴坐标轴颜色
            },
          }],
          series: [{   //网格
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)',
                borderRightWidth: '0',
                // borderColor: '#007fff'
                borderColor: '#f1f1f1'
              }
            },
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
              100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
          }, {
            type: 'line',
            smooth: true,           //折线平滑参数
            showAllSymbol: true,
            symbol: 'circle',
            // symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#3c8dbb',
              }
            },
            markPoint: {
              data: [{
                // name: '峰值',
                type: 'max',
                label: {
                  normal: {
                    position: 'top',
                    formatter: function (params) {
                      let categories = ["7月11日", "7月10日", "7月9日", "7月8日", "7月7日", "7月6日", "7月5日", "7月4日", "7月3日", "7月2日",
                        "7月1日", "6月30日", "6月29日", "6月28日", "6月27日", "6月26日", "6月25日", "6月24日", "6月23日", "6月22日"]
                      let xAxisCategories = categories[params.data.coord[0]];   //坐标点获取x轴类目名称
                      return params.value + '万元' + '（' + xAxisCategories + '' + '）';
                    },
                  }
                }
              }],
              symbol: 'pin',
              symbolSize: 25,
              symbolOffset: [0, -6],
              label: {
                color: '#FF0000',
                // fontSize: options.yAxis_fontSize
              }
            },
            data: [30446.46, 26347.6, 0, 0.01, 0.01, 68797.53, 13712.82, 27139.4, 0.04, 12.42, 5261.35, 8888.28, 8858.93, 8904.88, 7625.48, 0.19, 4.9, 2903.7, 2280.87, 11361.32],
          }],
        },
        opt2: {
          baseOption: {
            title:
              [{
                text: '龙华区国库支付系统各月支出情况',
                x: 'center',
                top: '6%',
                // textStyle: options.textStyle,
              },
                {
                  text: '单位：亿元',
                  x: '5%',
                  top: '8%',
                  textStyle: {
                    // fontSize: options.yAxis_fontSize,
                    fontWeight: 'normal'
                  }
                }
              ],
            tooltip: {
              formatter: function (data) {
                return data.value[0] + "：" + data.value[2] + "亿元";
              },
              position: "top",
              axisPointer: {type: 'shadow'},
              // textStyle: options.tooltip_font_size
            },
            grid: {top: '20%', bottom: '5%', left: '10%'},
            xAxis: {
              type: 'category',
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              },
              data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            },
            yAxis: {
              type: 'category',
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              },
              data: ["2017年", "2018年", "2019年", "2020年"],
            },
            visualMap: {
              min: 4.44,
              max: 65.9,
              calculable: true,
              orient: 'vertical',
              x: '92%',
              y: 'center'
            },
            series: [{
              type: "heatmap",
              data: [
                ["1月", "2017年", 10.57]
                , ["2月", "2017年", 4.44]
                , ["3月", "2017年", 65.9]
                , ["4月", "2017年", 9.51]
                , ["5月", "2017年", 16.93]
                , ["6月", "2017年", 57.26]
                , ["7月", "2017年", 9.57]
                , ["8月", "2017年", 21.2]
                , ["9月", "2017年", 19.31]
                , ["10月", "2017年", 15.77]
                , ["11月", "2017年", 16.98]
                , ["12月", "2017年", 51.58]
                , ["1月", "2018年", 13.09]
                , ["2月", "2018年", 14.29]
                , ["3月", "2018年", 36.58]
                , ["4月", "2018年", 13.05]
                , ["5月", "2018年", 24.3]
                , ["6月", "2018年", 30.56]
                , ["7月", "2018年", 14.75]
                , ["8月", "2018年", 13.93]
                , ["9月", "2018年", 28.6]
                , ["10月", "2018年", 25.85]
                , ["11月", "2018年", 45.69]
                , ["12月", "2018年", 22.88]
                , ["1月", "2019年", 39.84]
                , ["2月", "2019年", 12.87]
                , ["3月", "2019年", 30.05]
                , ["4月", "2019年", 17.16]
                , ["5月", "2019年", 19.84]
                , ["6月", "2019年", 41.37]
                , ["7月", "2019年", 14.83]
                , ["8月", "2019年", 25.47]
                , ["9月", "2019年", 33.74]
                , ["10月", "2019年", 22.36]
                , ["11月", "2019年", 27.28]
                , ["12月", "2019年", 25.96]
                , ["1月", "2020年", 45.94]
                , ["2月", "2020年", 11.11]
                , ["3月", "2020年", 21.49]
                , ["4月", "2020年", 25.2]
                , ["5月", "2020年", 20.59]
                , ["6月", "2020年", 30.26]
                , ["7月", "2020年", 5.24]
              ],
              label: {
                normal: {
                  // fontSize: options.yAxis_axisLabel_fontSize,
                  color: "#000",
                  show: true
                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: "10",
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }]
          }
        },
        opt3: {
          baseOption: {
            title: [
              {
                text: '龙华区国库支付系统每天支出情况',
                x: 'center',
                // textStyle: options.textStyle,
              },
              {
                text: '单位：万元',
                x: '5%',
                top: '8%',
                textStyle: {
                  // fontSize: options.yAxis_fontSize,
                  fontWeight: 'normal'
                }
              }
            ],
            tooltip: {
              formatter: function (data) {
                return data.value[0] + "：" + data.value[1] + "万元"
              },
              position: "top",
              trigger: 'item',
            },
            calendar: [{
              top: 80,
              left: 'center',
              range: '2019-7',
              orient: 'vertical',
              width: '80%',
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#204371',
                  width: 3,
                  type: 'solid'
                }
              },
              yearLabel: {
                show: true,
                nameMap: 'cn',
                textStyle: {
                  color: '#000',
                  // fontSize: options.yAxis_axisLabel_fontSize,
                }
              },
              monthLabel: {
                firstDay: 1,
                nameMap: 'cn',
                textStyle: {
                  color: '#000',
                  // fontSize: options.yAxis_axisLabel_fontSize,
                }
              },
              dayLabel: {
                firstDay: 1,
                margin: 10,
                nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                textStyle: {
                  color: '#000',
                  // fontSize: options.yAxis_axisLabel_fontSize,
                }
              },
              cellSize: 100,
            }],
            series: [{
              type: 'scatter',
              coordinateSystem: 'calendar',
              data: [
                ["2019-7-1", 1767.86]
                , ["2019-7-2", 612.57]
                , ["2019-7-3", 443.58]
                , ["2019-7-4", 914.85]
                , ["2019-7-5", 3071.4]
                , ["2019-7-6", -0.02]
                , ["2019-7-7", 0.1]
                , ["2019-7-8", 2730.33]
                , ["2019-7-9", 1772.43]
                , ["2019-7-10", 1917.3]
                , ["2019-7-11", 2599.72]
                , ["2019-7-12", 3543.02]
                , ["2019-7-13", 2.5]
                , ["2019-7-14", 1.27]
                , ["2019-7-15", 1602.4]
                , ["2019-7-16", 3956.37]
                , ["2019-7-17", 3432.32]
                , ["2019-7-18", 2417.12]
                , ["2019-7-19", 5195.26]
                , ["2019-7-20", 5195.26]
                , ["2019-7-21", 0.03]
                , ["2019-7-22", 5242.13]
                , ["2019-7-23", 2605.19]
                , ["2019-7-24", 7675.07]
                , ["2019-7-25", 4514.74]
                , ["2019-7-26", 6458.98]
                , ["2019-7-27", 6458.98]
                , ["2019-7-28", 0.06]
                , ["2019-7-29", 21851.3]
                , ["2019-7-30", 11332.99]
                , ["2019-7-31", 52667.16]
              ],
              itemStyle: {
                normal: {
                  color: function (data) {
                    return (data.value[1] < 0) ? '#F00' : '#ddb926';
                  }
                }
              },
              symbolSize: function (val) {
                val = Math.abs(val[1]) / 10000;
//                    var max = Math.max(val);
                if (val <= 40) {
                  val = val < 10 ? 10 : Math.min(val, 40);
                  return val;
                } else if (val <= 100) {
                  return 50;
                } else if (val <= 150) {
                  return 60;
                } else if (val <= 200) {
                  return 70;
                } else if (val <= 250) {
                  return 80;
                } else if (val <= 300) {
                  return 90;
                } else return 100;
              },
              label: {
                show: true,
                formatter(params) {
                  //显示日期
                  return params.value[0].split("-")[2]
                },
                offset: [40, -35],
                color: '#000'
              }
            }]
          }
        },
        opt4: {
          title: [{
            text: '龙华区预算支出执行进度情况',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let v = p[0];
              return v.name + '<br>' + v.marker + v.seriesName + (v.value || ' - ') + '%';
            }
          },
          // grid: options.grid,
          grid: {top: '15%', bottom: '15%', left: '15%'},
          legend: {
            x: 'center',
            bottom: 0,
            data: ["预算支出执行进度（截止2020年7月）"],
            // textStyle: {fontSize: options.legend_fontSize},
          },
          // toolbox: options.toolbox,
          xAxis: {
            type: 'value',
            splitLine: {show: true},
            axisLine: {color: '#FFF'},
            mix: 0,
            max: 100,
            interval: 10,
            axisLabel: {
              formatter: function (p) {
                return parseFloat(p).toFixed(0) + '%';
              },
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          },
          yAxis: {
            type: 'category',
            data: ["一般公共预算", "国有资本经营预算", "政府性基金预算"],
            axisLabel: {
              interval: 0,
              margin: 30,
              textStyle: {align: 'middle'}
            },
            name: '单位：百分比',
            nameTextStyle: {
              // fontSize: options.yAxis_fontSize
            },
            axisLabel: {
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          },
          series: function () {//设置数据
            let o = [];
            let __data__ = [{basename: "预算支出执行进度（截止2020年7月）", basevalue: [52.98, undefined, 9.25]}]
            $.each(__data__, function () {
              let j = {type: 'bar'};
              j['name'] = this["basename"];
              j['data'] = this["basevalue"];
              o.push(j)
            });
            return o;
          }()
        },
        opt5: {
          title: [{
            text: '龙华区一般公共预算类级支出对比情况(功能科目)',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let marker = p[0].name + '<br>';
              $.each(p, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + (this.data ? this.data : '');
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : suffix) + '<br>';
              });
              return marker;
            }
          },
          grid: {top: '15%', bottom: '28%', left: '10%'},
          legend: {
            x: 'center',
            bottom: 0,
            data: ["2020年截止6月", "2019年截止6月"],
            // textStyle: {fontSize: options.legend_fontSize}
          },
          // toolbox: options.toolbox,
          xAxis: [
            {
              type: 'category',
              // boundaryGap: true,
              data: ["一般公共服务", "公共安全支出", "教育支出", "科学技术支出", "文化体育与传媒支出", "社会保障和就业支出", "医疗卫生与计划生育支出", "节能环保支出", "城乡社区支出", "农林水支出", "交通运输支出", "商业服务业等支出", "金融支出", "援助其他地区支出", "国土海洋气象等支出", "住房保障支出"],
              // splitLine: {show: true},
              axisLine: {color: '#FFF'},
              axisLabel: {
                interval: 0,
                // fontSize: options.yAxis_axisLabel_fontSize,
                formatter: function (p) {
                  return p.replace(/(.{2})/g, "$1 \n");
                }
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位：亿元',
              axisTick: {show: true},
              splitLine: {show: true},
              nameTextStyle: {
                // fontSize: options.yAxis_fontSize
              },
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          series: function () {//设置数据
            let o = [];
            let __data__ = [{
              basename: "2020年截止6月",
              basevalue: [27.33, 8.13, 29.59, 6.81, 1.11, 5.53, 10.47, 0.14, 38.8, 3.09, 0.74, 0, 0, 0.04, 0.28, 4.52]
            },
              {
                basename: "2019年截止6月",
                basevalue: [21.11, 9.07, 26.27, 3.34, 4.23, 6.74, 12.17, 0.4, 28.86, 10.39, 0.34, 0, 0.01, 0.18, 0.84, 5.21]
              }]
            $.each(__data__, function () {
              let j = {type: 'bar', barMaxWidth: '40%', barGap: 0};
              j['name'] = this["basename"];
              j['data'] = this["basevalue"];
              o.push(j)
            });
            return o;
          }()
        },
        opt6: {
          title: [{
            text: '龙华区一般公共预算类级支出对比情况(功能科目)',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let marker = p[0].name + '<br>';
              $.each(p, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + (this.data ? this.data : '');
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : suffix) + '<br>';
              });
              return marker;
            }
          },
          grid: {top: '15%', bottom: '28%', left: '10%'},
          legend: {
            x: 'center',
            bottom: 0,
            data: ["2020年截止6月", "2019年截止6月"],
            // textStyle: {fontSize: options.legend_fontSize}
          },
          // toolbox: options.toolbox,
          xAxis: [
            {
              type: 'category',
              // boundaryGap: true,
              data: ["商品和服务支出", "对个人和家庭的补助", "基本建设支出", "其他资本性支出", "其他支出"],
              // splitLine: {show: true},
              axisLine: {color: '#FFF'},
              axisLabel: {
                interval: 0,
                // fontSize: options.yAxis_axisLabel_fontSize,
                formatter: function (p) {
                  return p.replace(/(.{2})/g, "$1 \n");
                }
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位：亿元',
              axisTick: {show: true},
              splitLine: {show: true},
              nameTextStyle: {
                // fontSize: options.yAxis_fontSize
              },
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          series: function () {//设置数据
            let o = [];
            let __data__ = [{basename: "2020年截止6月", basevalue: [27.33, 8.13, 29.59, 6.81, 1.11]},
              {basename: "2019年截止6月", basevalue: [21.11, 9.07, 26.27, 3.34, 4.23]}]
            $.each(__data__, function () {
              let j = {type: 'bar', barMaxWidth: '40%', barGap: 0};
              j['name'] = this["basename"];
              j['data'] = this["basevalue"];
              o.push(j)
            });
            return o;
          }()
        },
        opt7: {
          title: [{
            text: '龙华区"三公"经费支出情况',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let marker = p[0].name + '<br>';
              $.each(p, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + (this.data ? this.data : '');
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : '万元') + '<br>';
              });
              return marker;
            }
          },
          grid: {top: '15%', bottom: '20%', left: '20%'},
          legend: {
            x: 'center',
            bottom: 0,
            data: ["2020年执行数", "2020年预算数"],
            // textStyle: {fontSize: options.legend_fontSize}
          },
          // toolbox: options.toolbox,
          xAxis: {
            type: 'value',
            axisLine: {symbol: ['none', 'arrow'], symbolSize: [15, 20], symbolOffset: [0, 15]},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          },
          yAxis: [
            {
              type: 'category',
              name: '单位：万元',
              axisLine: {symbol: ['none', 'arrow'], symbolSize: [15, 20], symbolOffset: [0, 15]},
              axisTick: {show: true},
              splitLine: {show: true},
              data: ["公务接待费", "公务用车购置和运行维护费"],
              nameTextStyle: {
                // fontSize: options.yAxis_fontSize
              },
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          series: function () {//设置数据
            let o = [];
            let __data__ = [
              {basename: "2020年执行数", basevalue: [14.08, 1644.66]},
              {basename: "2020年预算数", basevalue: [227, 6801.6]},
            ]
            $.each(__data__, function () {
              let j = {
                type: 'bar', stack: '总量', barMaxWidth: '35%',
                label: {/*normal: {show: true, fontSize: options.yAxis_axisLabel_fontSize}*/}
              }
              j['name'] = this['basename'];
              j['data'] = this['basevalue'];
              if (this['basename'].endsWith('预算数')) {
                j.label = {
                  normal: {
                    show: true,
                    position: 'right',
                    formatter: function (p) {
                      return '预算数(' + p.value + '万元' + ')';
                    },
                    color: 'rgba(0,0,0,1)',
                    // fontSize: options.yAxis_axisLabel_fontSize
                  }
                };
                j.itemStyle = {
                  normal: {
                    color: '#ebebeb',
                    borderColor: 'black',
                    borderType: 'dashed',
                  }
                }
              }
              o.push(j)
            });
            return o;
          }(),
        },
        opt8: {
          title: [{
            text: '龙华区九大民生支出执行情况',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let marker = p[0].name + '<br>';
              $.each(p, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + (this.data ? this.data : '');
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : '亿元') + '<br>';
              });
              return marker;
            }
          },
          grid: {top: '15%', bottom: '15%', left: '20%'},
          legend: {
            x: 'center',
            bottom: 0,
            // textStyle: {fontSize: options.legend_fontSize},
            data: ["2020年截止6月", "2019年截止6月"]
          },
          // toolbox: options.toolbox,
          xAxis: {
            type: 'value',
            axisLine: {
              symbol: ['none', 'arrow'],
              symbolSize: [15, 20],
              symbolOffset: [0, 15]
            }
          },
          yAxis: [
            {
              type: 'category',
              name: '单位：亿元',
              axisLine: {color: '#FFF'},
              axisTick: {show: true},
              splitLine: {show: true},
              data: ["教育支出", "文化体育与传媒支出", "社会保障和就业支出", "医疗卫生与计划生育支出", "节能环保支出", "城乡社区支出", "农林水支出", "交通运输支出", "住房保障支出"],
              nameTextStyle: {
                // fontSize: options.yAxis_fontSize
              },
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          series: function () {//设置数据
            let o = [];
            let __data__ = [
              {basename: "2020年截止6月", basevalue: [29.59, 1.11, 5.53, 10.47, 0.14, 38.8, 3.09, 0.74, 4.52]},
              {basename: "2019年截止6月", basevalue: [26.27, 4.23, 6.74, 12.17, 0.4, 28.86, 10.39, 0.34, 5.21]},
            ]
            $.each(__data__, function () {
              let j = {
                type: 'bar',
                barMaxWidth: '100%',
                barGap: 0,
                label: {/*normal: {show: true, fontSize: options.yAxis_axisLabel_fontSize}*/}
              };
              j['name'] = this["basename"];
              j['data'] = this["basevalue"];
              o.push(j)
            });
            return o;
          }(),
        },
        opt9: {
          title: [{
            text: '2020年龙华区政府性基金各月执行进度情况',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }, {
            text: '单位: 百分比',
            x: '10%',
            top: '8%',
            textStyle: {
              fontWeight: 'normal',
              // fontSize: options.yAxis_fontSize
            }
          }],
          calculable: false,
          tooltip: {//提示框
            trigger: 'axis',
            // formatter:'{b}{a}:{c}%',
            formatter: function (params) {
              let index = params[0].dataIndex;
              return params[0].name + '支出执行情况' + ':' + ((target[index] + [0, 5.2, 5.61, 6.02, 6.21, 6.97, 8.53][index]).toFixed(2)) + '%';
            },
            axisPointer: {type: 'shadow'},
            // textStyle: options.tooltip_font_size
          },
          grid: {top: '15%', bottom: '20%', left: '10%'},
          legend: {
            x: 'center',
            bottom: 0,
            // textStyle: {fontSize: options.legend_fontSize} /*data:"aaa"*/
          },
          // toolbox: options.toolbox,
          axis: {},
          calculable: true,
          xAxis: [{
            type: 'value',
            axisTick: {show: true},
            splitLine: {show: true},
            axisLabel: {
              formatter: '{value} %',
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          }],
          yAxis: [{
            type: 'category',
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
            axisTick: {show: true},
            splitLine: {show: true},
            nameTextStyle: {
              // fontSize: options.yAxis_fontSize
            },
            axisLabel: {
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          }],
          series: [//设置数据
            {
              type: "bar",
              stack: "B",
              itemStyle: {
                normal: {barBorderColor: 'rgba(0,0,0,0)', color: 'rgba(0,0,0,0)'},
                emphasis: {barBorderColor: 'rgba(0,0,0,0)', color: 'rgba(0,0,0,0)'}
              },
              data: [0, 5.2, 5.61, 6.02, 6.21, 6.97, 8.53]
            }, {
              type: 'bar',
              stack: "B",
              color: '#61a0a8',
              name: "支出执行情况",
              data: [5.2, 0.41000000000000014, 0.40999999999999925, 0.1900000000000004, 0.7599999999999998, 1.5599999999999996, 0.7200000000000006]
            }
          ]
        },
        opt10: {
          title: [{
            text: '龙华区"三公"经费支出情况',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'shadow'},
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let marker = p[0].name + '<br>';
              $.each(p, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + (this.data ? this.data : '');
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : '万元') + '<br>';
              });
              return marker;
            }
          },
          grid: {top: '15%', bottom: '20%', left: '20%'},
          legend: {
            x: 'center',
            bottom: 0,
            data: ["2020年执行数", "2020年预算数"],
            // textStyle: {fontSize: options.legend_fontSize}
          },
          // toolbox: options.toolbox,
          xAxis: {
            type: 'value',
            axisLine: {symbol: ['none', 'arrow'], symbolSize: [15, 20], symbolOffset: [0, 15]},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          },
          yAxis: [
            {
              type: 'category',
              name: '单位：亿元',
              axisLine: {symbol: ['none', 'arrow'], symbolSize: [15, 20], symbolOffset: [0, 15]},
              axisTick: {show: true},
              splitLine: {show: true},
              data: ["其他支出", "城乡社区支出", '文化旅游体育与传媒支出'],
              nameTextStyle: {
                // fontSize: options.yAxis_fontSize
              },
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          series: function () {//设置数据
            let o = [];
            let __data__ = [
              {basename: "2020年执行数", basevalue: [9.6, 1.68, 0.02]},
              {basename: "2020年预算数", basevalue: [5.65, 9.13, 0]},
            ]
            $.each(__data__, function () {
              let j = {
                type: 'bar', stack: '总量', barMaxWidth: '35%',
                label: {/*normal: {show: true, fontSize: options.yAxis_axisLabel_fontSize}*/}
              }
              j['name'] = this['basename'];
              j['data'] = this['basevalue'];
              if (this['basename'].endsWith('预算数')) {
                j.label = {
                  normal: {
                    show: true,
                    position: 'right',
                    formatter: function (p) {
                      return '预算数(' + p.value + '亿元' + ')';
                    },
                    color: 'rgba(0,0,0,1)',
                    // fontSize: options.yAxis_axisLabel_fontSize
                  }
                };
                j.itemStyle = {
                  normal: {
                    color: '#ebebeb',
                    borderColor: 'black',
                    borderType: 'dashed',
                  }
                }
              }
              o.push(j)
            });
            return o;
          }(),
        },
        opt11: {
          title: [{
            text: '龙华区历年政府性基金执行进度情况',
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
              },
            },
            formatter: function (params) {
              // console.log(params);
              let marker = params[0].name + '<br>';
              $.each(params, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + this.data
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : "亿元") + '<br>';
              });
              return marker;
            }
          },
          grid: {
            containLabel: true
          },
          legend: {
            x: 'center',
            bottom: 0,
            data: [
              {name: '执行数'},
              {name: '预算数'},
              {name: '执行进度(%)'},
            ],
            selected: function () {
              let o = {};
              o["执行进度(%)"] = false;
              return o;
            }()
          },
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
              name: '单位：亿元'
            },
            {
              type: 'value',
              axisLabel: {
                formatter: '{value}%'
              }
            }
          ],
          series: [
            {
              name: '执行数',
              type: 'bar',
              data: [14.7, 29.76, 11.79],
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
              name: '预算数',
              type: 'bar',
              data: [57.57, 69.8, 127.48],
              barGap: 0,
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
              name: '执行进度(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [25.5, 42.6, 9.2],
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
        opt12: {
          title: [{
            text: '龙华区国有资本基金各月执行进度情况',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }, {
            text: '单位: 百分比',
            x: '10%',
            top: '8%',
            textStyle: {
              fontWeight: 'normal',
              // fontSize: options.yAxis_fontSize
            }
          }],
          calculable: false,
          tooltip: {//提示框
            trigger: 'axis',
            // formatter:'{b}{a}:{c}%',
            formatter: function (params) {
              let index = params[0].dataIndex;
              let value = (target[index] + interval[index]);
              return params[0].name + tipname + ':' + (value == 0 ? value : value.toFixed(2)) + '%';
            },
            axisPointer: {type: 'shadow'},
            // textStyle: options.tooltip_font_size
          },
          grid: {top: '15%', bottom: '20%', left: '10%'},
          legend:{
            x: 'center',
            bottom: 0,
            // textStyle: {fontSize: options.legend_fontSize}/*, data:__bname__*/
          },
          // toolbox: options.toolbox,
          axis: {},
          calculable: true,
          xAxis: [{
            type: 'value',
            axisTick: {show: true},
            splitLine: {show: true},
            axisLabel: {
              formatter: '{value} %',
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          }],
          yAxis: [{
            type: 'category',
            data: __bname__,
            axisTick: {show: true},
            splitLine: {show: true},
            nameTextStyle: {
              // fontSize: options.yAxis_fontSize
            },
            axisLabel: {
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          }],
          series: [//设置数据
            {
              type: "bar",
              stack: "B",
              itemStyle: {
                normal: {barBorderColor: 'rgba(0,0,0,0)', color: 'rgba(0,0,0,0)'},
                emphasis: {barBorderColor: 'rgba(0,0,0,0)', color: 'rgba(0,0,0,0)'}
              },
              data: interval
            }, {
              type: 'bar',
              stack: "B",
              color: '#61a0a8',
              barWidth: '60%',
              name: tipname,
              data: target
            }
          ]
        },
      };
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss">

  :focus {
    outline: 0;
  }

  .el-drawer__body {
    overflow: auto;
    /* overflow-x: auto; */
  }

  /*2.隐藏滚动条，太丑了*/
  .el-drawer__container ::-webkit-scrollbar {
    display: none;
  }
</style>
<style scoped lang="scss">
  .container {
    width: 100%;
    position: relative;
    /* 导航栏 */
    .navigation {

      .icon:hover {
        font-size: 1rem;
      }

      .icon {
        position: fixed;
        right: .3rem;
        bottom: 1rem;
        font-size: .9rem;
        color: #00afff;
      }

      .menu {
        .fir-menu {
          li {
            h2 {
              line-height: .6rem;
              border-bottom: 1px solid #ccc;
              padding-left: .3rem;

              a {
                font-size: .28rem;
              }
            }


          }
        }

        .sec-menu {
          li {
            line-height: .58rem;
            border-bottom: 1px dashed #ccc;
            padding-left: .6rem;
          }
        }

        a {
          color: #2b2f3a;
        }

        a:hover {
          color: #ff7e00;
        }
      }


    }

    /* 数据展示 */
    .item {
      h2 {
        text-align: center;
        color: #29b9ac;
        font-size: .4rem;
        padding: .3rem 0;
      }

      .box-card {
        margin: 0 .3rem .5rem;
        /*display: flex;*/
        h3 {
          text-align: center;
          font-size: .3rem;
        }

        .content {
          height: 7rem;
          display: flex;

          .left {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;


          }

          .center {
            flex: 4;
            position: relative;

            .top {
              background: url("~@/assets/images/arrow1.png") no-repeat 0 top;
              background-size: 100% 80%;
              width: 100%;
              height: 2rem;
              position: absolute;
              top: .8rem;
              transform: rotate(-10deg);

              p {
                position: absolute;
                transform: rotate(-5deg);
                font-size: .3rem;
                top: .8rem;
                left: 2rem;
              }
            }

            .bottom {
              background: url("~@/assets/images/relation7.png") no-repeat 0 top;
              background-size: 111% 81%;
              width: 104%;
              height: 6rem;
              position: absolute;
              top: 3.5rem;
              left: -.8rem;
              transform: rotate(10deg);

              p {
                position: absolute;
                transform: rotate(3deg);
                font-size: .3rem;
                top: 1rem;
                left: 2.5rem;
              }
            }
          }

          .right {
            flex: 2;
          }
        }

      }
    }

    /* 圆的公共样式 */
    .ys-radio {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      text-align: center;
      position: relative;
      margin: 0 auto;

      .radio {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;

        p {
          font-size: .25rem;
          color: #e6e6e6;
          padding-top: .2rem;
          font-weight: bold;
        }
      }


    }

    .left .ys-radio:nth-of-type(1) {
      background-color: #23bfff;
    }

    .right .ys-radio:nth-of-type(1) {
      background-color: #F86F8D;
      position: relative;
      top: 0;
    }

    .right .ys-radio:nth-of-type(2) {
      background-color: #24C16B;
      position: relative;
      top: 1rem;
    }

  }
</style>
