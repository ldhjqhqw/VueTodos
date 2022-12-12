<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allCheck" />
    </label>
    <span>
      <span>已完成{{ checkNum }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="deleteCheck">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ['todos', 'updateAllTodo', 'deleteCheckTodo'],
  name: 'Footer',
  computed: {
    //已完成数量
    // reduce
    // 功能: 累加器
    // 参数: 回调函数(形参可以接收 初始值或者上一次的值 每一项 每一项所对应下标) 初始值
    // 结果: 累加之后的值
    checkNum() {
      return this.todos.reduce((prev, item) => {
        console.log(prev);
        if (item.isOver) {
          prev += 1;
        }
        return prev;
      }, 0);
    },
    //全选按钮
    allCheck: {
      get() {
        //根据todos中每一项是否都选中返回true，有一项不选中返回false
        //every
        //功能：判断数组中每一项元素是否都符合条件
        return this.todos.every(item => item.isOver);
      },
      set(newVal) {
        // 拿到最新修改的全选值 根据这个全选值 修改数组当中的每一项
        this.updateAllTodo(newVal);
      },
    },
  },
  methods: {
    deleteCheck() {
      this.deleteCheckTodo();
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
