<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        screenWidth: document.body.clientWidth,
        timer: false
      }
    },
    mounted() {
      const that = this;
      window.onresize = () => {
        return (() => {
          that.screenWidth = document.body.clientWidth
          // 页面开始加载时修改font-size
          const html = document.getElementsByTagName("html")[0];
          // 这里的750是指设计图的大小,自己根据实际情况改变
          html.style.fontSize = that.screenWidth / 22 + "px";
        })()
      }
      const html = document.getElementsByTagName("html")[0];
      // 这里的750是指设计图的大小,自己根据实际情况改变
      html.style.fontSize = that.screenWidth / 22 + "px";
    },
    watch: {
      screenWidth(newValue) {
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer) {
          // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
          this.screenWidth = newValue
          this.timer = true
          let that = this
          setTimeout(function () {
            // 打印screenWidth变化的值
            console.log(that.screenWidth)
            that.timer = false
          }, 400)
        }
      }
    },
  }
</script>
