<template>
    <ToolBar>
        <div class="roate-container">
            <div class="screen-bg"></div>
            <div id="roate1">
              <div class="roate-item icon-roate-1 h-dc" @click="showDig(0),title='预决算'"></div>
                 <div class="roate-item"></div>
                <div class="imgs"><div class="roate-item icon-roate-2 h-dc" @click="showDig(1),title='财政'"></div></div>
                 <div class="roate-item"></div>
               <div class="imgs"> <div class="roate-item icon-roate-3 h-dc" @click="showDig(2),title='自然资源'"></div></div>
                <div class="roate-item"></div>
               <div class="imgs"> <div class="roate-item icon-roate-4 h-dc"    @click="showDig(3),title='统计'"></div></div>
                <div class="roate-item"></div>
                <div class="imgs">   <div class="roate-item icon-roate-5 h-dc" @click="showDig(5),title='审计'"></div></div>
                <div class="roate-item"></div>
                <div class="imgs"> <div class="roate-item icon-roate-6 h-dc" @click="showDig(4),title='税务'"></div></div>
                <div class="roate-item"></div>
                 <div class="imgs"> <div class="roate-item icon-roate-7 h-dc" @click="showDig(6),title='国资'"></div></div>
                <div class="roate-item"></div>
                <div class="imgs">  <div class="roate-item icon-roate-8 h-dc" @click="showDig(7),title='发改'"></div></div>
                <div class="roate-item"></div> 
            </div>
        </div>  
        <div class="drwaerCont">
            <el-drawer
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose"
                size="30%"
                >
                <div v-for="item in drwlist">
                 <div >
                   <div class="tag-group">
                    <el-tag
                        type=""
                        effect="plain">
                        实时推送
                    </el-tag>
                    </div> 
                    <span class="g-pl-15 h-dc" @click="goDetail()">{{item.name}}(2020-05-20)</span>
                     <i class="el-icon-view fa h-dc" ></i>
                 </div>
                    <el-divider></el-divider>
                </div>

                <span slot="title">{{title}}</span>
            </el-drawer>     
        </div>
    </ToolBar>
</template>
<script>
import  '@/assets/css/index.css' 
import { getTest } from "@/api/login";
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import store from '@/store';
    export default {
        data() {
            return {
                drawer: false,
                direction: 'rtl',
                title:"",
                index:'0',
                drwlist:[]
            }
        },
        components: {
            ToolBar
        },
        methods: {
            test(){
                getTest().then(res => {
                    
                });
            },
            showDig(index){
               this.index = index 
               this.drawer = true
               this.drwlist = this.$Config.searchData[index]
            },
            handleClose(done) {
                 done();   
            },
            goDetail(){
              let path = `/search/detail${this.index}`
              this.$router.push(path)

            }
        },
        created() {

        },
        mounted(){
            $(function() {
                $('#roate1').Roate({
                    R: 203,
                    cx: 336,
                    cy: 284,
                    step: 1,
                    delay: 50
                });
            }) 
            $.fn.Roate = function(opts) {
                var roateInter = null;
                var $this = this;
                opts = $.extend({
                    R: 200,
                    R0: 0,
                    cx: 0,
                    cy: 0,
                    step: 5,
                    delay: 100,
                    direction: true,
                    roateItem: '.roate-item'
                },
                opts || {});
                var width = $this.width();
                var height = $this.height();
                if (!opts.cx) {
                    opts.cx = width / 2;
                }
                if (!opts.cy) {
                    opts.cy = height / 2;
                }
                var $item = $this.find(opts.roateItem);
                var size = 16;
                var roate = 0;
                opts.R0 = opts.R0 == 0 ? opts.R: opts.R0;
                roateInter = setInterval(function() {
                    for (var i = 0; i < size; i++) {
                        var left = opts.cx + opts.R * Math.sin(Math.PI / 180 * (roate + 360 * i / size));
                        var top = opts.cy + opts.R0 * Math.cos(Math.PI / 180 * (roate + 360 * i / size));
                        var $roate = $item.eq(i);
                        var rheight = $roate.height() / 2;
                        var rwidth = $roate.width() / 2;
                        $roate.css({
                            left: left - rheight,
                            top: top - rwidth
                        });
                    };
                    if (opts.direction) {
                        roate -= opts.step;
                    } else {
                        roate += opts.step;
                    }
                },
                opts.delay);
                this.parent().mousemove(function(event) {
                    if (event.offsetX < width / 2) {
                        opts.direction = false;
                    } else {
                        opts.direction = true;
                    }
                });
            };
        }
    }

</script>

<style scoped>


.drwaerCont /deep/.el-drawer__header {
 font-size: 24px;
 background-color: rgb(24, 144, 255);
 color: #fff;
 padding-bottom: 20px;
 margin-bottom: 10px;
}
.drwaerCont /deep/ button{
    border: none;
    outline: none; 
}
.drwaerCont /deep/ .el-drawer__body {
    display: block;
    padding-left: 15px;
    margin-top: 5px;
}

.drwaerCont /deep/ .el-divider--horizontal {
    margin: 10px 0;
}

.fa{
    position: relative;
    top: 2px;
    font-size: 20px;
    left: 10px;
}
</style>
