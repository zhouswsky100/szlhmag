<template>
  <div :id=id :data=data></div>
</template>

<script>
  export default {
    name: "Echart",
    props: ["id", "data"],
    data() {
      return {
        ChartLineGraph: null,
      }
    },
    //  深度监听 父组件刚开始没有值，只有图标的配置项
    //  父组件ajax请求后改变数据的值，传递过来，图标已生成，监听传过来的值的改变
    // deep:true.深度监听，确保data中子项修改也能监听到。写法参考：https://cn.vuejs.org/v2/api/#watch
    watch: {
      data: {
        handler(newvalue,oldValue) {
          this.drawLineGraph(this.id, newvalue);
        },
        deep: true
      }

    },
    mounted() {
      this.drawLineGraph(this.id, this.data);

    },
    methods: {
      drawLineGraph(id, data) {
        // console.log(id);
        let _this = this;
        let myChart = document.getElementById(id)
        this.ChartLineGraph = this.$echarts.init(myChart)
        this.ChartLineGraph.setOption(data);
        window.addEventListener("resize", function () {
          _this.ChartLineGraph.resize();
        })
      }
    },
    beforeDestroy() {
      if (this.ChartLineGraph) {
        this.ChartLineGraph.clear();
      }
    }
  }
</script>

<style scoped>
  div{
    width: 100%;
    height: 100%;
  }
</style>
