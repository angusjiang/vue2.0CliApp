<template>
	<div class="app-main">
		<div class="nav-top">
			<mt-header title="这是个内嵌的详情页">
			  <router-link to="/order" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="app-content">
			<div>{{postData}}</div>
			<router-link to="/order/child/123"> click me 去 孙子页面</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				postData: ''
			}
		},
		components: {
		},
		methods: {
			
		},
	    created() {
	    	this.postData = this.$route.query.id;
	    }
	}
</script>
<style scoped>
	.app-content{
		z-index: 30;
		padding-bottom: 0;
		background: #fff;
	}
</style>
