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
		      	<div class="page-infinite-wrapper" >
			        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50" infinite-scroll-immediate-check="false" >
					  <li v-for="(item, index) in list" :style="{'height': '30px'}">
					  	<a href="" :style="{'display':'block','width':'100%','height':'100%'}" @click.prevent="goDetail(index, $event.target.innerHTML)">{{item}} click me hehe</a>
					  </li>
					</ul>
					<p v-show="loading" class="page-infinite-loading" :style="{'marginBottom':'55px'}">
				      <mt-spinner type="fading-circle"></mt-spinner>
				        加载中...
				    </p>
				</div>
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
		<router-view></router-view>
	</div>
	
</template>
<script>
	import { Header } from 'mint-ui'
	Vue.component(Header.name, Header)
	import navigtor from '../components/nav.vue'
	export default{
		data() {
			return {
				selected: '1',
				list: [],
		        loading: false,
		        allLoaded: false,
		        // wrapperHeight: 0
			}
		},
		components: {
			navigtor
		},
		mounted() {
	      // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 55;
	      this.init();
	    },
		methods: {
			loadMore() {
				console.log('chufa');
				var that = this;
				setTimeout(() => {
					that.loading = true;
			        that.init(true);
				}, 1000);
		    },
		    init(add) {
		    	let _ = this;
		    	if (!add) {
					this.loading = true;
					setTimeout(() => {
						for (let i = 1; i <= 20; i++) {
					        this.list.push(i);
					    }
					    _.loading = false;
					},1000);
		    	} else {
					this.loading = true;
					setTimeout(() => {
						let last = _.list[_.list.length - 1];
			    		for (let i = 1; i <= 10; i++) {
				          _.list.push(last + i);
				    		_.loading = false;
				        }
					}, 1000);
		    	}
		    },
		    goDetail(index, html) {
		    	console.log(index, html);
		    	// router.push( { path:'/order/orderdetail',query: {id: html,name:'demo'} } );
		    	router.push({name:'orderdetail',parames:{'id':123,name:'demo'}});
		    }

		}
	}
</script>
<style scoped>

</style>
