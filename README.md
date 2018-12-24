# vue-demo

基于 vue 的中后台项目管理系统骨架。项目主要基于本人在日常工作中的实践，遇到的一些问题，或者一些 demo 的完成，以及对一些新技术的尝试。

项目主要依赖：vue + vue-router + vuex + axios + element-ui + echarts + lodash + vue-rx + rxjs

目前项目的一些特性：

* 使用 Webpack 搭建多环境模式，开发环境/生产环境
* 多页应用，即支持多个 vue 项目，并共享其 vendor 代码
* 基于页面级别的路由权限控制
* 使用 vue-rx 集成 rxjs
* 集成 v-charts 和 Echarts
* 可以按照业务模块拆分的路由系统
* 使用基于命名空间的 store 状态管理
* 通用业务组件的封装
* vue 高阶组件的探索

## 项目结构

以下只是展示项目整体结构。

```js
build // webpack 配置目录，支持多页应用
dist // webpack 打包后的输出目录
library // 存放不会变动的第三方包，以及使用 webpack DllPlugin 打包后的文件
src
├── api // 基于 axios 封装的 底层 api
├── apps // 多页应用目录
│   ├── screen // screen 单叶应用 一个屏保程序
│   │   └── src
│   │       ├── router
│   │       ├── store
│   │       └── views
│   └── web  // web 单叶应用 本项目的主要应用
│       └── src
│           ├── router // 改应用下的路由管理
│           ├── store // 基于命名空间的状态管理
│           │   ├── modules
│           │   │   └── permission
│           │   └── mutationTypes
│           └── views // 业务模块
│               ├── auth // 登陆验证
|               |   |--- route.js
│               ├── charts // echarts
│               │   ├── barChart
│               │   ├── line
│               │   ├── map
│               │   └── populationMap
|               |   |--- route.js
│               ├── components //  web 下的通用业务组件
│               │   ├── catalog
│               │   ├── hoc
│               │   ├── jsx
|               |   |--- route.js
│               ├── dashboard // 主页面板
|               |   |--- route.js
│               ├── error // 错误处理页面
|               |   |--- route.js
│               ├── layout // wep 应用的布局组件
│               │   └── components
│               │   |   └── SideBar
|               |   |   |route.js
|               |   |--- route.js
│               ├── rxjs // 基于 rxjs 的探索
│               │   ├── demos
│               │   │   ├── breakout
│               │   │   └── shoppingCar
│               │   └── operators
|               |   |--- route.js
├── assets
├── components // 全局通用的组件
├── directives // 全局通用指令
├── locale // 多语言
│   ├── zh-CN
│   └── zh-TW
├── plugins // 全局通用的插件
├── rapi // 使用 rxjs formPromise 对 axios 进行封装的 rxjs api，封装以后总是返回一个 Observable 对象
├── style // 全局样式
└── util // 全局工具函数
staic // 静态资源存放目录
```
