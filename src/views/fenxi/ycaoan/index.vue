<template>
  <EchartContent>
    <section slot="top">
      <div id="main" class="chart"></div>
      <router-link to="ysxq" style="color: #000000">预算草案详情</router-link>
    </section>
    <section slot="right">
      <div id="main2" class="chart"></div>
    </section>
    <section slot="bottom">
      <div id="main3" class="chart"></div>
    </section>
    <section slot="left">
      <div id="main4" class="chart"></div>
    </section>
  </EchartContent>
</template>

<script>
  import echarts from 'echarts'
  import charData from '@/moke/chart.js'
  import EchartContent from '@/components/EchartContent/EchartContent.vue';

  export default {
    data() {
      return {
        chartAllData: charData.getChatData(),
      }
    },
    components: {
      EchartContent
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('main'));
      var myChart2 = echarts.init(document.getElementById('main2'));
      var myChart3 = echarts.init(document.getElementById('main3'));
      var myChart4 = echarts.init(document.getElementById('main4'));
      myChart.setOption(this.chartAllData.orgOption1)
      myChart2.setOption(this.chartAllData.orgOption2);
      myChart3.setOption(this.chartAllData.orgOption1);
      myChart4.setOption(this.chartAllData.orgOption3);
    }
  }
</script>

<style lang="scss" scoped>
  .chart {
    width: 500px;
    height: 300px
  }
</style>
