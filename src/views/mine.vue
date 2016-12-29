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
	export default{
		data() {
			return {

			}
		},
		components: {
			navigtor
		},
		methods: {

		}
	}
</script>
<style scoped>

</style>
