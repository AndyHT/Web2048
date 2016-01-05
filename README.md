# WebGame:Web技术课程项目
在Github下载项目后需要使用npm和bower安装项目依赖包，确保你的电脑上已经安装有node和bower；在相应目录下使用以下命令安装node_modules和bower_components

```bash
./game $ npm install
./game/public $ bower install
```
安装完成后使用node运行index.js文件，然后访问[http://localhost:8888](http://localhost:8888)即可开始游戏

没有MongoDB数据库游戏也可以正常运行，但是无法在历史记录里看到游戏得分记录以及无法保存游戏记录

##Game部分:
游戏是经典的2048，基本还原了原本游戏的逻辑和UI，并且实现了记录游戏分数的功能，游戏分数记录存储在MongoDB数据库中

游戏可以使用上下左右方向键来控制方块的移动，也可以使用触摸上下左右的滑动来控制方块的移动，当游戏结束时会弹出提示框提示用户增加记录，点击游戏记录按钮会显示储存在数据库里的游戏历史记录

前端游戏部分的代码位于[./game/public/](./game/public/)中

###代码模块说明:
####main2048.js
游戏逻辑核心代码，定义了按键上下左右的触发事件以及游戏启动和结束的函数
####support2048.js
定义了用于检测方块能否移动的函数和每个div的位置以及不同分数div的样式
####showanimation2048.js
移动和合并div时对样式进行更改
####main.js
包括angularjs代码，向后端发送和请求数据

##Server部分:
服务端用nodejs实现，负责静态资源请求的加载和数据的读写，nodejs与MongoDB数据库连接使用Mongoose

服务端代码位于[./game/](./game/)目录下的四个js文件中

###代码模块说明:
####index.js:
入口文件，启动后端服务器代码
####server.js
后端服务器代码，开启8888端口进行监听，并调用路由模块解析http请求
####router.js:
后端服务器路由部分，解析http请求的路由之行相应的函数
####requestHandles.js
后端核心代码，定义了每个路由对应的函数，包括：

* 连接MongoDB数据库
* 数据库连接读取记录
* 读取静态文件返回给前段
* 将数据写入数据库


