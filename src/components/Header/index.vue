<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你要输入的内容"
      v-model="content"
      @keyup.enter="addOne"
    />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['addOneTodo', 'todos'],
  data() {
    return {
      content: '',
    };
  },
  methods: {
    // 根据用户输入的内容拼装为一个对象 把这个对象放在todos当中
    //当按下enter时候触发addone方法，创建一个新的item
    // 子组件要修改父组件的数据 不能直接改 让父组件给你子组件传递一个修改数据的方法 子组件通过调用这个方法从而实现修改父组件数据的目的
    addOne() {
      //有内容
      // 要去判断用户这次输入的内容和之前的有没有重复
      // some
      // 功能:从数组查找是否有某一项符合条件
      // 参数:回调函数 函数的形参 item index arr
      // 返回值；如果有一项符合条件 true  一项都不符合 false
      if (this.content.trim()) {
        const flag = this.todos.some(item => {
          return item.content === this.content;
        });
        if (flag) {
          alert('输入的内容重复了');
        } else {
          let todo = {
            id: Date.now(),
            content: this.content,
            isOver: false,
          };
          this.addOneTodo(todo);
        }
      } else {
        alert('快输入内容');
      }
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
