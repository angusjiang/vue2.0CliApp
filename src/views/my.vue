<template>
	<div class="app-main">
		<div class="nav-top">
			<mt-header title="我的什么啊啊什么鬼我的什么啊啊什么鬼我的什么啊啊什么鬼">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="app-content">
			我的什么啊啊什么鬼

		    
		</div>
		<div class="footer-nav">
			<navigtor></navigtor>
		</div>
	</div>
	
</template>
<script>
	import navigtor from '../components/nav.vue'
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
			navigtor
		},

		methods: {
			
		}
	}
</script>
<style scoped>

</style>
