const tableData = {
    "2020/cityAnnualRepaymentPlan": [
        {
            "label": "债券类型"
        },{
            "label": "地区"
        }, {
            "label": "2019年末余额"
        }, {
            "label": "2020年"
        }, {
            "label": "2021年"
        },{
            "label": "2022年"
        },{
            "label": "2023年"
        },{
            "label": "2023年"
        },{
            "label": "2024年及以后年度"
        },{
            "label": "偿还资金来源"
        }
    ],
    "2020/cityDebtLimitBalance": [
        {
            "label": "地区"
        },{
            "label": "2019年债务限额"
        }, {
            "label": "2019年债务余额预计执行数"
        }, {
            "label": "合计"
        }, {
            "label": "一般债务"
        },{
            "label": "专项债务"
        },{
            "label": "合计"
        },{
            "label": "一般债务"
        },{
            "label": "专项债务"
        }
    ],
    "2020/cityGeneralDebtBalance": [
        {
            "label": "项目"
        },{
            "label": "预算数"
        }, {
            "label": "执行数"
        }
    ],
    "2020/cityIssuanceRepaymentInterest": [
        {
            "label": "项目"
        },{
            "label": "本地区"
        }, {
            "label": "本级"
        }
    ],
    "2020/cityLimitsIssuedAdvance": [
        {
            "label": "项目"
        },{
            "label": "本地区"
        }, {
            "label": "本级"
        }, {
            "label": "下载"
        }
    ],
    "2020/citySpecialDebtBalance": [
        {
            "label": "项目"
        },{
            "label": "预算数"
        }, {
            "label": "执行数"
        },
    ],
}
export default {
    getTbaleData: function() {
        return tableData;
    }
}