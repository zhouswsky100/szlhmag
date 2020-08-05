<template>
    <div class="cont">
        <p class="title">深圳市龙华区本级预算查询</p>
            <div class="boxs">
                <div class="box bk g-mt-50 cursor">
                    <p class="boxtxt">政府投资</p>
                    <p class="g-mt-10"  v-if="finData.zftz!=null">安排年度投资：{{finData.zftz.basevalue2}}亿元</p>
                </div>
                <div class="box2">
                    <div class="box bk cursor"  @click="goUrl('/basedata')" style="background-color: #23bfff;position: relative;top: -20px;z-index:999">
                        <p class="boxtxt">一般公共预算</p>
                        <p class="g-mt-10" v-if="finData.ggys!=null">总收支：{{finData.ggys.income}}亿元</p>
                    </div>
                    <div class="box bk g-mt-50 cursor"  style="background-color: #24C16B;z-index:999">
                        <p class="boxtxt">政府性</p>
                        <p class=" boxtxt g-mt-5">基金预算</p>
                        <p class="g-mt-10" v-if="finData.zfxjj!=null">总收支：{{finData.zfxjj.income}}亿元</p>
                    </div>
               </div>
                <div class="box bk g-mt-50 cursor"  style="background-color: #F86F8D;">
                    <p class="boxtxt">国有资本</p>
                    <p class=" boxtxt g-mt-5">经营预算</p>
                    <p class="g-mt-10" v-if="finData.gyzb!=null">总收支：{{finData.gyzb.income}}亿元</p>
                </div>
                <div class="zimg1">
                    <div class="arrow1"> <img src="../../assets/images/final/arrow4.png"></div>
                </div>
                <div class="zimg2">
                    <div class="arrow2"> <img src="../../assets/images/final/arrow3.png"></div>
                </div>
                 <div class="zimg3">
                    <div class="arrow3"> <img src="../../assets/images/final/arrow2.png"></div>
                </div>
                 <div class="zimg4">
                    <div class="arrow4"> <img src="../../assets/images/final/arrow1.png"></div>
                </div>
             </div>
    </div>
</template>
<script>
import {toCKJMapPage} from "@/api/budget/";
import  '@/assets/css/index.css' 
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import store from '@/store';
    export default {
        data() {
            return {
                finData:'',
                year:this.$route.query.year
            }
        },
        components: {
            ToolBar
        },
        methods: {
             initData(){
                let params = {
                    year:this.year,	
                }
                toCKJMapPage(params).then(res => {
                    if (res.code === 200) {
                        this.finData = res.data
                    }
                });
            },
            goUrl(url){
                this.$router.push({path:url, query:{ year:this.year }})
            }
        },
        created() {

        },
        mounted(){
            this.initData();
        }
    }

</script>

<style scoped>
    .title{
        font-size: 22px;
        color: #282E3E;
        text-align: center;
        font-family: PingFang-SC-Medium;
        margin-top: 20px;
    }
    .box{
        width: 200px;
        height: 200px;
        background-color: #ff67cd;
        border-radius: 50%;
        box-sizing: content-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }
    .bk{
        border: 8px solid #fff;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.3);
        color: #fff;
    }
    .boxtxt{
        font-weight: bold;
        font-size: 18px;
    }
    .boxs{
        display: flex;
        justify-content: space-around;
        margin-top: 100px;
    }
    .zimg1{
        position: absolute;
        top: 58%;
        left: 23%;
    }
    .arrow1{
       width: 38%;
    }
    .zimg2{
        position: absolute;
        top: 18%;
        left: 25%;
    }
    .arrow2{
       width: 44%;
       transform: rotate(120deg);
      -webkit-transform: rotate(120deg);
    }
    .zimg3{
        position: absolute;
        top: 53%;
        left: 44%;
    }
    .arrow3{
       width: 23%;
    }
    .zimg4{
        position: absolute;
        top: 30%;
        left: 58%;
    }
    .arrow4{
       width: 45%;
    }
    .boxs img{
        max-width: 100%;
    }
    .box2{
        display: flex;
        flex-direction: column;
    }
    .g-mt-50{
        margin-top: 50px;
    }
    .arrow1{
       width: 38%;
    }
    .cont{
        position: absolute;
        width: 100%;

    }
</style>
