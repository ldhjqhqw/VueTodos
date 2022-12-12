<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :updateOneTodo="updateOneTodo"
      :index="index"
      :deleteOneTodo="deleteOneTodo"
    ></Item>
  </ul>
</template>

<script>
import Item from '../Item/index.vue';
export default {
  //props接收数据是数组的形式
  props: ['todos', 'updateOneTodo', 'deleteOneTodo'],
  name: 'Main',
  components: {
    Item,
  },
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
