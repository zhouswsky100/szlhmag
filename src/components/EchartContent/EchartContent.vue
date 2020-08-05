<template>
  <div class="content">
    <div  class="list">
      <div class="item" style="border-right: none;">
         <slot name="top" ></slot>
      </div>
      <div class="item">
          <slot name="right"></slot>
      </div>
      <div class="item" style="border-right: none;">
          <slot name="bottom"></slot>
      </div>
      <div class="item">
          <slot name="left"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          data:[]
        };
    },
    name:  'EchartContent'

}
</script>
<style scoped>
  .content{
    background-color: #fff;
  }
  div{
	  display: flex;
    flex-wrap: wrap;
    margin: 0;
    width:100%
	}
  .item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-size: 14px;
    padding-top: 15px;
    padding-bottom: 15px;
    border: 1px solid #f1f1f1;
  }
</style>