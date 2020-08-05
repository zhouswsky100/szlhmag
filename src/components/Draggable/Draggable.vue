<template>
  <div class="fluid container">
    <div class="form-group form-group-lg panel panel-default">
      <div class="panel-body">
        <div class="checkbox">
          <label><input type="checkbox" v-model="editable"></label>
        </div>
        <el-button type="primary" @click="refList" plain>恢复原始</el-button>
      </div>
    </div>
    <div class="g-mt-20 ">
      <draggable class="list-group" tag="ul" v-model="dralist" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
        <transition-group type="transition" :name="'flip-list'">
         <!-- <li class="list-group-item" v-for="item in dralist" :key="item.order">
            {{item.name}}
            <span class="badge">{{item.order}}</span>
          </li>-->
          <table>
          <tr  v-for="item in dralist" :key="item.order">
            <td>{{item.order}}</td>
            <td>{{item.order}}</td>
            <td>{{item.order}}</td>
          </tr>
          </table>
        </transition-group>
      </draggable>
    </div>
    <el-button type="primary" class="g-mt-20" @click="btnOK"> 确定保存</el-button>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "Draggable",
  components: {
    draggable
  },
  props:{
        list: {
            type: Array,
            required: true,
        },
   },
  data() {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false,
      dralist:this.list
    };
  },
  methods: {
    refList() {
      this.dralist = this.dralist.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      console.log(this.dralist)
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    btnOK(){
      console.log(this.dralist)
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
};
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
  font-size:16px
}

.list-group-item i {
  cursor: pointer;
}
.container{
  margin:10px
}
</style>
