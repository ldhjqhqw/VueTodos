import Vue from 'vue';
import App from './App.vue';

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

// render函数 有渲染的意思
// render函数的功能 和咱们下面方式1差不多
// 内部也偷偷的帮你注册了App 也在模板中使用了 多一个渲染解析的功能
new Vue({
  render: h => h(App),
}).$mount('#app');
