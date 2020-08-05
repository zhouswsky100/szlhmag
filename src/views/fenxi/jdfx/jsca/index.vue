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
              <h2><a href="#js_ca1">一、预算总体情况</a></h2>
              <ul class="sec-menu">
                <li><a href="#js_ca1">全口径决算统筹关系分析</a></li>
                <li><a href="#js_ca2">收支规模分析</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#js_ca3">二、一般公共预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#js_ca3">一般公共预决算支出规模分析</a></li>
                <li><a href="#js_ca4">民生支出结构分析</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_zx5">三、政府性基金预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_zx5">国土基金收支分析</a></li>
              </ul>
            </li>
            <li>
              <h2><a href="#ys_zx6">四、国有资本经营预算</a></h2>
              <ul class="sec-menu">
                <li><a href="#ys_zx6">国有资本收入决算结构分析</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </el-drawer>
    </div>
    <!--  数据展示  -->

    <div class="item">
      <h2>一、预算总体情况</h2>
      <el-card class="box-card" id="js_ca1">
        <h3>2020年龙华区全口径预算统筹关系</h3>
        <div class="content">
          <div class="left">
            <div class="ys-radio">
              <div class="radio">
                <h3>一般公共预算</h3>
                <p>总收支：333.17亿元</p>
              </div>

            </div>
          </div>
          <div class="center">
            <div class="top">
              <p>调入一般公共预算统筹使用0亿</p>
            </div>
            <div class="bottom">
              <p>国有资本预算调入0.0042亿</p>
            </div>
          </div>
          <div class="right">
            <div class="ys-radio">
              <div class="radio">
                <h3>政府性基金预算</h3>
                <p>总收支：64.57亿元</p>
              </div>

            </div>
            <div class="ys-radio">
              <div class="radio">
                <h3>国有资本经营预算</h3>
                <p>总收支：0.02亿元</p>
              </div>

            </div>
          </div>
        </div>


      </el-card>
      <el-card class="box-card" id="js_ca2">
        <div class="content">
          <echart :id="'js2'" :data="opt2"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>二、一般公共预算执行情况</h2>
      <el-card class="box-card" id="js_ca3">
        <div class="content">
          <echart :id="'js3'" :data="opt3"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="js_ca4">
        <div class="content">
          <echart :id="'js4'" :data="opt4"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="js_ca5">
        <div class="content">
          <echart :id="'js5'" :data="opt5"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca6">
        <div class="content">
          <echart :id="'js6'" :data="opt6"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca7">
        <h3>2018年龙华区一般公共预算收入结构情况</h3>
        <b>单位:亿元</b>
        <div class="srjg">
          <h3>税收收入占比95.41%</h3>
          <h3>非税收入占比4.59%</h3>
        </div>
        <div class="content">
          <div class="left">
            <echart :id="'ys7'" :data="opt7"></echart>
          </div>
          <div class="right">
            <echart :id="'ys8'" :data="opt8"></echart>
          </div>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca9">
        <div class="content">
          <echart :id="'js9'" :data="opt9"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca10">
        <div class="content">
          <echart :id="'js10'" :data="opt10"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca11">
        <div class="content">

        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>三、政府性基金预算</h2>
      <el-card class="box-card" id="ys_ca12">
        <div class="content">
          <echart :id="'js12'" :data="opt12"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca13">
        <div class="content">

        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca14">
        <div class="content">
          <echart :id="'js14'" :data="opt14"></echart>
        </div>
      </el-card>
      <el-card class="box-card" id="ys_ca15">
        <div class="content">
          <echart :id="'js15'" :data="opt15"></echart>
        </div>
      </el-card>
    </div>
    <div class="item">
      <h2>四、国有资本经营预算</h2>


      <el-card class="box-card" id="ys_ca16">
        <div class="content">
          <echart :id="'js16'" :data="opt16"></echart>
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
        opt2: {
          title: [{
            text: '2017年-2018年龙华区决算支出规模及增速',
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
              data: ['2017年', '2018年'],
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
              data: [402.7, 333.17],
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
              data: [99.47, 64.57],
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
              data: [0, 0.01],
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
              data: [, -17.27],
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
              data: [0, -35.09],
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
              data: [0, 0],
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
        opt3: {
          title: [{
            text: '2017年-2018年龙华区一般公共预决算支出规模情况',
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
              {name: '预算数'}, {name: '预算调整数'},
              {name: '决算数'},
            ],

          },
            {
              y: 'bottom',
              x: 'center',
              data: [
                {name: '预算数增速(%)', icon: 'line'},
                {name: '预算调整数增速(%)', icon: 'line'},
                {name: '决算数增速(%)', icon: 'line'},
              ],
              selected: function () {
                let o = {};
                o["预算数增速(%)"] = false
                o["预算调整数增速(%)"] = false
                o["决算数增速(%)"] = false
                return o;
              }(),
            }
          ],
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['2017年', '2018年'],
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
              name: '预算数',
              type: 'bar',
              data: [267.39, 295],
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
              name: '预算调整数',
              type: 'bar',
              data: [333.25, 298],
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
              name: '决算数',
              type: 'bar',
              data: [402.7, 333.17],
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
              name: '预算数增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [0, 10.33],
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
              name: '预算调整数增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [0, -11.11],
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
              name: '决算数增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [0, -17.27],
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
            text: '2017年-2018年龙华区一般公共预算收入情况',
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
            data: ['税收收入', '非税收收入', '转移性收入']
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
              data: ['2017', '2018']
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
              name: '税收收入',
              type: 'bar',
              stack: 'in',
              barGap: 0,
              barWidth: 100,
              data: [115.83, 127.26]
            },
            {
              name: '非税收收入',
              type: 'bar',
              stack: 'in',
              data: [4.97, 6.12]
            },
            // {
            //   name: '转移性收入',
            //   type: 'bar',
            //   stack: 'out',
            //   barWidth: 100,
            //   data: [242.31, 247.84, 264.9]
            // }
          ]
        },
        opt5: {
          title: [{
            text: '龙华区一般公共预算支出结构(按功能科目)',
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
        opt6: {
          title: [{
            text: '龙华区一般公共预算支出结构(按经济类科目)',
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
                formatter: function (p) {
                  // console.log(p);
                  let name = p.data.name.trim().replace(/(?=[\（|\(])/g, '\n');
                  return name + ':' + p.value + '亿元(' + p.percent + '%)\n';
                },
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
        opt7: {
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
        opt8: {
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
        opt9: {
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
            },
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
        opt10: {
          title: [{
            text: '2017年-2018年龙华区一般公共预算民生类总支出',
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
              {name: '民生类支出（亿元）'},
              {name: '占一般公共预算比例(%)', icon: 'line'},
              {name: '增速(%)', icon: 'line'},
            ],
            selected: function () {
              let o = {};
              o["占一般公共预算比例(%)"] = false
              o["增速(%)"] = false
              return o;
            }(),
          }
          ],
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['2017年', '2018年'],
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
              name: '民生类支出（亿元）',
              type: 'bar',
              data: [122.44, 155.54],
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
              name: '占一般公共预算比例(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [30.4, 46.68],
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
              name: '增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [0, 27.03],
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
        opt12: {
          title: [{
            text: '2017年-2018年龙华区政府性基金及国土基金收入趋势分析',
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
              {name: '政府性基金收入'},
              {name: '政府性基金增速(%)', icon: 'line'},
              {name: '国有土地使用权出让收入总额'},
              {name: '国有土地增速(%)', icon: 'line'},
            ],
            selected: function () {
              let o = {};
              o["政府性基金增速(%)"] = false
              o["国有土地增速(%)"] = false
              return o;
            }(),
          }
          ],
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['2017年', '2018年'],
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
              name: '政府性基金收入',
              type: 'bar',
              data: [99.47, 64.57],
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
              data: [0, 0],
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
              name: '政府性基金增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [0, -35.09],
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
              name: '国有土地增速(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [0, 0],
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
        opt14: {
          title: [{
            text: '龙华区国有土地出让权收入结构情况',
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
              name: '龙华区国有土地出让权收入结构情况',
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
                {value: 64.57, name: '政府性基金收入'},
                {value: 333.17, name: '一般公共预算收入'}
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
        opt15: {
          title: [{
            text: '2017年-2018年龙华区政府性基金收支决算结构情况',
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
              {name: '国有土地出让权收入'},
              {name: '一般公共预算收入'},
              {name: '政府性基金收入'},
              {name: '结构分析值(%)', icon: 'line'},
            ],
            selected: function () {
              let o = {};
              o["结构分析值(%)"] = false
              return o;
            }(),
          }
          ],
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['2017年', '2018年'],
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
              name: '国有土地出让权收入',
              type: 'bar',
              data: [0, 0],
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
              name: '一般公共预算收入',
              type: 'bar',
              data: [402.7, 333.17],
              barMaxWidth: '20%',
            },
            {
              name: '政府性基金收入',
              type: 'bar',
              data: [99.47, 64.57],
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
              },
              barMaxWidth: '20%',
            }, {
              name: '结构分析值(%)',
              type: 'line',
              lineStyle: {
                width: 5,
                type: 'solid'  //'dotted'虚线 'solid'实线
              },
              yAxisIndex: 1,
              data: [0, 0],
              label: {
                normal: {
                  textStyle: {
                    color: '#000',
                  },
                  show: false,
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
            bottom: 'bottom'
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
                {value: 0.01, name: '利润收入'}
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

    /* 一般公共预算收入结构 */
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
