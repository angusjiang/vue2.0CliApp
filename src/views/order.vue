<template>
	<div class="app-main">
		<div class="nav-top">
			<mt-header title="订单页面啊订单页面啊订单页面啊订单页面啊订单页面啊订单页面啊">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="app-content">
			<mt-navbar class="page-part" fixed  v-model="selected" :style="{'top':'40px'}">
		      <mt-tab-item id="1">选项一</mt-tab-item>
		      <mt-tab-item id="2">选项二</mt-tab-item>
		      <mt-tab-item id="3">选项三</mt-tab-item>
		    </mt-navbar>

		    <div>
		      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
		    </div>

		    <mt-tab-container v-model="selected">
		      <mt-tab-container-item id="1">
		        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
				  <li v-for="item in list">{{ item }}</li>
				</ul>
				<p v-show="loading" class="page-infinite-loading">
			      <mt-spinner type="fading-circle"></mt-spinner>
			        加载中...
			    </p>
		      </mt-tab-container-item>
		      <mt-tab-container-item id="2">
		        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
		      </mt-tab-container-item>
		      <mt-tab-container-item id="3">
		        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
		      </mt-tab-container-item>
		    </mt-tab-container>
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
		// mounted() {
	 //      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	 //      for (let i = 1; i <= 20; i++) {
	 //        this.list.push(i);
	 //      }
	 //    },
		methods: {
			loadMore() {
				var _ = this;
		        this.loading = true;

		        setTimeout(function() {
		        	let last = 0;
		        	if (_.list.length > 0) {
		        		last = _.list[_.list.length - 1];
		        	};
		        	
			        for (let i = 1; i <= 30; i++) {
			          _.list.push(last + i);
			        }
		        this.loading = false;

		        },1000);
		        // setTimeout(() => {
		        //   let last = this.list[this.list.length - 1];
		        //   for (let i = 1; i <= 10; i++) {
		        //     this.list.push(last + i);
		        //   }
		        //   this.loading = false;
		        // }, 2500);
		    }
		}
	}
</script>
<style scoped>

</style>
