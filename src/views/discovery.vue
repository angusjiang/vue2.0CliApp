<template>
	<div class="app-main">
		<div class="nav-top">
			<mt-header title="发现了什么啊发现了什么啊发现了什么啊">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="app-content">

		    <div @click="pop" :style="{'marginTop': '40px'}"> 点击我通过通用组件iframe跨域请求一个网页 </div>

		</div>
		<div class="footer-nav">
			<navigtor></navigtor>
		</div>
		<!-- 父组件中通过调用子组件并传递参数 -->
		<popModel :popstatus="popstatus" :title="titleStr"></popModel>
	</div>
	
</template>
<script>
	import navigtor from '../components/nav.vue'
	import popModel from '../components/pop-model.vue'
	export default{
		data() {
			return {
				selected: '1',
				list: [],
		        loading: false,
		        allLoaded: false,
		        wrapperHeight: 0,
		        popstatus: false,
		        titleStr: '这是自定义的title'
			}
		},
		components: {
			navigtor,
			popModel
		},
		methods: {
			pop() {
				this.popstatus = true;
				var url = 'http://game.vanthink.cn/TB2.0/#/detail/6803?is_preview=1&hide_controls=1' + '?_req=' + new Date().getTime();
				popModel.methods.set(url,{},function () {
					
				});
			},
			test() {

			}
		}
	}
</script>
<style scoped>

</style>
