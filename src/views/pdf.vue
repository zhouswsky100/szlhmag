<template>
  <div>
    <h1>pdf预览页面</h1>
<!--    <pdf src="../assets/test.pdf"></pdf>-->
        <pdf src="@/assets/test.pdf"></pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    components: {
      pdf
    },
    name: "test",
    data() {
      return {}
    },

  }
</script>

<style scoped>

</style>
