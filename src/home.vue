<template>
	<!-- <div class="page" style="display:block;">
	    <header class="bar bar-nav">
	        <mt-header title="外卖首页标题首页标题首页标题首页标题首页标题首页标题首页标题">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
	    </header>
	    <nav class="bar bar-tab">
	        <a class="tab-item external active" href="#">
	            <span class="icon icon-home"></span>
	            <span class="tab-label">首页</span>
	        </a>
	        <a class="tab-item external" href="#">
	            <span class="icon icon-star"></span>
	            <span class="tab-label">收藏</span>
	        </a>
	        <a class="tab-item external" href="#">
	            <span class="icon icon-settings"></span>
	            <span class="tab-label">设置</span>
	        </a>
	    </nav>
	    <div class="content">
	        <div class="content-block">这里是content</div>
	    </div>
	</div> -->

	<div class="app-main">
		<div class="nav-top">
			<mt-header title="外卖首页标题首页标题首页标题首页标题首页标题首页标题首页标题">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="app-content">
			<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check="true" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
				<ul >
				  <li style="height:40px;" v-for="item in list">
				  	<router-link to="/home/detail/123">
				  	{{ item }} click me go detail
				  	</router-link>
				  </li>
				</ul>
				
			</div>
			<div v-show="loading" class="page-infinite-loading start-box box-align">
		        <mt-spinner type="fading-circle"></mt-spinner>
		        加载中...
		    </div>
		</div>
		<div class="footer-nav">
			<navigtor></navigtor>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	import navigtor from './components/nav.vue'
	export default {
		data() {
			return {
				loading: false,
				list: [],
				articles:[],
				page_size: 16,
				page_no: 1,
				wrapperHeight: 0
			}
		},
		components: {
			navigtor
		},
		mounted() {
	      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	      for (let i = 1; i <= 20; i++) {
	        this.list.push(i);
	      }
	    },
		methods: {
			loadMore() {
				var that = this;
		        this.loading = true;
		        setTimeout(() => {
		          let last = that.list[that.list.length - 1];
		          for (let i = 1; i <= 10; i++) {
		            that.list.push(last + i);
		          }
		          that.loading = false;
		        }, 2500);
		    },
			initF(isAdd) {
				var _ = this;
				this.loading = true;
				this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=' + this.page_size + '&start='+this.page_no, {}, {
			        headers: {
			        },
			        emulateJSON: true
			    }).then(function(response) {
			    	this.loading = false;
			    	if (isAdd) {
			    		this.articles = this.articles.concat(response.data.subjects);
			    	} else {
			    		this.articles = response.data.subjects;
			    	}
			        
			        // this.loadMore();
			    }, function(response) {
			        console.log(response)
			    });
			}
		},
		created() {
		    // this.initF();
		    // console.log(router);
		}
	}
</script>
<style scope>

</style>