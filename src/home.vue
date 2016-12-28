<template>
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
			<div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
		      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check="false"  infinite-scroll-listen-for-event="needNow()">
		        <li v-for="(item, index) in articles" class="page-infinite-listitem">
		        	<router-link :to="{name: 'homedetail', params:{id: item.title}}" :style="{'display':'block','width':'100%','height':'100%'}">{{index}}{{ item.title }}</router-link></li>
		      </ul>
		      <p v-show="loading" class="page-infinite-loading" :style="{'marginBottom':'55px'}">
		        <mt-spinner type="fading-circle"></mt-spinner>
		        加载中...
		      </p>
		    </div>
		</div>
		<div class="footer-nav">
			<navigtor></navigtor>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	//注意： 填坑
	//当设置路由传递参数的时候，to 绑定的是一个对象 name 对应只能 给params 传递参数 {name: 'homedetail', params:{id: item.title}} 
	//若是用path的时候 path对象只能给 query传递参数 {path: '/home/detail', query:{id: item.title}}
	import { Header } from 'mint-ui'
	Vue.component(Header.name, Header)
	import navigtor from './components/nav.vue'
	export default {
		data() {
			return {
				loading: false,
				list: [],
				articles:[],
				page_size: 15,
				page_no: 1,
				wrapperHeight: 0,
				hehe: 3
			}
		},
		components: {
			navigtor
		},
		mounted() { //初始计算时请求数据接口
	      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 55;
	      this.initF();
	    },
		methods: {
			loadMore() {
				var that = this;
				//监听loadmore事件，设置延迟效果
				setTimeout(() => {
					//开始加载数据过程打开加载图标，关闭loadmore事件
					that.loading = true;
			        that.page_no++;
			        that.initF(true);
				}, 700);
		    },
		    needNow() {

		    },
			initF(isAdd) {
				var that = this;
				//请求前关闭loaddmore事件，显示加载图标
				this.loading = true;
				this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=' + this.page_size + '&start='+this.page_no, {}, {
			        headers: {
			        },
			        emulateJSON: true
			    }).then(function(response) {
			    	//请求成功后loaddmore事件再次开启，隐藏加载图标
			    	that.loading = false;
			    	if (isAdd) {
			    		this.articles = this.articles.concat(response.data.subjects);
			    	} else {
			    		this.articles = response.data.subjects;
			    	}
			    }, function(response) {
			        console.log(response)
			    });
			}
		},
		created() {
			this.needNow();
		    // console.log(router);
		}
	}
</script>
<style scope>
	li{
		height: 50px;
	}
</style>