## webpack打包 
 
### 什么是Webpack
 > WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

### 开始webpack之旅
##### 准备工作 
  1 建立src 目录   
  >index.js  --作为入口文件   

    var hello = require('./hello.js');
    document.getElementById('root').appendChild(greeter());

  >hello.js  -- 简单的返回包含问候信息的html元素函数 
   
    module.exports = function() {
      var hello = document.createElement('div');
      greet.textContent = "hello webpack!";
      return hello;
    };
  
  2 在根目录下创见index.html  
  

    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
          <title>Webpack Sample Project</title>
      </head>
      <body>
        <div id='root'></div>
        <script src="public.js"></script>
      </body>
    </html>
  
#####    安装webpack 
  npm install webpack --save-dev
  
##### 根目录创建webpack.config.js文件 ， 关于一些配置
  > __dirname: node.js中的一个全局变量，它指向当前执行脚本所在的目录 

    module.exports={
      entry: __dirname + '/src/index.js',
      output:{
        path: __dirname + '/public', 
        filename: 'public.js' // 输出文件的名字 
      }
    }
#####  最基本的打包就实现了  执行webpack  可以看到项目目录出现publick目录文件 在html中引入publick.j![Alt text](./屏幕快照 2017-02-27 上午10.36.10.png) 
##### 更快捷的执行打包任务 
 > 不如刚才的webpack 命令 ， 有时候很长 确实着实让人头疼  
 > 所以我们可以用npm引导任务执行  对其配置后 npm start来代替这些繁琐的命令 
   
   "scripts": {
      "start": "webpack"
    },

##### webpack的强大功能  声称Source Maps 调试更容易 
> 需要配置webpack的devtool 

##### 使用webpack构建本地服务器  (并自动刷新修改后的结果)
  
  npm install --save-dev webpack-dev-server
> devServer作为webpack配置选项中的一项，具有以下配置选项
>  contentBase:   本地服务器加载的目录 
>  port:      // 默认监听端口  如果省略  默认8080
>  inline： 设置为true  源文件改变时 浏览器自动刷新 
>  colors： 设置为true 终端颜色输出色彩
      
    // 在webpack.config.js配置
    devServer: {
        contentBase: "",
        port: 2222,
        inline: true,
        colors: true
      }
      // 在pagackage.json scripts 配置快捷命令 
      "dev": "webpack-dev-server --inline --hot"
      // http://localhost:2222 访问页面 

  
##### 鼎鼎大名的Loaders

  


 


