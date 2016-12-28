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
			
		    发现了什么啊

		    <div @click="pop"> 点击我通过iframe跨域请求一个网页 </div>

		</div>
		<div class="footer-nav">
			<navigtor></navigtor>
		</div>
		<popModel></popModel>
		<!-- <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="left">
		  这是个阿斯兰的反射率的发
		</mt-popup> -->
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
		        wrapperHeight: 0
			}
		},
		components: {
			navigtor,
			popModel
		},
		methods: {
			pop() {
				console.log(this.$children);
			},
			test() {

			}
		}
	}
</script>
<style scoped>

</style>
