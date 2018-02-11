<template>
  <div id="app">
    	<scroll :showMsg="true" :getMore="loadMore" :refresh="refresh" :allLoaded="allLoaded" :init="init">
    		<ul v-html="element">
    			
    		</ul>
    	</scroll>
  </div>
</template>

<script>
	import scroll from './components/maScroll'
export default {
  name: 'app',
  data () {
    return {
      element:'',
    		allLoaded:false,
    		i : 1,
    		init:false
    }
  },
  components:{
  	scroll
  },
  created(){
  	let that = this
  	setTimeout(function(){
  		that.element = "<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>"+
    		"<li>11</li>";
    		
    		that.init = true
  	},2000)
  	
  },
  methods:{
  	loadMore(){
  		let that = this
  		return new Promise(function(resolve,reject){
  				that.element += "<li>"+ that.i*2 +"</li><li>"+ that.i*2 +"</li><li>"+ that.i*2 +"</li><li>"+ that.i*2 +"</li>"
  				resolve()
  		})
  		
  	},
  	refresh(){
  		return new Promise(function(resolve,reject){
  				console.log(111)
  				resolve()
  		})
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
	padding:1em;
	background:#999;
	margin-top:2px;
}
ul{
	list-style-type: none;
	margin:0;
	padding:0;
}
</style>
