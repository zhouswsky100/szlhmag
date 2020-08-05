<template>
  <div class="container">
    <!--  导航栏  -->
    <div class="navigation">
      <a href="#" @click="drawer=true" v-show="!drawer"><i class="el-icon-menu icon"></i></a>
      <el-drawer
        title="预算分析图表导航栏"
        size="20%"
        :modal=false
        header-background="#f5f5f5"
        :visible.sync="drawer"
        :direction="direction">
        <div class="menu">
          <ul class="fir-menu">
            <li>
              <h2><a href="#ys_ca1">一、预算总体情况</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_ca1">全口径预算统筹关系分析</a></li>
                <li><a href="#ys_ca2">三本预算支付情况</a></li>
                <li><a href="#ys_ca3">收支规模分析</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_ca4">二、一般公共预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_ca4">一般公共预算规模和结构分析</a></li>
                <li><a href="#ys_ca5">支出增速和占比分析</a></li>
                <li><a href="#ys_ca6">三公经费分析</a></li>
                <li><a href="#ys_ca7">民生支出结构分析</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_ca8">三、政府性基金预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_ca8">政府性基金收支规模分析</a></li>
                <li><a href="#ys_ca9">国土基金收支分析</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_ca10">四、国有资本经营预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_ca10">国资经营预算规模和结构分析</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_ca11">五、部门预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_ca11">各月执行情况</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_ca12">六、政府投资项目</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_ca12">政府投资项目计划结构情况</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </el-drawer>
    </div>
    <!--  数据展示  -->

    <div class="item">
      <h2>一、预算总体情况</h2>
      <el-card class="box-card" id="ys_ca1">
        <h3>2020年龙华区全口径预算统筹关系</h3>
        <div class="content">
          <div class="left">
            <div class="ys-radio">
              <div class="radio">
                <h3>一般公共预算</h3>
                <p>总收支：314亿元</p>
              </div>

            </div>
          </div>
          <div class="center">
            <div class="top">
              <p>政府性基金调入0亿</p>
            </div>
            <div class="bottom">
              <p>0亿用于保障及改善民生</p>
            </div>
          </div>
          <div class="right">
            <div class="ys-radio">
              <div class="radio">
                <h3>政府性基金预算</h3>
                <p>总收支：127.48亿元</p>
              </div>

            </div>
            <div class="ys-radio">
              <div class="radio">
                <h3>国有资本经营预算</h3>
                <p>总收支：0.75亿元</p>
              </div>

            </div>
          </div>
        </div>


      </el-card>
      <el-card class="box-card" id="ys_ca2">
        <div class="content">
          <echart :id="'ys2'" :data="opt2"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca3">
        <div class="content">
          <echart :id="'ys3'" :data="opt3"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>二、一般公共预算</h2>
      <el-card class="box-card" id="ys_ca4">
        <div class="content">
          <echart :id="'ys4'" :data="opt4"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca5">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column label="2018-2020年龙华区一般公共预算收入结构分析">
            <el-table-column
              prop="date"
              label="年份"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="税收收入(a)">
            </el-table-column>
            <el-table-column
              prop="province"
              label="非税收收入(b)">
            </el-table-column>
            <el-table-column
              prop="city"
              label="合计(c)">
            </el-table-column>
            <el-table-column
              prop="address"
              label="税收占比%(a/c*100)">
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-card>
      <el-card class="box-card" id="ys_ca6">
        <div class="content">
          <echart :id="'ys5'" :data="opt5"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca7">
        <h3>2020年龙华区一般公共预算收入结构情况</h3>
        <b>单位:亿元</b>
        <div class="srjg">
          <h3>税收收入占比95.42%</h3>
          <h3>非税收入占比4.58%</h3>
        </div>
        <div class="content">
          <div class="left">
            <echart :id="'ys6'" :data="opt6"></echart>
          </div>
          <div class="right">
            <echart :id="'ys7'" :data="opt7"></echart>
          </div>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca8">
        <div class="content">
          <echart :id="'ys8'" :data="opt8"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca9">
        <div class="content">
          <echart :id="'ys9'" :data="opt9"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca10">
        <div class="content">
          <echart :id="'ys10'" :data="opt10"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca11">
        <div class="content">
          <echart :id="'ys11'" :data="opt11"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca12">
        <div class="content">
          <echart :id="'ys12'" :data="opt12"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca13">
        <div class="content">
          <echart :id="'ys13'" :data="opt13"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca14">
        <div class="content">
          <echart :id="'ys14'" :data="opt14"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>三、政府性基金预算</h2>
      <el-card class="box-card" id="ys_ca15">
        <div class="content">
          <echart :id="'ys15'" :data="opt15"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca16">
        <div class="content">
          <echart :id="'ys16'" :data="opt16"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>四、国有资本经营预算</h2>
      <el-card class="box-card" id="ys_ca17">
        <div class="content">
          <echart :id="'ys17'" :data="opt17"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca18">
        <div class="content">
          <echart :id="'ys18'" :data="opt18"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca19">
        <div class="content">
          <echart :id="'ys19'" :data="opt19"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>五、部门预算</h2>
      <el-card class="box-card" id="ys_ca20">
        <div class="content">
          <echart :id="'ys20'" :data="opt20"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca21">
        <div class="content">
          <echart :id="'ys21'" :data="opt21"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca22">
        <div class="content">
          <echart :id="'ys22'" :data="opt22"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca23">
        <div class="content">
          <echart :id="'ys23'" :data="opt23"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>六、政府投资项目</h2>
      <el-card class="box-card" id="ys_ca24">
        <div class="content">
          <echart :id="'ys24'" :data="opt24"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca25">
        <div class="content">
          <echart :id="'ys25'" :data="opt25"></echart>
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
        drawer: false,
        direction: 'rtl',
        tableData: [{
          date: '2018',
          name: '126.07',
          province: '5',
          city: '131.07',
          address: '96.19'
        }, {
          date: '2019',
          name: '137.3',
          province: '5.4',
          city: '142.7',
          address: '96.22%',
        }, {
          date: '2020',
          name: '141.74',
          province: '6.8',
          city: '148.54',
          address: '95.42%',
        }],
        opt1: {
          title: [{
            text: "测试",
            x: 'center',
            top: '3%',
            textStyle: {fontSize: 22, fontWeight: "bold"}
          }, {
            text: '单位: 万元',
            x: '10%',
            top: '3%',
            textStyle: {
              fontWeight: 'normal',
              fontSize: "18"
            }
          }],
          tooltip: {
            trigger: 'axis',
            textStyle: {fontSize: "18"},
            formatter: function (params) {
              params = $(params).sort((a, b) => a.seriesIndex - b.seriesIndex);
              let html = params[0].name + '<br>';
              $(params).each(function () {
                html += this.marker + this.seriesName + ':' + this.value + '万元' + '<br>'
              });
              return html;
            }
          },
          toolbox: {},
          axisPointer: {
            type: 'shadow',
            link: {
              xAxisIndex: 'all'
            }
          },
          grid: function () {
            let _top;
            let dd = [], top = 60, height = 135, inteval = 25;
            for (let i = 0; i < 3; i++) {
              dd.push({
                left: '15%',
                right: '8%',
                bottom: '12%',
                top: function () {
                  if (i == 0) {
                    return top;
                  } else if (i == 1) {
                    return top + height + inteval;
                  } else if (i == 2) {
                    return top + (height + inteval) * 2;
                  }
                }(),
                height: height
              });
            }
            return dd;
          }(),
          xAxis: function () {
            let dd = [];
            for (let i = 0; i < 3; i++) {
              dd.push({
                type: 'category',
                gridIndex: i,
                // data: Array.from(__timeSet__),      //统一时间轴数据
                axisLabel: {
                  show: i == 2 ? true : false,
                  margin: 15,
                  fontSize: 16
                },
                axisTick: {show: i == 2 ? true : false}
              })
            }
            return dd;
          }(),
          yAxis: function () {
            let dd = [];
            let __data__ = [
              {
                name: "一般公共预算",
                value: [0, 0, 0, 0, 0, 163.14, 612.96, 2810.15, 26195.78, 6922.2, 0, 0.05, 9675.37, 9895.44, 11479.99, 28516.49, 34276.96, -0.6, 77242.13, 56905.43, 57600.52]
              },
              {
                name: "政府性基金预算",
                value: [0, 0, 0, 0, 0, 163.14, 612.96, 2810.15, 26195.78, 6922.2, 0, 0.05, 9675.37, 9895.44, 11479.99, 28516.49, 34276.96, -0.6, 77242.13, 56905.43, 57600.52]
              },
              {
                name: "一般公共预算",
                value: [0, 0, 0, 0, 0, 163.14, 612.96, 2810.15, 26195.78, 6922.2, 0, 0.05, 9675.37, 9895.44, 11479.99, 28516.49, 34276.96, -0.6, 77242.13, 56905.43, 57600.52]
              },
            ]
            $.each(__data__, function (i) {
              dd.push({
                type: 'value',
                name: this.name,
                nameLocation: 'middle',
                nameGap: '120',
                gridIndex: i,
                // splitNumber: 3,
                nameTextStyle: {fontSize: 18},
                // axisTick: {show: false},
                axisLabel: {fontSize: 16, show: true},
                axisTick: {show: true}
              })
            });
            return dd;
          }(),
          dataZoom: [{    //dataZoom 组件 用于区域缩放
            type: 'slider',
            // bottom: 5,
            xAxisIndex: [0, 1, 2],
            realtime: true,
            textStyle: {
              fontSize: 16,
            },
            // backgroundColor:'#000',
            //移动端展示方式
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '140%',
          }/*,{
                    type: 'inside'
                }*/],
          series: function () {
            let dd = [];
            let __data__ = [
              {
                name: "一般公共预算",
                value: [0, 0, 0, 0, 0, 163.14, 612.96, 2810.15, 26195.78, 6922.2, 0, 0.05, 9675.37, 9895.44, 11479.99, 28516.49, 34276.96, -0.6, 77242.13, 56905.43, 57600.52]
              },
              {
                name: "政府性基金预算",
                value: [0, 0, 0, 0, 0, 163.14, 612.96, 2810.15, 26195.78, 6922.2, 0, 0.05, 9675.37, 9895.44, 11479.99, 28516.49, 34276.96, -0.6, 77242.13, 56905.43, 57600.52]
              },
              {
                name: "一般公共预算",
                value: [0, 0, 0, 0, 0, 163.14, 612.96, 2810.15, 26195.78, 6922.2, 0, 0.05, 9675.37, 9895.44, 11479.99, 28516.49, 34276.96, -0.6, 77242.13, 56905.43, 57600.52]
              },
            ]
            $.each(__data__, function (index) {
              dd.push({
                type: 'line',
                name: this.name,
                xAxisIndex: index,
                yAxisIndex: index,
                data: this.value
              })
            });
            return dd;
          }()
        },
        opt2: null,
        opt3: {
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
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
          legend: [{
            x: 'center',
            bottom: '18',
            data: [
              {name: '一般公共预算支出（亿元）'}, {name: '政府性基金预算支出（亿元）'},
              {name: '国有资本经营预算支出（亿元）'},
            ],

          },
            {
              y: 'bottom',
              x: 'center',
              data: [
                {name: '一般公共预算支出增长率(%)', icon: 'line'},
                {name: '政府性基金预算支出增长率(%)', icon: 'line'},
                {name: '国有资本预算支出增长率(%)', icon: 'line'},
              ],
              selected: function () {
                let o = {};
                o["一般公共预算支出增长率(%)"] = false
                o["政府性基金预算支出增长率(%)"] = false
                o["国有资本预算支出增长率(%)"] = false
                return o;
              }(),
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
              name: '单位：亿元',
              scale: true,
              max: 350,
              min: 0,
              interval: 50,
              axisTick: {
                show: false
              },
              splitLine: {show: true},
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
        opt4: {
          title: [{
            text: '2018年-2020年龙华区预算收支规模',
            left: 'center',
          }],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
              // console.log(params);
              var relVal = params[0].name;
              for (var i = 0, l = params.length; i < l; i++) {
                relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + "亿元";
              }
              return relVal;
            }
          },
          legend: {
            x: 'center',
            y: 'bottom',
            data: ['一般公共预算收入', '转移性收入', '一般公共预算支出', '转移性支出']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018', '2019', '2020']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位：亿元',
            }
          ],
          series: [
            {
              name: '一般公共预算收入',
              type: 'bar',
              stack: 'in',
              barGap: 0,
              barWidth: 100,
              data: [131.07, 142.7, 148.54]
            },
            {
              name: '转移性收入',
              type: 'bar',
              stack: 'in',
              data: [163.93, 135.9, 165.26]
            },
            {
              name: '一般公共预算支出',
              type: 'bar',
              stack: 'out',
              barWidth: 100,
              data: [242.31, 247.84, 264.9]
            },
            {
              name: '转移性支出',
              type: 'bar',
              stack: 'out',
              data: [52.69, 30.76, 48.9]
            }
          ]
        },
        opt5: {
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
              {name: '税收收入（亿元）'},
              {name: '税收收入增速(%)'},
            ],
            selected: function () {
              let o = {};
              o["税收收入增速(%)"] = false;
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
        opt6: {
          title: [{
            text: '税收收入结构',
            x: 'center'
          }, {
            x: '50%',
            y: '50%',
            textAlign: 'center',
            textStyle: {color: '#000', fontSize: 22},
            text: function () {
              let sum = 0;
              let childrens = [{"title": "    其他", basevalue1: 22.44},
                {title: "   增值税", basevalue1: 54.86},
                {title: "   企业所得税", basevalue1: 21.23},
                {title: "   个人所得税", basevalue1: 6.01},
                {title: "   房产税", basevalue1: 2.8},
                {title: "   土地增值税", basevalue1: 22.9},
                {title: "   契税", basevalue1: 11.5}]
              $.each(childrens, function () {
                sum += this["basevalue1"]
              });
              return '税收收入\n' + Number(sum).toFixed(1);
            }()
          }],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '税收收入',
              type: 'pie',
              radius: ['50%', '70%'],
              label: {
                formatter: function (p) {
                  let name = p.data.name.trim().replace(/(?=[\（|\(])/g, '\n');
                  return name + '\n(' + p.percent + ')%\n';
                },
                // fontSize: options.series_label_size,
              },
              data: [
                {value: 54.86, name: '增值税'},
                {value: 21.23, name: '企业所得税'},
                {value: 6.01, name: '个人所得税'},
                {value: 2.8, name: '房产税'},
                {value: 22.9, name: '土地增值税'},
                {value: 11.5, name: '契税'},
                {value: 22.44, name: '其他'},
              ]
            }
          ]
        },
        opt7: {
          title: [{
            text: '非税收收入结构',
            x: 'center'
          }, {
            x: '50%',
            y: '50%',
            textAlign: 'center',
            textStyle: {color: '#000', fontSize: 22},
            text: function () {
              let sum = 0;
              let childrens = [{title: "   专项收入", basevalue1: 0},
                {title: "   行政事业性收费收入", basevalue1: 2.3},
                {title: "   罚没收入", basevalue1: 0.9},
                {title: "   国有资本经营收入", basevalue1: 0},
                {title: "   国有资源（资产）有偿使用收入", basevalue1: 2.4},
                {title: "   政府住房基金收入", basevalue1: 1.1},
                {title: "   其他收入", basevalue1: 0.1}]
              $.each(childrens, function () {
                sum += this["basevalue1"]
              });
              return '非税收收入\n' + Number(sum).toFixed(1);
            }()
          }],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '非税收收入',
              type: 'pie',
              radius: ['50%', '70%'],
              label: {
                formatter: function (p) {
                  let name = p.data.name.trim().replace(/(?=[\（|\(])/g, '\n');
                  return name + '\n(' + p.percent + ')%\n';
                },
                // fontSize: options.series_label_size,
              },
              data: [
                {value: 2.3, name: '行政事业性收费收入'},
                {value: 0.9, name: '罚没收入'},
                {value: 0, name: '国有资本收入'},
                {value: 2.4, name: '国有资源(资产)有偿使用收入'},
                {value: 1.1, name: '政府住房基金收入'},
                {value: 0.1, name: '其他收入'},
                {value: 0, name: '专项收入'},
              ]
            }
          ]
        },
        opt8: null,
        opt9: {
          title: [{
            text: '2020年龙华区一般公共预算支出结构(按功能科目)',
            left: 'center',
          }, {
            text: '单位：亿元',
            top: '15%',
            left: '5%',
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
            trigger: 'item',
            formatter: '{b} : {c}亿元 ({d}%)'
          },
          legend: {
            // orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
            // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          grid: {
            bottom: "20%"
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              label: {
                normal: {
                  position: 'inner',
                  show: false
                }
              },
              center: ['50%', '50%'],
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
        opt10: {
          title: [{
            text: '2020年龙华区一般公共预算支出结构(按经济科目)',
            left: 'center'
          }, {
            text: '单位：亿元',
            top: '15%',
            left: '5%',
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
            trigger: 'item',
            formatter: '{b} : {c}亿元 ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              label: {
                normal: {
                  position: 'inner',
                  show: false
                }
              },
              center: ['50%', '50%'],
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
              },
            },
          ]
        },
        opt11: {
          title: [{
            text: '2018年-2020年龙华区一般公共预算三公经费情况',
            left: 'center',
          }],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
              // console.log(params);
              var relVal = params[0].name;
              for (var i = 0, l = params.length; i < l; i++) {
                relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + "亿元";
              }
              return relVal;
            }
          },
          legend: {
            x: 'center',
            y: 'bottom',
            data: ['因公出国(境)费', '公务用车购置和运行服务费', '公务接待费']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          xAxis: [
            {
              type: 'category',
              data: ['2018年预算费', '2019年预算费', '2020年预算费']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位：亿元',
            }
          ],
          series: [
            {
              name: '因公出国(境)费',
              type: 'bar',
              barGap: 0,
              barWidth: 80,
              data: [0.04, 0.06, 0.06]
            },
            {
              name: '公务用车购置和运行服务费',
              type: 'bar',
              barWidth: 80,
              data: [0.7, 0.68, 0.68]
            },
            {
              name: '公务接待费',
              type: 'bar',
              barWidth: 80,
              data: [0.05, 0.02, 0.02]
            }
          ]
        },
        opt12: {
          title: [{
            text: '2018年-2020年龙华区一般公共预算民生类总支出',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'cross'},
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let marker = p[0].name + '<br>';
              $.each(p, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + this.data
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : "亿元") + '<br>';
              });
              return marker;
            },
            confine: true
          },
          grid: {top: "15%", bottom: "20%", left: "10%"},
          legend: {
            x: 'center',
            bottom: 0,
            data: ["民生类支出(亿元)", "占一般公共预算比例(%)", "增速(%)"],
            // textStyle: {fontSize: options.legend_fontSize},
            selected: function () {
              let o = {};
              // let __bname__ = ["民生类支出(亿元)", "占一般公共预算比例(%)", "增速(%)"];
              o["占一般公共预算比例(%)"] = false;
              o["增速(%)"] = false;
              return o;
            }()
          },
          toolbox: {
            feature: {
              dataView: {show: true},
              magicType: {
                show: true,
                type: ["line", "bar", "stack"],
                restore: {show: true},
                saveAsImage: {show: true},
              },
            },
            right: "10%",
            show: true,
            top: "5%",
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ["2018年", "2019年", "2020年"],
              splitLine: {show: false},
              axisLine: {color: '#FFF'},
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位：亿元',
              nameTextStyle: {
                // fontSize: options.yAxis_fontSize
              },
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            },
            {
              type: 'value',
              name: '',
              axisLabel: {
                formatter: '{value}%',
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          series: function () {//设置数据
            let o = [];
            let __data__ = [
              {basename: "民生类支出(亿元)", basevalue: [130.16, 161.46, 167.24]},
              {basename: "占一般公共预算比例(%)", basevalue: [44.12, 57.95, 53.3]},
              {basename: "增速(%)", basevalue: [, 24.05, 3.58]}
            ]
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
              if (this["basename"].indexOf('%') != -1) {
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
              j['name'] = this["basename"];
              j['data'] = this["basevalue"];
              o.push(j)
            });
            return o;
          }

          ()
        },
        opt13: {
          title: [{
            text: "2018年-2020年龙华区一般公共预算九大类民生支出规模排行",
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              axis: 'y'
            }
            ,
            formatter: function (p) {
              let marker = p[0].marker + p[0].axisValue + '<br>';
              $.each(p, function () {
                marker += '&nbsp;&nbsp;&nbsp;' + this.name + ': ' + this.data[2] + '亿元' + '<br>';
              });
              return marker;
            }
            ,
            // textStyle: options.tooltip_font_size,
            confine: true
          }
          ,
          legend: {
            x: 'center',
            bottom: 0,
            width: '80%',
            data: ["教育支出", "文化体育与传媒支出", "社会保障和就业支出", "医疗卫生与计划生育支出", "节能环保支出", "城乡社区支出", "农林水支出", "交通运输支出", "住房保障支出"]
          }
          , grid: {
            top: '15%',
            bottom: '20%',
            left: '18%'
          }
          ,
          xAxis: {
            type: 'category',
            data: ["2018年", "2019年", "2020年", "合计"],
            // boundaryGap: false,
            splitLine: {
              // show: true,
              lineStyle: {
                color: '#999',
                type: 'dashed'
              }
            }
            ,
            axisLabel: {
              // fontSize: options.yAxis_axisLabel_fontSize,
            }
          }
          ,
          yAxis: {
            type: 'category',
            data: ["教育支出", "文化体育与传媒支出", "社会保障和就业支出", "医疗卫生与计划生育支出", "节能环保支出", "城乡社区支出", "农林水支出", "交通运输支出", "住房保障支出"],
            name: '单位：亿元',
            axisTick: {
              show: false
            }
            ,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#999',
                type: 'dashed'
              }
            }
            ,//options.group
            nameTextStyle: {
              // padding:function () {
              //     if(!options.group){
              //         return [0,0,0,50]
              //     }
              // }(),
              padding: [0, 0, 0, 50],   //若写死有问题请用上面那个方式
              // fontSize: options.yAxis_fontSize
            }
            ,
            axisLabel: {
              formatter: function (v) {
                return v;
              }
              ,
              // fontSize: options.yAxis_axisLabel_fontSize
            }
          }
          ,
          series: function () {
            let dd = [], dn = [], max = null;
            let __data__ = [
              {
                basename: "教育支出",
                basevalue: [
                  [0, 0, 31.47],
                  [1, 0, 46.62],
                  [2, 0, 50.7],
                  [3, 0, 128.79]
                ]
              },
              {
                basename: "文化体育与传媒支出",
                basevalue: [
                  [0, 1, 5.19],
                  [1, 1, 6.04],
                  [2, 1, 2.41],
                  [3, 1, 13.64]
                ]
              },
              {
                basename: "社会保障和就业支出",
                basevalue: [
                  [0, 2, 15.15],
                  [1, 2, 11.96],
                  [2, 2, 11.99],
                  [3, 2, 39.1]
                ]
              },
              {
                basename: "医疗卫生与计划生育支出",
                basevalue: [
                  [0, 3, 19.35],
                  [1, 3, 21.89],
                  [2, 3, 20.08],
                  [3, 3, 61.32]
                ]
              }, {
                basename: "节能环保支出",
                basevalue: [
                  [0, 4, 6.33],
                  [1, 4, 2.71],
                  [2, 4, 1.04],
                  [3, 4, 10.08]
                ]
              }, {
                basename: "城乡社区支出",
                basevalue: [
                  [0, 5, 35.88],
                  [1, 5, 47.48],
                  [2, 5, 62.3],
                  [3, 5, 145.66]
                ]
              }, {
                basename: "农林水支出",
                basevalue: [
                  [0, 6, 9.28],
                  [1, 6, 17.62],
                  [2, 6, 11.73],
                  [3, 6, 38.63]
                ]
              },
              {
                basename: "交通运输支出",
                basevalue: [
                  [0, 7, 1.21],
                  [1, 7, 0.78],
                  [2, 7, 0],
                  [3, 7, 1.99]
                ]
              },
              {
                basename: "住房保障支出",
                basevalue: [
                  [0, 8, 6.31],
                  [1, 8, 6.37],
                  [2, 8, 6.99],
                  [3, 8, 19.67]
                ]
              },
            ]
            $.each(__data__, function () {
              $.each(this["basevalue"], function () {
                // if (this[0] == __year__.length - 1) {
                if (this[0] == 3) {
                  dn.push(this[2]);
                }
              });
            });
            max = Math.max.apply(null, dn);

            $.each(__data__, function () {
              dd.push({
                name: this["basename"], data: this["basevalue"], type: 'scatter', symbolSize: function (v) {
                  // if (v[0] == __year__.length - 1) {  //合计数圈圈的大小
                  if (v[0] == 3) {  //合计数圈圈的大小
                    let n = v[2] == max ? 40 : 40 - ((max - v[2]) / (max / 18));
                    return n;
                  }
                  let _s = v[2] / 2 + 15;
                  return _s > 30 ? 30 : _s;
                }
              })
            });
            return dd;
          }()
        },
        opt14: {
          title: [{
            text: '2018年-2020年龙华区一般公共预算九大类民生支出规模排行及增速',
            x: 'center',
            top: '2%',
            // textStyle: options.textStyle
          }],
          legend: {
            icon: 'rect',
            bottom: 0,
            data: ['支出金额(亿元)', '支出增速(%)']
          }
          ,
          radar: [
            {
              splitNumber: 4,
              center: ['50%', '52%'],
              indicator: [
                {name: "教育支出(50.7亿元、8.77%)", max: 40, min: -70},
                {name: "文化旅游体育与传媒支出(2.41亿元、-60.07%)", max: 40, min: -70},
                {name: "社会保障和就业支出(11.99亿元、0.23%)", max: 40, min: -70},
                {name: "卫生健康支出(20.08亿元、-8.27%)", max: 40, min: -70},
                {name: "节能环保支出(1.04亿元、-61.84%)", max: 40, min: -70},
                {name: "城乡社区支出(62.3亿元、31.21%)", max: 40, min: -70},
                {name: "农林水支出(11.73亿元、-33.42%)", max: 40, min: -70},
                {name: "住房保障支出(6.99亿元、9.74%)", max: 40, min: -70}
              ],
              radius: "60%",
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
              indicator: [
                {name: "教育支出", max: 70, min: 0},
                {name: "文化旅游体育与传媒支出", max: 70, min: 0},
                {name: "社会保障和就业支出", max: 70, min: 0},
                {name: "卫生健康支出", max: 70, min: 0},
                {name: "节能环保支出", max: 70, min: 0},
                {name: "城乡社区支出", max: 70, min: 0},
                {name: "农林水支出", max: 70, min: 0},
                {name: "住房保障支出", max: 70, min: 0}
              ],
              center: ['50%', '52%'],
              name: {
                show: false
              },
              radius: "60%"
            }
          ],
          //极坐标系
          polar:
            {
              radius: "60%",
              center: ['50%', '52%'],
            }
          ,
          angleAxis: {
            axisLine: {
              show: false,
            }
            ,
          }
          ,
          radiusAxis: {
            type: 'value',
            min: -70,
            max: 40,
            axisLabel:
              {
                formatter: '',
              }
            ,
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(238,238,238, 0.2)'
              }
            }
          }
          ,
          series: [
            {
              type: 'radar',
              radarIndex: 0,
              name: '支出增速(%)',
              data: [{
                value: [8.77, -60.07, 0.23, -8.27, -61.84, 31.21, -33.42, 9.74]
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
                value: [50.7, 2.41, 11.99, 20.08, 1.04, 62.3, 11.73, 6.99],
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
        opt15: {
          title: [{
            text: '2018年-2020年龙华区预算支出规模及增速',
            left: 'center',
          }],
          toolbox: {
            show: true,
            top: 'top',
            // right: '20%',
            feature: {
              mark: {
                show: true
              }
              ,

              dataView: {
                show: true,
                readOnly: false
              }
              ,

              magicType: {
                show: true,
                type: ['line', 'bar', 'stack']
              }
              ,

              restore: {
                show: true
              }
              ,

              saveAsImage: {
                show: true
              }

            }

          }
          ,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
            ,
            formatter: function (params) {
              // console.log(params);
              let marker = params[0].name + '<br>';
              $.each(params, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + this.data
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : "亿元") + '<br>';
              });
              return marker;
            }
          }
          ,
          grid: {
            // left: '5%',
            //
            // right: '20%',
            containLabel: true

          }
          ,
          legend: {
            x: 'center',
            bottom: 0,
            data: ["滚存结余", "政府性基金当年收入", "余额分析值(%)"],
            // textStyle: {fontSize: options.legend_fontSize},
            selected:
              function () {
                let o = {};
                o["余额分析值(%)"] = false;
                return o;
              }()
          }
          ,
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['2020年'],
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
              name: '单位：亿元',
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
              name: '滚存结余',
              type: 'bar',
              data: [1],
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
              name: '政府性基金当年收入',
              type: 'bar',
              data: [127.48],
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
              name: '余额分析值(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [0.78],
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
        opt16: {
          title: [{
            text: '2014年-2015年龙华区政府性基金及国土基金收入趋势分析',
            left: 'center',
          }],
          toolbox: {
            show: true,
            top: 'top',
            // right: '20%',
            feature: {
              mark: {
                show: true
              }
              ,

              dataView: {
                show: true,
                readOnly: false
              }
              ,

              magicType: {
                show: true,
                type: ['line', 'bar', 'stack']
              }
              ,

              restore: {
                show: true
              }
              ,

              saveAsImage: {
                show: true
              }

            }

          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
          }
          ,
          grid: {
            // left: '5%',
            //
            // right: '20%',
            containLabel: true

          }
          ,
          legend: {
            x: 'center',
            bottom: 0,
            data: ["政府性基金收入", "政府性基金增速(%)", "国有土地使用权出让收入总额", "国有土地增速(%)"],
            // textStyle: {fontSize: options.legend_fontSize},
            selected:
              function () {
                let o = {};
                o["政府性基金增速(%)"] = false;
                o["国有土地增速(%)"] = false;
                return o;
              }()
          }
          ,
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['2014年', '2015年'],
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
              name: '单位：亿元',
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
              name: '政府性基金收入',
              type: 'bar',
              data: [871.14, 960.82],
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
              name: '国有土地使用权出让收入总额',
              type: 'bar',
              data: [523.41, 496.48],
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
              name: '政府性基金增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [, 10.29],
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
            {
              name: '国有土地增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [, -5.15],
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
        opt17: {
          title: [{
            text: '2018年-2020年龙华区国有资本经营预算规模趋势分析',
            left: 'center',
          }],
          toolbox: {
            show: true,
            top: 'top',
            // right: '20%',
            feature: {
              mark: {
                show: true
              }
              ,

              dataView: {
                show: true,
                readOnly: false
              }
              ,

              magicType: {
                show: true,
                type: ['line', 'bar', 'stack']
              }
              ,

              restore: {
                show: true
              }
              ,

              saveAsImage: {
                show: true
              }

            }

          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
          }
          ,
          grid: {
            // left: '5%',
            //
            // right: '20%',
            containLabel: true

          }
          ,
          legend: {
            x: 'center',
            bottom: 0,
            data: ["国有资本经营预算收支(亿元)", "增速(%)"],
            // textStyle: {fontSize: options.legend_fontSize},
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
              name: '单位：亿元',
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
              name: '国有资本经营预算收支(亿元)',
              type: 'line',
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
            },
            {
              name: '增速(%)',
              type: 'line',
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
            },
          ]
        },
        opt18: {
          title: [{
            text: '2020年龙华区国有资本经营预算支出结构分析',
            left: 'center'
          }, {
            text: '单位：亿元',
            top: '15%',
            left: '5%',
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
            trigger: 'item',
            formatter: '{b} : {c}亿元 ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
          },
          series: [
            {
              name: '2020年龙华区国有资本经营预算支出结构分析',
              type: 'pie',
              radius: '55%',
              label: {
                formatter: function (p) {
                  // console.log(p);
                  let name = p.data.name.trim().replace(/(?=[\（|\(])/g, '\n');
                  return name + ':' + p.value + '亿元(' + p.percent + '%)\n';
                },
              },
              center: ['50%', '50%'],
              data: [
                {value: 0.52, name: '解决历史遗留问题及改革成本支出'},
                {value: 0, name: '国有企业资本注入'},
                {value: 0, name: '国有企业政策性补贴'},
                {value: 0, name: '金融国有资本经营预算支出'},
                {value: 0, name: '其他国有资本经营预算支出'},
                {value: 0.23, name: '转移性支出'},
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
            },
          ]
        },
        opt19: {
          title: [{
            text: '2018年-2020年龙华区国有资本经营预算调入一般公共预算情况',
            x: 'center',
            top: '3%',
            // textStyle: options.textStyle
          }],
          tooltip: {//提示框
            trigger: 'axis',
            axisPointer: {type: 'cross'},
            // textStyle: options.tooltip_font_size,
            formatter: function (p) {
              let marker = p[0].name + '<br>';
              $.each(p, function () {
                marker += this.marker + this.seriesName.replace(/[\(|\（].+/, '') + ': ' + this.data
                marker += (this.seriesName.indexOf('%') != -1 ? '%' : "亿元") + '<br>';
              });
              return marker;
            },
            confine: true
          },
          grid: {top: "15%", bottom: "20%", left: "10%"},
          legend: {
            x: 'center',
            bottom: 0,
            data: ["调入一般公共预算(亿元)", "调入资金占比(%)"],
            // textStyle: {fontSize: options.legend_fontSize},
            selected: function () {
              let o = {};
              // let __bname__ = ["民生类支出(亿元)", "占一般公共预算比例(%)", "增速(%)"];
              // o["占一般公共预算比例(%)"] = false;
              // o["增速(%)"] = false;
              return o;
            }()
          },
          toolbox: {
            feature: {
              dataView: {show: true},
              magicType: {
                show: true,
                type: ["line", "bar", "stack"],
                restore: {show: true},
                saveAsImage: {show: true},
              },
            },
            right: "10%",
            show: true,
            top: "5%",
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ["2018年", "2019年", "2020年"],
              splitLine: {show: false},
              axisLine: {color: '#FFF'},
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '单位：亿元',
              nameTextStyle: {
                // fontSize: options.yAxis_fontSize
              },
              axisLabel: {
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            },
            {
              type: 'value',
              name: '',
              axisLabel: {
                formatter: '{value}%',
                // fontSize: options.yAxis_axisLabel_fontSize
              }
            }
          ],
          series: function () {//设置数据
            let o = [];
            let __data__ = [
              {basename: "调入一般公共预算(亿元)", basevalue: [0.05, 0.16, 0.23]},
              {basename: "调入资金占比(%)", basevalue: [21.74, 25.4, 30.67]}
            ]
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
              if (this["basename"].indexOf('%') != -1) {
                j.type = 'line';
                j.yAxisIndex = 1;
                j.markLine = {
                  silent: true, symbol: 'none', label: {formatter: '19%', fontSize: 18},
                  data: [{yAxis: 19}], lineStyle: {color: '#f20000', width: 3, type: "solid"}
                };
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
              j['name'] = this["basename"];
              j['data'] = this["basevalue"];
              o.push(j)
            });
            return o;
          }

          ()
        },
        opt20: {
          baseOption: {
            title: {
              text: '2020年1月龙华区各部门预算执行情况',
              textAlign: 'center',
              x: '50%',
              top: '3%',
              // textStyle: options.textStyle
            },
            grid: {top: '15%', bottom: '15%', left: '10%', right: '13%'},
            toolbox: {
              show: true,
              top: '9%',
              right: '14%',
              feature: {
                dataView: {show: true},
                magicType: {show: true, type: ['line', 'bar', 'stack']},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            timeline: {
              show: true,
              axisType: 'category',
              orient: 'vertical',
              inverse: true,
              right: '3%',
              top: '5%',
              bottom: '5%',
              width: 80,
              label: {
                normal: {
                  textStyle: {
                    color: '#202020',
                    // fontSize: options.yAxis_fontSize - 2
                  }
                },
                emphasis: {
                  textStyle: {
                    color: '#202020',
                    // fontSize: options.yAxis_fontSize - 2
                  }
                }
              },
              // symbol: 'none',
              lineStyle: {
                color: '#555'
              },
              checkpointStyle: {
                color: '#f00',
                borderColor: '#f40000',
                borderWidth: 3
              },
              controlStyle: {show: false},
              data: ["7月", "6月", "5月", "4月", "3月", "2月", "1月"]
            },
            tooltip: {
              confine: true,
              // backgroundColor: '#222',
              // borderColor: '#777',
              borderWidth: 2,
              formatter: function (p) {
                if (p.value.length > 1) {
                  let html = '部门名称: ' + p.value[2] + '<br>';
                  html += p.value[4] + ': ' + Number(p.value[5] * 100).toFixed(0) + '%<br>';
                  html += '执行金额: ' + p.value[0] + '亿元' + '<br>';
                  html += p.value[3] + ': ' + p.value[1] + '亿元' + '<br>';
                  return html;
                }
              },
              // textStyle: {fontSize: options.group ? 22 : 16}
            },
            xAxis: {
              type: 'value',
              name: '执行金额(' + '亿元' + ')',
              nameGap: 42,
              nameLocation: 'middle',
              // nameTextStyle: {fontSize: options.yAxis_fontSize},
              axisTick: {inside: false},
              splitLine: {show: true, lineStyle: {type: 'solid'}},
              axisLabel: {
                showMinLabel: false,
                // fontSize: options.yAxis_axisLabel_fontSize
              },
            },
            yAxis: [
              {
                type: 'value',
                name: '累计支出(' + '亿元' + ')',
                // max: 200,
                min: 0,
                axisLabel: {
                  // fontSize: options.yAxis_axisLabel_fontSize
                },
                nameTextStyle: {
                  // fontSize: options.yAxis_fontSize
                },
              }
            ],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut'
          },
          options: function () {  //设置动态数据
            let dd = [], max = 0;
            let __data__ = [
              {
                name: "2020年7月龙华区各部门预算执行情况", value: [
                  [0.05, 0.35, "深圳市龙华区委（政府）办公室本级", "截止6月累计支出", "6月比5月增速", 0.67],
                  [0.02, 0.13, "深圳市龙华区人民代表大会常务委员会办公室本级", "截止6月累计支出", "6月比5月增速", 1],
                  [0.01, 0.14, "中国人民政治协商会议深圳市龙华区委员会办公室本级", "截止6月累计支出", "6月比5月增速", 0],
                  [0.05, 0.33, "中共深圳市龙华区纪律检查委员会本级", "截止6月累计支出", "6月比5月增速", 0],
                  [0.14, 0.5, "中共深圳市龙华区委组织部", "截止6月累计支出", "6月比5月增速", 6],
                ]
              },
              {
                name: "2020年6月龙华区各部门预算执行情况", value: [
                  [0.03, 0.3, "深圳市龙华区委（政府）办公室本级", "截止5月累计支出", "5月比4月增速", -0.25],
                  [0.01, 0.11, "深圳市龙华区人民代表大会常务委员会办公室本级", "截止5月累计支出", "5月比4月增速", -0.5],
                  [0.01, 0.13, "中国人民政治协商会议深圳市龙华区委员会办公室本级", "截止5月累计支出", "5月比4月增速", -0.67],
                  [0.05, 0.28, "中共深圳市龙华区纪律检查委员会本级", "截止5月累计支出", "5月比4月增速", 0.25],
                  [0.02, 0.36, "中共深圳市龙华区委组织部", "截止5月累计支出", "5月比4月增速", -0.33],
                ]
              },
              {
                name: "2020年5月龙华区各部门预算执行情况", value: [
                  [0.03, 0.3, "深圳市龙华区委（政府）办公室本级", "截止5月累计支出", "5月比4月增速", -0.25],
                  [0.01, 0.11, "深圳市龙华区人民代表大会常务委员会办公室本级", "截止5月累计支出", "5月比4月增速", -0.5],
                  [0.01, 0.13, "中国人民政治协商会议深圳市龙华区委员会办公室本级", "截止5月累计支出", "5月比4月增速", -0.67],
                  [0.05, 0.28, "中共深圳市龙华区纪律检查委员会本级", "截止5月累计支出", "5月比4月增速", 0.25],
                  [0.02, 0.36, "中共深圳市龙华区委组织部", "截止5月累计支出", "5月比4月增速", -0.33],
                ]
              },
              {
                name: "2020年4月龙华区各部门预算执行情况", value: [
                  [0.04, 0.27, "深圳市龙华区委（政府）办公室本级", "截止4月累计支出", "4月比3月增速", -0.67],
                  [0.02, 0.1, "深圳市龙华区人民代表大会常务委员会办公室本级", "截止4月累计支出", "4月比3月增速", -0.6],
                  [0.03, 0.12, "中国人民政治协商会议深圳市龙华区委员会办公室本级", "截止4月累计支出", "4月比3月增速", -0.4],
                  [0.04, 0.23, "中共深圳市龙华区纪律检查委员会本级", "截止4月累计支出", "4月比3月增速", -0.67],
                  [0.03, 0.34, "中共深圳市龙华区委组织部", "截止4月累计支出", "4月比3月增速", -0.75],
                ]
              },
              {
                name: "2020年3月龙华区各部门预算执行情况", value: [
                  [0.12, 0.23, "深圳市龙华区委（政府）办公室本级", "截止3月累计支出", "3月比2月增速", 3],
                  [0.05, 0.08, "深圳市龙华区人民代表大会常务委员会办公室本级", "截止3月累计支出", "3月比2月增速", 1.5],
                  [0.05, 0.09, "中国人民政治协商会议深圳市龙华区委员会办公室本级", "截止3月累计支出", "3月比2月增速", 1.5],
                  [0.12, 0.19, "中共深圳市龙华区纪律检查委员会本级", "截止3月累计支出", "3月比2月增速", 5],
                  [0.12, 0.31, "中共深圳市龙华区委组织部", "截止3月累计支出", "3月比2月增速", 0],
                ]
              },
              {
                name: "2020年2月龙华区各部门预算执行情况", value: [
                  [0.03, 0.11, "深圳市龙华区委（政府）办公室本级", "截止2月累计支出", "2月比1月增速", -0.63],
                  [0.02, 0.03, "深圳市龙华区人民代表大会常务委员会办公室本级", "截止2月累计支出", "2月比1月增速", 1],
                  [0.02, 0.04, "中国人民政治协商会议深圳市龙华区委员会办公室本级", "截止2月累计支出", "2月比1月增速", 0],
                  [0.02, 0.07, "中共深圳市龙华区纪律检查委员会本级", "截止2月累计支出", "2月比1月增速", -0.6],
                  [0.12, 0.19, "中共深圳市龙华区委组织部", "截止2月累计支出", "2月比1月增速", 0.71],
                ]
              },
              {
                name: "2020年1月龙华区各部门预算执行情况", value: [
                  [0.08, 0.08, "深圳市龙华区委（政府）办公室本级", "截止1月累计支出", "1月增速", 0],
                  [0.01, 0.01, "深圳市龙华区人民代表大会常务委员会办公室本级", "截止1月累计支出", "1月增速", 0],
                  [0.02, 0.02, "中国人民政治协商会议深圳市龙华区委员会办公室本级", "截止1月累计支出", "1月增速", 0],
                  [0.05, 0.05, "中共深圳市龙华区纪律检查委员会本级", "截止1月累计支出", "1月增速", 0],
                  [0.07, 0.07, "中共深圳市龙华区委组织部", "截止1月累计支出", "1月增速", 0],
                ]
              },
            ]
            $.each(__data__, function () {
              let ovalue = this.value, oname = this.name;
              ovalue.map(function (val, index, originai) {
                max = val[1] > max ? val[1] : max;
              });
              dd.push({
                title: {text: oname},
                series: {
                  id: 'gridScatter',
                  type: 'scatter',
                  data: ovalue,
                  symbolSize: function (val) {
                    /*let size = val[1]==max ? 60 : 60 - ((max-val[1]) / 0.15);
                    return options.group ? size : size/1.5;*/
                    let size = (val[1] * 5) > 100 ? 100 : val[1] * 5;
                    return size > 10 ? size : 10;
                  },
                  itemStyle: {
                    normal: {
                      // opacity: 0.8,
                      // shadowBlur: 3,
                      // shadowOffsetX: 0,
                      // shadowOffsetY: 0,
                      // shadowColor: 'rgba(0, 0, 0, 0.5)',
                      // color: function(p){
                      //     let v = p.value;
                      //     return (v[1] < min_yAxis || v[1] > max_yAxis) ? '#F00' : '#00b69d';
                      // },
                      color: function (p) {
                        let num = (p.value[1] + p.value[0].toString()).replace(/\./g, '');
                        return "#" + ("00000" + (num * 16777215 >> 0).toString(16)).slice(-6);
                      }
                    },
                  },
                  // label: {
                  //     color: '#027066',
                  //     fontWeight: 'bold',
                  //     fontSize: 18,
                  //     emphasis: {
                  //         // position: 'top',
                  //         // color:'#f00',
                  //         // offset:[0, 0],
                  //         formatter: function (params) {
                  //             return params.value[3];
                  //         }
                  //     },
                  //     show: options.group ? true : false,
                  //     offset: [110,0],
                  //     // width: 160,
                  //     // rich:{},
                  // },
                }
              })
            });
            return dd;
          }()
        },
        opt21: {
          title: {
            text: '2020年龙华区部门预算规模前10',
            left: 'center',
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {show: true},
              magicType: {show: true, type: ['line', 'bar', 'stack']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: "{b}:{c}亿元",
          },
          grid: {
            containLabel: true
          },
          xAxis: {
            type: 'value',
            // inverse:true
          },
          yAxis: {
            type: 'category',
            data: ['深圳市龙华区教育系统', '深圳市龙华区建筑工务署', '深圳市龙华区卫生健康系统', '深圳市公安局龙华分局',
              '深圳市龙华区龙华街道办', '深圳市龙华区城市管理和综合执法局', '深圳市龙华区大浪街道办', '深圳市龙华区民治街道办',
              '深圳市龙华区福城街道办', '深圳市龙华区观澜街道办'],
            name: '单位：亿元',
            nameLocation:'start',
            nameTextStyle: {padding: [0, 0, 0, 60]},
            inverse:true,

          },
          series: [{
            data: [52.27, 40.28, 39.6, 15.59, 12.49, 11.5, 11.31, 11.27, 11.11, 10.87],
            // data: [10.87, 11.11, 11.27, 11.31, 11.5, 12.49, 15.59, 39.6, 40.28, 52.27],
            type: 'bar',
            barMaxWidth: '60%',
            label: {
              show: true,
              formatter: '{c}',
              position: 'right',
              fontSize: 18
            },
            itemStyle: {
              normal: {
                color: '#5182bb'
              }
            }
          }]
        },
        opt22: {
          title: {
            text: '2020年龙华区部门预算三公经费规模前10',
            left: 'center',
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {show: true},
              magicType: {show: true, type: ['line', 'bar', 'stack']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: "{b}:{c}亿元",
          },
          grid: {
            containLabel: true
          },
          xAxis: {
            type: 'value',
            // inverse:true
          },
          yAxis: {
            type: 'category',
            data: ['深圳市龙华区教育系统', '深圳市龙华区建筑工务署', '深圳市龙华区卫生健康系统', '深圳市公安局龙华分局',
              '深圳市龙华区龙华街道办', '深圳市龙华区城市管理和综合执法局', '深圳市龙华区大浪街道办', '深圳市龙华区民治街道办',
              '深圳市龙华区福城街道办', '深圳市龙华区观澜街道办'],
            name: '单位：亿元',
            nameLocation:'start',
            nameTextStyle: {padding: [0, 0, 0, 60]},
            inverse:true,

          },
          series: [{
            data: [52.27, 40.28, 39.6, 15.59, 12.49, 11.5, 11.31, 11.27, 11.11, 10.87],
            // data: [10.87, 11.11, 11.27, 11.31, 11.5, 12.49, 15.59, 39.6, 40.28, 52.27],
            type: 'bar',
            barMaxWidth: '60%',
            label: {
              show: true,
              formatter: '{c}',
              position: 'right',
              fontSize: 18
            },
            itemStyle: {
              normal: {
                color: '#5182bb'
              }
            }
          }]
        },
        opt23: {
          title: {
            text: '2020年龙华区部门预算项目支出规模前10',
            left: 'center',
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {show: true},
              magicType: {show: true, type: ['line', 'bar', 'stack']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: "{b}:{c}亿元",
          },
          grid: {
            containLabel: true
          },
          xAxis: {
            type: 'value',
            // inverse:true
          },
          yAxis: {
            type: 'category',
            data: ['深圳市龙华区教育系统', '深圳市龙华区建筑工务署', '深圳市龙华区卫生健康系统', '深圳市公安局龙华分局',
              '深圳市龙华区龙华街道办', '深圳市龙华区城市管理和综合执法局', '深圳市龙华区大浪街道办', '深圳市龙华区民治街道办',
              '深圳市龙华区福城街道办', '深圳市龙华区观澜街道办'],
            name: '单位：亿元',
            nameLocation:'start',
            nameTextStyle: {padding: [0, 0, 0, 60]},
            inverse:true,

          },
          series: [{
            data: [52.27, 40.28, 39.6, 15.59, 12.49, 11.5, 11.31, 11.27, 11.11, 10.87],
            // data: [10.87, 11.11, 11.27, 11.31, 11.5, 12.49, 15.59, 39.6, 40.28, 52.27],
            type: 'bar',
            barMaxWidth: '60%',
            label: {
              show: true,
              formatter: '{c}',
              position: 'right',
              fontSize: 18
            },
            itemStyle: {
              normal: {
                color: '#5182bb'
              }
            }
          }]
        },
        opt24: {
          title: [{
            text: '2020年龙华区政府投资项目计划结构情况(行业分布)',
            left: 'center'
          }, {
            text: '单位：亿元',
            top: '15%',
            left: '5%',
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
            trigger: 'item',
            formatter: '{b} : {c}亿元 ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
          },
          series: [
            {
              name: '2020年龙华区国有资本经营预算支出结构分析',
              type: 'pie',
              radius: '55%',
              label: {
                formatter: function (p) {
                  // console.log(p);
                  let name = p.data.name.trim().replace(/(?=[\（|\(])/g, '\n');
                  return name + ':' + p.value + '亿元(' + p.percent + '%)\n';
                },
              },
              center: ['50%', '50%'],
              data: [
                {value: 5, name: '专项预留'},
                {value: 4.97, name: '保障住房'},
                {value: 5.77, name: '党政机关'},
                {value: 4.04, name: '公共安全'},
                {value: 24.18, name: '农林水利治理'},
                {value: 11.1, name: '医疗卫生'},
                {value: 27.71, name: '城市建设'},
                {value: 9.36, name: '市容环提'},
                {value: 2.6, name: '征地拆迁'},
                {value: 16.71, name: '教育'},
                {value: 10.81, name: '文化教育'},
                {value: 0.33, name: '环保及地质灾害治理'},
                {value: 9.62, name: '科技及产业配套'},
                {value: 13.51, name: '道路交通'},
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
            },
          ]
        },
        opt25: {
          title: [{
            text: '2020年龙华区政府投资项目计划结构分析(资金来源)',
            left: 'center'
          }, {
            text: '单位：亿元',
            top: '15%',
            left: '5%',
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
            trigger: 'item',
            formatter: '{b} : {c}亿元 ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'center',
            bottom: 'bottom',
          },
          series: [
            {
              name: '2020年龙华区政府投资项目计划结构分析',
              type: 'pie',
              radius: '55%',
              label: {
                formatter: function (p) {
                  // console.log(p);
                  let name = p.data.name.trim().replace(/(?=[\（|\(])/g, '\n');
                  return name + ':' + p.value + '亿元(' + p.percent + '%)\n';
                },
              },
              center: ['50%', '50%'],
              data: [
                {value: 146, name: '公共预算'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
            },
          ]
        },
      };
    },
    methods: {},
    created() {
      let __timeSet__ = ["1月1日", "1月2日", "1月3日", "1月4日", "1月5日", "1月6日", "1月7日", "1月8日", "1月9日", "1月10日"];
      let __data__ = [
        {
          name: "一般公共预算",
          value: [1470.09, 0.04, -0.47, 1535.44, 5498.39, 4407.86, 3200.38, 2263.26, 0.05, 0.01]
        },
        {
          name: "政府性基金预算",
          value: [1470.09, 0.04, -0.47, 1535.44, 5498.39, 4407.86, 3200.38, 2263.26, 0.05, 0.01]
        },
        {
          name: "国有资本经营预算",
          value: [1470.09, 0.04, -0.47, 1535.44, 5498.39, 4407.86, 3200.38, 2263.26, 0.05, 0.01]
        }
      ];
      // 图1国库集中支付
      this.opt2 = {
        title: [{
          text: "2020年龙华区国库集中支付三本预算每天支付金额",
          x: 'center',
          top: '3%',
          // textStyle: options.textStyle
        }, {
          text: '单位: 万元',
          x: '7%',
          top: '4%',
          textStyle: {
            fontWeight: 'normal',
            // fontSize: options.yAxis_fontSize
          }
        }],
        tooltip: {
          trigger: 'axis',
          // textStyle: options.tooltip_font_size,
          formatter: function (params) {
            params = $(params).sort((a, b) => a.seriesIndex - b.seriesIndex);
            let html = params[0].name + '<br>';
            $(params).each(function () {
              html += this.marker + this.seriesName + ':' + this.value + "万元" + '<br>'
            });
            return html;
          }
        },
        toolbox: {
          right: "10%",
          show: true,
          top: "5%",
          feature: {
            dataView: {show: true},
            restore: {show: true},
            saveAsImage: {show: true},
            magicType: {
              show: true,
              type: ["line", "bar", "stack"]
            }
          }
        },
        axisPointer: {
          type: 'shadow',
          link: {
            xAxisIndex: 'all'
          }
        },
        grid: function () {
          let _top;
          let dd = [], top = 60,
            height = 80,
            inteval = 25;
          for (let i = 0; i < 3; i++) {
            dd.push({
              left: '15%',
              right: '8%',
              bottom: '12%',
              top: function () {
                if (i == 0) {
                  return top;
                } else if (i == 1) {
                  return top + height + inteval;
                } else if (i == 2) {
                  return top + (height + inteval) * 2;
                }
              }(),
              height: height
            });
          }
          return dd;
        }(),
        xAxis: function () {
          let dd = [];
          for (let i = 0; i < 3; i++) {
            dd.push({
              type: 'category',
              gridIndex: i,
              data: Array.from(__timeSet__),      //统一时间轴数据
              axisLabel: {
                show: i == 2 ? true : false,
                margin: 15,
                // fontSize: options.yAxis_axisLabel_fontSize
              },
              axisTick: {show: i == 2 ? true : false}
            })
          }
          return dd;
        }(),
        yAxis: function () {
          let dd = [];
          $.each(__data__, function (i) {
            dd.push({
              type: 'value',
              name: this.name,
              nameLocation: 'middle',
              nameGap: '120',
              gridIndex: i,
              // splitNumber: 3,
              // nameTextStyle: {fontSize: options.yAxis_fontSize},
              // axisTick: {show: false},
              // axisLabel: {fontSize: options.yAxis_axisLabel_fontSize, show: options.group ? true : false},
              // axisTick:{show: options.group ? true : false}
            })
          });
          return dd;
        }(),
        dataZoom: [{    //dataZoom 组件 用于区域缩放
          type: 'slider',
          // bottom: 5,
          xAxisIndex: [0, 1, 2],
          realtime: true,
          textStyle: {
            // fontSize: options.yAxis_axisLabel_fontSize,
          },
          // backgroundColor:'#000',
          //移动端展示方式
          handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '140%',
        }/*,{
                    type: 'inside'
                }*/],
        series: function () {
          let dd = [];
          $.each(__data__, function (index) {
            dd.push({
              type: 'line',
              name: this.name,
              xAxisIndex: index,
              yAxisIndex: index,
              data: this.value
            })
          });
          return dd;
        }()
      };
      let min_yAxis = -30, max_yAxis = 30, xAxis = 5;
      let __data2 = [
        {
          name: "2020年龙华区一般公共预算支出增速和占比分析(按功能科目)",
          value: [
            [16.23, 31.4, 50.93, "一般公共服务支出", "2020年预算比2019年预算增加率"],
            [0, 0, 0, "外交支出", "2020年预算比2019年预算增加率"],
            [0, 0, 0, "国防支出", "2020年预算比2019年预算增加率"],
            [5.76, 0, 18.07, "公共安全支出", "2020年预算比2019年预算增加率"],
            [16.16, 8.8, 50.7, "教育支出", "2020年预算比2019年预算增加率"]
          ]
        },
        {
          name: "2019年龙华区一般公共预算支出增速和占比分析(按功能科目)",
          value: [
            [12.35, 31.3, 38.76, "一般公共服务", "2019年预算比2018年预算增加率"],
            [0, 0, 0, "外交支出", "2019年预算比2018年预算增加率"],
            [0, 0, 0, "国防支出", "2019年预算比2018年预算增加率"],
            [5.76, -4.5, 18.07, "公共安全支出", "2019年预算比2018年预算增加率"],
            [14.86, 48.1, 46.62, "教育支出", "2019年预算比2018年预算增加率"],
          ]
        },
        {
          name: "2018年龙华区一般公共预算支出增速和占比分析(按功能科目)",
          value: [
            [9.41, 23.2, 29.52, "一般公共服务", "2018年预算比2017年预算增加率"],
            [0, 0, 0, "外交支出", "2018年预算比2017年预算增加率"],
            [undefined, 0, undefined, "国防支出", "2018年预算比2017年预算增加率"],
            [6.03, 2.2, 18.93, "公共安全支出", "2018年预算比2017年预算增加率"],
            [10.03, 16.2, 31.47, "教育支出", "2018年预算比2017年预算增加率"],
          ]
        }
      ];
      let sortValues = {
        "2018年": {0: "转移性支出", 1: "金融支出"},
        "2019年": {0: "城乡社区支出", 1: "农林水支出"},
        "2020年": {0: "城乡社区支出", 1: "转移性支出"},
      }
      //
      this.opt8 = {
        baseOption: {
          title: {
            text: '2020年龙华区一般公共预算支出增速和占比分析(按功能分析)',
            textAlign: 'center',
            x: '50%',
            top: '3%',
            // textStyle: options.textStyle
          },
          grid: {top: '15%', bottom: '10%', left: '10%', right: '13%'},
          toolbox: {
            show: true,
            top: '9%',
            right: '14%',
            feature: {
              dataView: {show: true},
              magicType: {show: true, type: ['line', 'bar', 'stack']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          timeline: {
            show: true,
            axisType: 'category',
            orient: 'vertical',
            // autoPlay: true,
            inverse: true,
            // playInterval: 3000,
            right: '3%',
            top: '5%',
            bottom: '5%',
            width: 80,
            label: {
              normal: {
                textStyle: {
                  color: '#202020',
                  // fontSize: options.yAxis_fontSize - 2
                }
              },
              emphasis: {
                textStyle: {
                  color: '#202020',
                  // fontSize: options.yAxis_fontSize - 2
                }
              }
            },
            // symbol: 'none',
            lineStyle: {
              color: '#555'
            },
            checkpointStyle: {
              color: '#f00',
              borderColor: '#f40000',
              borderWidth: 3,
            },
            controlStyle: {
              show: false,
              // showNextBtn: false,
              // showPrevBtn: false,
              // normal: {
              //     show: false,
              //     color: '#666',
              //     borderColor: '#666'
              // },
              // emphasis: {
              //     color: '#666',
              //     borderColor: '#666'
              // }
            },
            data: ["2020年", "2019年", "2018年"]
          },
          tooltip: {
            // padding: 5,
            // backgroundColor: '#222',
            // borderColor: '#777',
            borderWidth: 2,
            formatter: function (p) {
              if (p.value.length > 1) {
                return '名称: ' + p.value[3] + '<br>'
                  + '金额: ' + p.value[2] + '亿元<br>'
                  + '当年支出占比: ' + p.value[0] + '% <br> '
                  + p.value[4] + ': ' + p.value[1] + '%<br>';
              }
            },
            textStyle: {
              fontSize: 22
            }
          },
          xAxis: {
            type: 'value',
            name: '当年支出占比(%)',
            nameGap: 2,
            // min: 0,
            // max: 40,
            nameLocation: 'middle',
            // nameTextStyle: {fontSize: options.yAxis_fontSize},
            axisTick: {inside: false},
            splitLine: {
              show: true, lineStyle: {
                type: 'solid',
                // color: '#ddd'
              }
            },
            axisLabel: {
              showMinLabel: false,
              formatter: '{value}%',
              // fontSize: options.yAxis_axisLabel_fontSize
            },
          },
          yAxis: [
            {
              type: 'value',
              name: '同比增速(%)',
              // min: function(p){
              //    return Math.round(p.min-30);
              // },
              // max:function(p){
              //     return Math.round(p.max+30);
              // },
              // max: 600,
              axisLabel: {
                formatter: '{value}%',
                // fontSize: options.yAxis_axisLabel_fontSize
              },
              nameTextStyle: {
                // fontSize: options.yAxis_fontSize
              },
            }
          ],
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'quinticInOut'
        },
        options: function () {
          let dd = [];
          $.each(__data2, function () {
            let ovalue = this.value, oname = this.name, max = 0;
            ovalue.map(function (val, index, originai) {
              max = val[2] > max ? val[2] : max;
            });
            dd.push({
              title: {text: oname},
              series: {
                id: 'gridScatter',
                type: 'scatter',
                data: ovalue,
                symbolSize: function (val) {
                  let size = val[2] > 100 ? 100 : val[2];
                  return size > 10 ? size : 10;
                },
                itemStyle: {
                  normal: {
                    // opacity: 0.8,
                    // shadowBlur: 3,
                    // shadowOffsetX: 0,
                    // shadowOffsetY: 0,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    color: function (p) {
                      let v = p.value;
                      return (v[1] < min_yAxis || v[1] > max_yAxis) ? '#F00' : '#00b69d';
                    }
                  },
                },
                label: {
                  color: '#027066',
                  fontWeight: 'bold',
                  fontSize: 18,
                  emphasis: {
                    // position: 'top',
                    // color:'#f00',
                    // offset:[0, 0],
                    formatter: function (params) {
                      return params.value[3];
                    }
                  },
                  show: true,
                  offset: function () {
                    // let year = oname.substring(0, 4);
                    // if(year == 2019){
                    //     return [80,0]
                    // }else if(year == 2016){
                    //     return [100,0]
                    // }else {
                    //     return [110,0]
                    // }
                    return [110, 0]
                  }(),
                  width: 160,
                  rich: {},
                  formatter: function (p) {
                    let shows = "";
                    let year = p.data[4].substring(0, 5), v = p.data[1], t = p.data[3];
                    for (let i in sortValues[year]) {
                      if (!sortValues[year].hasOwnProperty(i)) continue;
                      if (sortValues[year][i] === t) {
                        shows = t
                      }
                    }
                    /*if (year == 2020) {
                        //shows = ['援助其他地区支出', '文化旅游体育与传媒支出', '其他支出', '交通运输支出',
                           // '科学技术支出', '住房保障支出', '公共安全支出', '预备费'];
                        if ( v > max_yAxis  ) {
                            return p.data[3];
                        }
                    } else if (year == 2019) {
                        shows = ['援助其他地区支出', '文化旅游体育与传媒支出', '其他支出', '交通运输支出', '转移性支出',
                            '科学技术支出', '住房保障支出', '公共安全支出', '预备费'];
                        if ((v < min_yAxis || v > max_yAxis || t == '一般公共服务支出' || t == '公共安全支出' || t == '一般公共预算支出合计') && $.inArray(t, shows) == -1) {
                            return p.data[3];
                        }
                    } else if (year == 2018) {
                        shows = ['援助其他地区支出', '医疗卫生与计划生育支出', '交通运输支出',
                            '科学技术支出', '社会保障和就业支出', '文化旅游体育与传媒支出', '文化体育与传媒支出', '住房保障支出'];
                        // if((v < min_yAxis || v > max_yAxis || t=='转移性支出' || t=='城乡社区支出' || t=='科学技术支出') && ($.inArray(p.data[3], shows) == -1)){
                        if ((v < min_yAxis || v > max_yAxis || t == '转移性支出' || t == '教育支出' || t == '城乡社区支出') && ($.inArray(p.data[3], shows) == -1)) {
                            return p.data[3];
                        }
                    } else if (year == 2017) {
                        shows = ['预备费', '农林水支出', '商业服务业等支出', '交通运输支出', '资源勘探信息等支出'];
                        if ((v < min_yAxis || v > max_yAxis || t == '一般公共服务支出' || t == '城乡社区支出' || t == '国防支出') && ($.inArray(p.data[3], shows) == -1)) {
                            return p.data[3];
                        }
                    }*/
                    return shows
                  }
                },
                markLine: {
                  silent: true,
                  symbol: 'none',
                  symbolSize: '0',
                  precision: 0,
                  label: {formatter: '{c}%'},
                  lineStyle: {
                    normal: {
                      width: 2,
                      color: '#f00',
                      // fontWeight:'bold',
                      type: 'dotted'
                    }
                  },
                  data: [
                    {yAxis: min_yAxis, value: '同比增速低阈值'},
                    {yAxis: max_yAxis, value: '同比增速高阈值'},
                    {xAxis: xAxis, value: '占比参考'}
                  ]
                }
              }
            })
          });
          return dd;
        }()
      }
    }
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
        position: relative;

        h3 {
          text-align: center;
          font-size: .3rem;
        }

        b {
          position: absolute;
          top: 3%;
          left: 10%;
          font-size: .28rem;
          font-weight: normal;

        }

        .srjg {
          width: 50%;
          margin: .3rem auto;
          display: flex;

          h3 {
            height: .8rem;
            /*line-height: .8rem;*/
            color: #ffffff;
          }

          h3:nth-of-type(1) {
            padding-top: .2rem;
            background-color: #0e7b6c;
            width: 95.42%;
          }

          h3:nth-of-type(2) {
            padding-top: .1rem;
            background-color: #ca8622;
          }
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
                transform: rotate(5deg);
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
