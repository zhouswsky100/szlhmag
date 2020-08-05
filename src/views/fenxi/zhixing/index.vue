<template>
  <div>
    <Draggable :list="list"></Draggable>
    <router-link to="zxxq" style="color: #000000">预算执行详情</router-link>
  </div>

</template>
<script>
  import Draggable from '@/components/Draggable/Draggable.vue';

  export default {
    data() {
      return {
        list: [
          {
            'name': '《中华人民共和国宪法》选节.pdf',
            'order': '1',
            'fixed': false,
          },
          {
            'name': '中华人民共和国预算法（主席令第12号）.pdf',
            'order': '2',
            'fixed': false,
          }, {
            'name': '中华人民共和国社会保险法（主席令第35号）.pdf',
            'order': '3',
            'fixed': false,
          }, {
            'name': '中华人民共和国环境保护税法.pdf  ',
            'order': '4',
            'fixed': false,
          }, {
            'name': '财政违法行为处罚处分条例（国务院令第427号）.pdf',
            'order': '5',
            'fixed': false,
          }, {
            'name': '中华人民共和国政府信息公开条例（国务院令第492号）.pdf',
            'order': '6',
            'fixed': false,
          }, {
            'name': '机关团体建设楼堂馆所管理条例（国务院令第688号）.pdf',
            'order': '7',
            'fixed': false,
          }
        ]
      }
    },
    components: {
      Draggable
    },
  }
</script>

<style>

</style>
