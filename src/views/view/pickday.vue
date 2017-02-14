<template>
	<div class="app-main">
		<div class="nav-top">
			<mt-header title="这是个详情页">
			  <router-link to="/discovery" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="app-content">
			<fullCalendar :events="fcEvents" lang="zh"></fullCalendar>
		</div>
	</div>
</template>
<script>
	import fullCalendar from 'vue-fullcalendar';
	var demoEvents = [
    	{
	      title : 'Sunny Out of Office',
	      start : '2017-01-06',
	      end : '2017-01-07',
	      cssClass: ['family', 'career'],
    	  YOUR_DATA : {}
	    }
	];
	export default{
		data() {
			return {
				fcEvents : demoEvents
			}
		},
		components: {
			fullCalendar
		},
		methods: {
			
		},
	    created() {
	    	this.postData = this.$route.params.id;
	    }
	}
</script>
<style scoped>
	.day-number{
		text-align: center;
	}
	.app-content{
		z-index: 30;
		padding-bottom: 0;
		background: #fff;
	}
</style>
