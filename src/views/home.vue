<template>
  <div class="content">
    <!--  标题部分  -->
    <div class="top">
      <h1><span>龙华区人大预算联网监督系统</span>2020年龙华区本级预算执行查询-分析-预警</h1>
      <div class="topMenu" @click="controlMenu">
        <span class="menuIcon"></span>
      </div>
      <div class="menu" v-show="showMenu">
        <ul>
          <!--<li><a href="/search">查询</a></li>-->
          <li><a @click="gourl('/search')">查询</a></li>
          <li><a @click="gourl('/fenxi/sjd/fenxi_ycaoan')">分析</a></li>
          <li><a @click="gourl('/yj')">预警</a></li>
          <li><a @click="gourl('/fgzc')">法规政策</a></li>
        </ul>
      </div>
    </div>
    <!--  执行查询中间布局  -->
    <div class="main">
      <div class="mainLeft">
        <div class="leftTop">
          <h3 class="title"><a href="#">国库拨付支付总量</a></h3>
          <div class="tab-1">
            <div class="tab-1-1">
              <span class="treasury_font_1"><a>国库年度拨付业务量</a></span>
              <img class="treasury_img_1" :src="imgUrl">
              <span class="treasury_value_1">
                <small>万笔</small><br>71
              </span>
            </div>
            <div class="tab-1-2">
              <span class="treasury_font_2"><a>国库年度支付业务量</a></span>
              <img class="treasury_img_2" :src="imgUrl2">
              <span class="treasury_value_2">
                144.42
                <br>
                <small>亿元</small>
              </span>
            </div>
          </div>
        </div>
        <div class="leftBottom">
          <h3 class="title"><a href="#">国有资产管理情况</a></h3>
          <div class="chart">
            <echart :id="'home1'" :data="opt1"></echart>
          </div>
        </div>
      </div>
      <div class="mainCenter">
        <h3 class="title">
          <img :src="imgUrl3" alt="执行" class="tab-3">
          <div class="tab-4">
            <a href="#">执行查询</a>
            <p class="time">数据更新时间：2020-06-24</p>
          </div>
          <img :src="imgUrl4" alt="执行" class="tab-5">
        </h3>
        <div class="main-content">
          <ul style="height: 100%">
            <li class="execute-echar">
              <h3><a href="#">一般公共预算</a></h3>
              <p>支出 127.65亿元&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp预算313.80亿元</p>
            </li>
            <li class="execute-echar">
              <h3><a href="#">政府性基金预算</a></h3>
              <p>支出 15.62亿元&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp预算127.48亿元</p>

            </li>
            <li class="execute-echar">
              <h3><a href="#">国有资本经营预算</a></h3>
              <p>支出 0亿元&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp预算0.75亿元</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="mainRight">
        <div class="rightTop">
          <h3 class="title"><a href="#">部门预算</a></h3>
          <div class="main-content">
            <div class="budget">
              <ul class="content-5">
                <li v-for="(item,index) in dep_budget" :key="index">
                  <p class="contentL"><a href="#">{{ (index+1) +'、'+ item.name}}</a></p>
                  <p class="contentR">
                    <i>收入：</i><span>{{ item.input }}</span>&nbsp&nbsp<i>支出：</i><span>{{ item.output }}</span></p>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div class="rightBottom">
          <h3 class="title"><a href="#">审计查出问题</a></h3>
          <div class="chart">
            <ul>
              <li>
                <echart :id="'home5'" :data="opt5"></echart>
              </li>
              <li>
                <echart :id="'home6'" :data="opt6"></echart>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--  政府投资项目计划底部  -->
    <div class="bottom">
      <div class="bottomLeft">
        <h3 class="title"><a href="#">分析<span class="xtitle">国库支付系统每天执行情况</span></a></h3>
      </div>
      <div class="bottomCenter">
        <h3 class="title"><a href="#">预警<span class="xtitle">一般性转移支付占转移支付比例预警</span></a></h3>
      </div>
      <div class="bottomRight">
        <h3 class="title"><a href="#">政府投资项目计划</a></h3>
        <div class="main-content">
          <ul class="content-8">
            <li v-for="(item,index) in gov_item">
              <p class="contentL"><a href="#">{{ (zindex===0?1+index:zindex+index)+'、'+item.name }}</a></p>
              <p class="contentR"><i>安排年度投资：</i><span>{{ item.all }}</span>&nbsp&nbsp<i>已安排投资：</i><span>{{ item.output }}</span>
              </p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Echart from "@/components/Echart/Echart";

  export default {
    name: "home",
    components: {
      Echart
    },
    data() {
      return {
        showMenu: false,
        imgUrl: require("../assets/images/home/treasury1.png"),
        imgUrl2: require("../assets/images/home/treasury2.png"),
        imgUrl3: require("../assets/images/home/hold.png"),
        imgUrl4: require("../assets/images/home/row.png"),
        dep_budget: [
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程",
            input: "0",
            output: "0",
          },

        ],
        zindex: 0,
        gov_item: [],
        gov_items: [
          {
            name: "龙华松和片区雨污分流管网完善工程1",
            all: "800万元",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程2",
            all: "800万元",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程3",
            all: "800万元",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程4",
            all: "800万元",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程5",
            all: "800万元",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程6",
            all: "800万元",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程7",
            all: "800万元",
            output: "0",
          },
          {
            name: "龙华松和片区雨污分流管网完善工程8",
            all: "800万元",
            output: "0",
          }

        ],
        opt1: {
          color: ['#ff6633', '#ffcc33'],
          title: {
            text: "本级企业国有资产(不含金融企业)\n 资产94.57元",
            x: 'center',
            top: 0,
            textStyle: {
              color: 'white',
              fontSize: 14,
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}亿元({d}%)",
            confine: true,
            textStyle: {
              align: 'left',
              color: 'white'
            }
          },
          legend: {
            orient: 'vertical',
            left: 'center',
            bottom: '7%',
            data: [{"value": "9.98", "name": "负债:9.98"}, {"value": "79.51", "name": "所有者权益:79.51"}],
            textStyle: {
              fontSize: 16,
              color: 'white'
            },
            formatter: '{name}亿元'
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: '45%',
              center: ['50%', '40%'],
              data: [{"value": "9.98", "name": "负债:9.98"}, {"value": "79.51", "name": "所有者权益:79.51"}],
              labelLine: {
                show: false
              },
              label: {
                show: false,
                position: 'inside'
              }
            }
          ]
        },
        opt5: {
          title: {
            text: '审计工作报告及整改',
            textStyle: {
              color: '#ffffff'
            },
            x: 'center',
          },
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
        opt6: {
          title: {
            text: '绩效审计报告及整改',
            textStyle: {
              color: '#ffffff',
            },
            x: 'center',
          },
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
              value: Math.round(0 * 100),
              name: '整改完成度',
            }
            ],
            axisLine: { // 坐标轴线
              show: true,
              lineStyle: { // 属性lineStyle控制线条样式
                width: 22,
                color: [
                  [0.0.toFixed(2), '#f73e50'],
                  [1, '#262795']
                ]
              },

            },
          }],
        },
      }
    },
    mounted() {
      this.gov_item = this.gov_items.slice(this.zindex, this.zindex + 4)
      setInterval(() => {
        if (this.zindex > (this.gov_items.length - 4)) {
          // console.log(this.zindex);
          this.zindex = 0
          this.setDepItem();
        } else {
          // console.log(this.zindex);
          this.setDepItem();
          this.zindex += 1
        }
      }, 3000)

    },
    watch: {},
    computed: {},
    methods: {
      controlMenu() {
        this.showMenu = !this.showMenu
      },
      gourl(url) {
        this.$router.push(url)
      },
      setDepItem() {
        let index = this.zindex;
        this.gov_item = this.gov_items.slice(index, index + 4)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .content {
    width: 100%;
    height: 100%;
    color: #ffffff;
    /*background-color: rgb(9, 36, 60);*/
    background-image: url("../assets/images/home/bgd.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .top {
    width: 100%;
    height: 13%;
    position: relative;
    background-image: url("../assets/images/home/title.jpg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    z-index: 9999;

    h1 {
      padding-top: 1%;
      background: linear-gradient(to right, #37c2ff, #00e4ff);
      -webkit-background-clip: text;
      color: transparent;
      text-align: center;
      font-size: .4rem;

      span {
        position: absolute;
        left: .85rem;
        color: #ffffff;
        font-size: .3rem;
      }
    }

    .topMenu {
      display: block;
      width: .8rem;
      height: .8rem;
      position: fixed;
      z-index: 10000;
      top: 0;
      right: .75rem;
      cursor: pointer;

      .menuIcon, .menuIcon:before, .menuIcon:after {
        display: block;
        width: 25px;
        height: 2px;
        background-color: rgb(39, 115, 230);
      }

      .menuIcon {
        position: relative;
        top: 50%;
        left: 25%;
      }

      .menuIcon:before {
        position: absolute;
        content: "";
        top: -7px;
      }

      .menuIcon:after {
        position: absolute;
        content: "";
        top: 7px;
      }
    }

    .menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9999;
      width: 2.3rem;
      /*height: 40%;*/
      background-color: rgba(9, 36, 60, 0.8);

      ul {
        width: 100%;
        height: 100%;
        margin: 0;
        padding-top: .8rem;
        text-align: center;

        li {
          color: #ffffff;
          font-size: .3rem;
          padding: .15rem;

          a:hover {
            color: rgb(39, 115, 230);
          }
        }

        li:hover {
          cursor: pointer;
          font-size: .35rem;
        }
      }
    }
  }

  .main {
    width: 100%;
    height: 57%;
    box-sizing: border-box;
    /*padding: 0 10px;*/
    display: flex;

    .mainLeft {
      height: 100%;
      flex: 1;

      .leftTop {
        width: 100%;
        height: 38%;
        position: relative;
        background-image: url("../assets/images/home/payment.png");
        background-repeat: no-repeat;
        background-size: 95% auto;
        background-position: center top;

        .tab-1 {
          width: 100%;
          height: 72%;
          background-image: url("../assets/images/home/pic.png");
          background-repeat: no-repeat;
          background-size: 90% auto;
          background-position: center top;

          .tab-1-1, .tab-1-2 {
            width: 80%;
            height: 50%;
            margin: 0 auto;
            position: relative;
            box-sizing: border-box;
          }

          .tab-1-1 {
            border-bottom: 1px dashed #80a7ff;

            .treasury_font_1 {
              position: absolute;
              bottom: .12rem;
              left: 0;

              a {
                font-size: .3rem;
                color: #ffffff;
              }
            }

            .treasury_img_1 {
              position: absolute;
              bottom: .05rem;
              right: -.25rem;
              width: 4rem;
              height: .8rem;
            }

            .treasury_value_1 {
              position: absolute;
              font-weight: bold;
              text-align: center;
              width: .8rem;
              height: .7rem;
              bottom: .05rem;
              right: .05rem;
              color: #ffffff;
              font-size: .3rem;
              font-weight: bold;
              cursor: pointer;
            }
          }

          .tab-1-2 {
            .treasury_font_2 {
              position: absolute;
              top: .12rem;
              left: 0;

              a {
                font-size: .3rem;
                color: #ffffff;
              }
            }

            .treasury_img_2 {
              position: absolute;
              top: .05rem;
              right: -.25rem;
              width: 4rem;
              height: .8rem;
            }

            .treasury_value_2 {
              position: absolute;
              font-weight: bold;
              text-align: center;
              width: .8rem;
              height: .7rem;
              top: .05rem;
              right: .05rem;
              color: #ffffff;
              font-size: .3rem;
              font-weight: bold;
              cursor: pointer;
            }
          }
        }
      }

      .leftBottom {
        width: 100%;
        height: 62%;
        position: relative;
        background-image: url("../assets/images/home/audit.png");
        background-repeat: no-repeat;
        background-size: 95% 95%;
        background-position: center top;
      }
    }

    .mainCenter {
      height: 100%;
      flex: 1;
      /*margin: 0 10px;*/
      background-image: url("../assets/images/home/executeQuery.png");
      background-repeat: no-repeat;
      background-size: 100% 97%;
      background-position: center top;

      .tab-3, .tab-4 {
        float: left;
      }

      .tab-3 {
        width: 16%;
      }

      .tab-5 {
        float: right;
        width: 16%;
      }

      .tab-4 {
        width: 68%;
        height: 100%;

        a {
          display: block;
          height: 50%;
          font-size: .3rem;
        }

        p {
          height: 50%;
          font-size: .3rem;
        }
      }
    }

    .mainRight {
      flex: 1;
      height: 100%;

      .rightTop {
        width: 100%;
        height: 38%;
        background-image: url("../assets/images/home/payment.png");
        background-repeat: no-repeat;
        background-size: 95% auto;
        background-position: center top;
      }

      .rightBottom {
        width: 100%;
        height: 62%;
        background-image: url("../assets/images/home/audit.png");
        background-repeat: no-repeat;
        background-size: 95% 95%;
        background-position: center top;


      }
    }
  }

  .bottom {
    width: 100%;
    height: 30%;
    box-sizing: border-box;
    display: flex;

    .bottomLeft {
      /*width: 35%;*/
      height: 100%;
      flex: 1;
      background-image: url("../assets/images/home/analysis.png");
      background-repeat: no-repeat;
      background-size: 95% 98%;
      background-position: center top;
    }

    .bottomCenter {
      /*width: 30%;*/
      height: 100%;
      flex: 1;
      background-image: url("../assets/images/home/early.png");
      background-repeat: no-repeat;
      background-size: 100% 98%;
      background-position: center top;
    }

    .bottomRight {
      /*width: 35%;*/
      height: 100%;
      flex: 1;
      background-image: url("../assets/images/home/analysis.png");
      background-repeat: no-repeat;
      background-size: 95% 98%;
      background-position: center top;
    }
  }

  .title {
    height: 22%;
    margin: 0;
    padding: .1rem;
    font-size: .3rem;
    color: #ffffff;
    text-align: center;

    .xtitle {
      margin-left: .3rem;
      font-size: .25rem;
    }
  }

  .chart {
    position: relative;
    top: -.3rem;
    height: 78%;

    ul {
      display: flex;
      height: 100%;
      padding: 0 .3rem;

      li {
        flex: 1;
      }
    }
  }

  .main-content {
    height: 78%;

    padding: 0 .35rem;

    .budget {
      overflow: hidden;
      height: 1.6rem;
    }

    .content-5 {
      height: 100%;
      animation: row 20s linear infinite;

      li {
        height: .4rem;
        line-height: .4rem;
        color: #ffffff;
        border-bottom: 1px solid #1f3369;

        .contentL {
          float: left;
          font-size: .25rem;
        }

        .contentR {
          float: right;
          font-size: .2rem;

          i {
            color: rgb(13, 177, 248);
          }

          span {
            color: #ca8622;
          }
        }
      }
    }

    .content-5:hover {
      animation-play-state: paused;
    }

    .content-8 {
      position: relative;
      top: -.2rem;
      height: 100%;

      li {
        height: 25%;
        box-sizing: border-box;
        color: #ffffff;
        border-bottom: 1px solid #1f3369;

        .contentL {
          text-align: left;
          font-size: .3rem;
        }

        .contentR {
          text-align: right;
          font-size: .2rem;
          padding-top: .05rem;

          i {
            color: rgb(13, 177, 248);
          }

          span {
            color: #ca8622;
          }
        }
      }

    }

    .execute-echar {
      position: relative;
      margin-top: 1%;
      height: 30%;
      background-color: #0d1d4d;
      border-radius: 20px;
      background-clip: padding-box;

      h3 {
        height: .75rem;
        line-height: .75rem;
        font-size: .35rem;
        padding-left: .3rem;
      }

      p {
        height: .6rem;
        line-height: .6rem;
        font-size: .25rem;
        padding-left: .3rem;
        color: rgb(13, 177, 248)
      }
    }
  }

  /*-------------------动画------------------------*/
  @keyframes row {
    0% {
    }
    100% {
      transform: translateY(-270%);
    }
  }
</style>
