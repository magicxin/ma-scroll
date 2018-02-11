<template>
  <div id="wrapper">
  	<div class="scroller">
  		<slot></slot>
  		<div v-if="showMsg">
	      	<div v-if="!loaded" class="loadmore">下拉查看更多~</div>
	      	<div v-else class="loadover">我是有底线的~</div>
	    </div>
  	</div>
  </div>
</template>

<script>
	import IScroll from '../lib/iscroll-probe'
  /* eslint-disable */
  export default {
    name: 'ma-scroll',
    props: {
      getMore: {
        type: Function
      },
      allLoaded: {
        type: Boolean,
        default () {
          return false
        }
      },
      showMsg: {
      	type: Boolean,
        default () {
          return false
        }
      }
    },
    methods:{
    	
    },
     watch: {
     	allLoaded(newValue,oldValue){
	    	this.loaded = newValue
	   }
	  },
    data () {
      return {
        loaded:false,
      }
    },
    methods: {//取可以滚动的元素
    	
    },
    mounted(){
    	let that = this
    	let myScroll = new IScroll('#wrapper', {
						mouseWheel: true,
						click:true,
						probeType: 3
					});
					
					myScroll.on('scroll', ()=>{
						console.log(myScroll.y)
//						if(myScroll.wrapperHeight - myScroll.y + 10 >= myScroll.scrollerHeight){
//							that.getMore()
//							.then(()=>{
//								setTimeout(function(){
//									myScroll.refresh()
//								},10)
//							})
//						}
					})
					
    }
  }
</script>

<style>
  #wrapper {
	position: absolute;
	z-index: 1;
	top: 45px;
	bottom: 0;
	left: 0;
	width: 100%;
	/*background: #ccc;*/
	overflow: hidden;
}

.msg{
	width:100%;
	position:relative;
	z-index:10;
}

.scroller {
  	width:90%;
  	display:flex;
  	flex-flow:column;
  	margin:0 auto;
  }
#wrapper .loadmore{
  	height:100%;
  	width: 100%;
  	height: 35px;
  	text-align: center;
  	line-height: 35px;
  	color: #bdbdbd;
  }
  #wrapper .loadover{
  	width: 100%;
  	height: 35px;
  	text-align: center;
  	line-height: 35px;
  	color: #bdbdbd;
  }
</style>
