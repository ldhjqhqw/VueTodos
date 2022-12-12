<!--写结构-->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addOneTodo="addOneTodo" :todos="todos"></Header>
      <!-- Vue中第一种通信方式 props -->
      <!--:属性名="传递的数据"-->
      <Main
        :todos="todos"
        :updateOneTodo="updateOneTodo"
        :deleteOneTodo="deleteOneTodo"
      ></Main>
      <Footer
        :todos="todos"
        :updateAllTodo="updateAllTodo"
        :deleteCheckTodo="deleteCheckTodo"
      ></Footer>
    </div>
  </div>
</template>

<!--
  1.动态渲染数据
  1.1数组设计准则
  1.2数据结构如何设计? 根据页面当中使用 遍历每一项 id content isOver 通常都是数组套对象
  1.3数据放在哪里? 看是多个组件要用还是单个组件要用 如果是多个那就应该把这个数据放在这些组件的父组件当中 单个组件要用就放在单个组件的data中即可
  1.4再通过props传递数据到子组件身上
  1.5子组件通过props遍历渲染再进行数据传递
 
  2.添加数据
  2.1在输入行双向绑定再设置按钮事件
  2.2子组件要修改父组件的数据 不能直接改 让父组件给你子组件传递一个修改数据的方法 子组件通过调用这个方法从而实现修改父组件数据的目的
  2.3父组件不知道你要添加哪一项 子组件调用方法的时候把某一项传递过来

  3.修改单个选中状态
  3.1在案件绑定事件，通过下标修改状态
  3.2子组件要修改父组件的数据 不能直接改 让父组件给你子组件传递一个修改数据的方法 子组件通过调用这个方法从而实现修改父组件数据的目的
  3.3父组件不知道你要添加哪一项 子组件调用方法的时候把某一项传递过来

  4.鼠标移入高亮
  4.1设置一个高亮css样式，绑定到li上
  4.2设置一个初始状态为flase，在li上设置移入状态为true，移出状态为false

  5.单个删除
  5.1按钮上用v-show，按状态显示按钮
  5.2点击调用方法把index传递给父组件，父组件设置splic方法返回给子组件完成删除

  6.已完成数量和全部数量
  6.1全部数量从父组件把数据传到子组件就行
  6.2已完成数量点击后执行reduce累加器方法
   
  7.全选方法
  7.1绑定事件根据todos中每一项是否都选中返回true，有一项不选中返回falseevery，功能：判断数组中每一项元素是否都符合条件
  7.2从父组件中返回，拿到最新修改的全选值，根据这个全选值，修改数组当中的每一项

  8.删除选中
  8.1删除按钮绑定事件，调用父组件的方法筛选为true的数据

  9数据本地存储
-->

<!--写逻辑-->
<script>
import Header from './components/Header/index.vue';
import Main from './components/Main/index.vue';
import Footer from './components/Footer/index.vue';
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      // 因为如果没有获取到数据 结果是null  那么其他组件传递了是这个数据并且使用了 放置报错 ||一个数组
      todos: JSON.parse(localStorage.getItem('todos')) || [
        { id: 1, content: '李轩', isOver: false },
        { id: 2, content: '大李轩', isOver: true },
        { id: 3, content: '老李轩', isOver: false },
      ],
    };
  },
  methods: {
    addOneTodo(todo) {
      // 父组件不知道你要添加哪一项 子组件调用方法的时候把某一项传递过来
      this.todos.unshift(todo);
    },
    // 更改某个选中状态(index)
    updateOneTodo(index) {
      // 父组件不知道你要修改哪一项元素的isOver  传一个标识数据(id index)
      this.todos[index].isOver = !this.todos[index].isOver;
    },
    deleteOneTodo(index) {
      //splice(下标，删除的多少个)，
      this.todos.splice(index, 1);
    },
    // 修改多个选中状态
    updateAllTodo(value) {
      this.todos.forEach(item => {
        item.isOver = value;
      });
    },
    //删除已完成的todo
    deleteCheckTodo() {
      this.todos = this.todos.filter(item => !item.isOver);
    },
  },
  //数据本地存储
  watch: {
    todos: {
      // 监视数组 默认只能监视一层 里面的对象是监听不到的
      handler(newVal) {
        // 只要todos发生变化了 就应该把最新的todos存在localStorage中去
        localStorage.setItem('todos', JSON.stringify(newVal));
      },
      deep: true,
    },
  },
};
</script>

<!--写css样式-->
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
