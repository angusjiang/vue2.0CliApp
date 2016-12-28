<template>
	<div class="app-main">
		<div class="nav-top">
			<mt-header title="这是个内嵌的详情页">
			  <router-link to="/home" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="app-content">
			<ul>
				<li class="item" v-for="(item, index) in items">{{item.name}}-- {{item.age}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				items:[
					{name: 'jxj',age: 25},
					{name: 'jxj2',age: 26},
				]
			}
		},
		components: {
		},
		methods: {
			
		},
	    created() {
	      console.log(this.$route);
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
