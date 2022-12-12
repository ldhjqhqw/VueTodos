<template>
  <li
    @mouseenter="flag = true"
    @mouseleave="flag = false"
    :class="{ active: flag }"
  >
    <label>
      <input type="checkbox" :checked="todo.isOver" @click="updateOne" />
      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="flag" @click="deleteOne">
      删除
    </button>
  </li>
</template>

<script>
export default {
  props: ['todo', 'updateOneTodo', 'index', 'deleteOneTodo'],
  name: 'Item',
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    updateOne() {
      this.updateOneTodo(this.index);
    },
    deleteOne() {
      this.deleteOneTodo(this.index);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li.active {
  background-color: skyblue;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
