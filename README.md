# 依赖
> **vue.js iscroll5

# 简介
> **ma-scroll是一个基于vue与iscroll5的移动下拉刷新，上拉加载组件

# 安装
> **npm install ma-scroll -save

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

## 页面引用

> **template
```
<ma-scroll :showMsg="true" :up="true" :down="true" :getMore="loadMore" :refresh="refresh" :init="init">
</ma-scroll>
```
> **js

```
loadMore(){
		let that = this
		return new Promise(function(resolve,reject){
		that.elements.push(that.elements.length)
		resolve()
	})
},
refresh(){
		return new Promise(function(resolve,reject){
		resolve()
})
```

## 注意事项
使用ajax加载数据，需要在请求成功后，将init参数置为true。
loadMore和refresh函数，需要返回Promise对象，因为组件内调用的是loadMore.then，成功后的回调，用以刷新iscroll。
