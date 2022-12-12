// 这个文件是咱们让咱们对webpack进行配置的一个配置文件

const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true, //自动打开浏览器
    host: '127.0.0.1', //重新指令主机名
  },
  lintOnSave: false, //3.忽略整个项目的检查 默认值是true 调整false 关闭检查
});
