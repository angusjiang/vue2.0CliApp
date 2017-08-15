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
		    <mt-cell title="标题文字" to="//github.com" is-link value="带链接"></mt-cell>
		    <mt-cell title="标题文字" is-link>
			  <span style="color: green">这里是自定义元素</span>
			</mt-cell>
			<mt-cell title="标题文字">
			  <span>icon 是图片</span>
			  <img slot="icon" src="../assets/logo.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
			<p>{{total}}</p>
			<!-- 父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件 this is call events up -->
			<test @increment="count" ref="count1">
				<p slot="header">这个是可以看的见的</p>
				<p>这是看不见的</p>
			</test>
			<test @increment="count"></test>
			<test @increment="count"></test>

			<VueThreeArea 
			:placeholers="placeholers" 
			@selectedF="selectedF"
			:selectModule="selectModule">
			</VueThreeArea>

		</div>
		<div class="footer-nav">
			<navigtor></navigtor>
		</div>
	</div>
	
</template>
<script>
	import { Header } from 'mint-ui';
	Vue.component(Header.name, Header);
	import { Cell } from 'mint-ui';
	Vue.component(Cell.name, Cell);
	import navigtor from '../components/nav.vue';
	import test from '../components/test.vue'
	import VueThreeArea from '../components/area.vue'
	// import VueThreeArea from 'vue-three-area'
	export default{
		data() {
			return {
				counter: 0,
				total: 0,
				placeholers: '选择省,选择市,选择区',
				selectModule: 'single',
			}
		},
		components: {
			navigtor,
			test,
			VueThreeArea
		},
		methods: {
			count(res) {
				this.total ++;
				console.log(res)
			},
			//选中之后返回结果
			selectedF(res) {
				console.log(res)
			}
		},
		created() {
			console.log(this.$refs);
  		}
	}
</script>
<style scoped>

</style>
