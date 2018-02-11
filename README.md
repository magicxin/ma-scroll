#依赖vue.js iscroll5

# 简介
ma-scroll是一个基于vue与iscroll5的移动下拉刷新，上拉加载组件

# 安装
npm install ma-scroll -save

# 使用
> **main.js 文件下**

> **import Vue from 'vue'**

> **import maScroll from 'ma-scroll'**

> **Vue.use(maScroll)**

> **<ma-scroll></ma-scroll>**

##  参数


| 参数 | 必填 | 类型 | 描述 |
|:-------:|:-------:|:-------:|:-------:|
| up | false | Bollean | 是否需要上拉加载 |
| down | false | Bollean | 是否需要下拉刷新 |
| getMore | false | function | 加载的函数 |
| allLoaded | false | Bollean | 是否全部加载完毕 |
| refresh | false | function | 下拉刷新函数 |
| showMsg | false | Bollean | 是否需要描述文字 |
| init | true | Bollean | 初始化iscroll |
