#依赖vue.js iscroll5

# 简介
ma-scroll是一个基于vue与iscroll5的移动下拉刷新，上拉加载组件

# 安装
npm install ma-scroll -save

#使用
> **main.js 文件下**

> **import Vue from 'vue'**

> **import maScroll from 'ma-scroll'**

> **Vue.use(maScroll)**

> **<ma-scroll></ma-scroll>**

* 参数

|    a    |       b       |      c     |
|:-------:|:------------- | ----------:|
|   居中  |     左对齐    |   右对齐   |
|=========|===============|============|

作者：欧薇娅
链接：https://www.jianshu.com/p/b03a8d7b1719
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

| 参数 | 必填 | 类型 | 描述 |
|:-------:|:-------:|:-------:|
| up | false | Bollean | 是否需要上拉加载 |
| down | false | Bollean | 是否需要下拉刷新 |
| getMore | false | function | 加载的函数 |
| allLoaded | false | Bollean | 是否全部加载完毕 |
| refresh | false | function | 下拉刷新函数 |
| showMsg | false | Bollean | 是否需要描述文字 |
| init | true | Bollean | 初始化iscroll |
