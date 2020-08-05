<template>
  <div class="container">
    <h1>龙华区2019年度国有资产管理情况</h1>
    <el-row>
      <el-card class="box-card" style="padding-top: 0">
        <div class="top">
          <ul>
            <li><a href="#">本级企业国有资产</a></li>
          </ul>
          <div>
            <a href="#" style="color: #000000">更多</a>
          </div>
        </div>
      </el-card>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="15">
        <el-card class="box-card">
          <h2><a href="#">2019年国有资产效益情况表</a></h2>
          <div class="content">
            <el-table
              :data="tableData1"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="项目">
              </el-table-column>
              <el-table-column
                prop="zindex"
                label="行次"
                width="50">
              </el-table-column>
              <el-table-column label="营业收入(万元)">
                <el-table-column
                  prop="data1"
                  label="2018">
                </el-table-column>
                <el-table-column
                  prop="data2"
                  label="2019">
                </el-table-column>
              </el-table-column>
              <el-table-column label="利润总额(万元)">
                <el-table-column
                  prop="data3"
                  label="2018">
                </el-table-column>
                <el-table-column
                  prop="data4"
                  label="2019">
                </el-table-column>
              </el-table-column>
              <el-table-column label="净利润(万元)">
                <el-table-column
                  prop="data5"
                  label="2018">
                </el-table-column>
                <el-table-column
                  prop="data6"
                  label="2019">
                </el-table-column>
              </el-table-column>
              <el-table-column label="国有净利润(万元)">
                <el-table-column
                  prop="data7"
                  label="2018">
                </el-table-column>
                <el-table-column
                  prop="data8"
                  label="2019">
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>

        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card class="box-card">
          <h2><a href="#">2019年龙华区国有资产情况报告</a></h2>
          <div class="content">
            <el-table
              border
              @row-click="test"
              :show-header=false
              :data="tableData"
              style="width: 100%">
              <el-table-column
                type="index">
              </el-table-column>
              <el-table-column
                prop="address">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: "",
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
          address: '龙华区国资局关于报送龙华区2019年度企业国有资产专项报告的函'
        }, {
          address: '深圳市龙华区人民政府关于报送龙华区2018年度企业国有资产（不含金融企业）管理情况专项报告的函'
        }],
        tableData1: [{
          date: '一、本级企业国有资产（不含金融企业）',
          zindex: 1,
          data1: '101888.8',
          data2: '120854.86',
          data3: '29885.77',
          data4: '46135.06',
          data5: '27982.53',
          data6: '40364.36',
          data7: '0',
          data8: '0'
        }]
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

      .top {
        min-height: 3.5rem;
        position: relative;

        ul {
          height: .6rem;
          line-height: .6rem;
          border-bottom: 1px solid #cccccc;

          li {
            width: 3rem;
            text-align: center;
            font-size: .3rem;
            background-color: #00afff;

            a {
              color: #ffffff;
            }
          }
        }

        div {
          position: absolute;
          top: .1rem;
          right: 0;

          a{
            font-size: .3rem;
          }
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
