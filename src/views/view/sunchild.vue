<template>
	<div class="app-main">
		<div class="nav-top">
			<mt-header title="这是个孙子详情页">
			  <router-link to="/order" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="app-content">
			<div>{{postData}}</div>
		</div>
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
	    	this.postData = this.$route.params.id;
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
