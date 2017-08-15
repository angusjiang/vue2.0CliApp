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
		    <div @click="pop" :style="{'marginTop': '40px'}"> 点击我通过通用组件iframe跨域请求一个网页 </div>
		    <div @click="pop2" :style="{'marginTop': '40px'}"> 点击我父子之间的双向数据绑定 </div>

		    <div>
		    	<div class="total" v-for="(item, index) in hehe" :style="{'marginBottom':'15px'}">
		    		<p>my total : {{item.myTotal}}</p>
		    		<ul>
		    			<li :style="{'height':'15px'}" v-for="(detail, index) in item.detailLi">
		    				per count 
		    				<input :value="detail.inpNum" type="text" v-model="detail.inpNum">
		    			</li>
		    		</ul> 
		    	</div>
		    </div>
		    <router-link to="/discovery/pickday" slot="left">clike me to pickday</router-link>
		    <vueupload :class="['pure-button','pure-button-primary','js-btn-crop']" :crop="true" url="./crop.php" extensions="png,gif,jpeg,jpg"></vueupload>
		</div>
		<div class="footer-nav">
			<navigtor></navigtor>
		</div>
		<!-- 父组件中通过调用子组件并传递参数 -->
		<!-- 为了父子组件之间的结构，通过父组件通过 props down  向下传递数据给子组件 events up 通过events 给父组件发送消息 -->
		<popModel :popstatus="popstatus" :title="titleStr"  @changeStatus="chages"></popModel>
		<popModel2 :popstatus2="popstatus2" :title="titleStr" @update:popstatus2="val => popstatus2 = val"></popModel2>
		<router-view></router-view>
	</div>
	
</template>
<script>
	import navigtor from '../components/nav.vue'
	import popModel from '../components/pop-model.vue'
	import popModel2 from '../components/pop2.vue'

	import vueupload  from 'vue-core-image-upload'
	import { mapState } from 'vuex'
	export default{
		data() {
			return {
				selected: '1',
				list: [],
		        loading: false,
		        allLoaded: false,
		        wrapperHeight: 0,
		        // popstatus: false,
		        popstatus2: false,
		        titleStr: '这是自定义的title',
		        hehe: [
		        	{
		        		myTotal: 0,
		        		detailLi: [{inpNum: 0},{inpNum:1}]
		        	},
		        	{
		        		myTotal: 1,
		        		detailLi: [{inpNum: 2},{inpNum:3}]
		        	}
		        ],
		        src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
			}
		},
		computed: mapState({
            popstatus: state => state.isClose
        }),
		components: {
			navigtor,
			popModel,
			vueupload,
			popModel2
		},
		methods: {
			pop() {
				// this.popstatus = true;

				this.$store.commit('switchs');
				
				let url = 'http://game.vanthink.cn/TB2.0/#/detail/6803?is_preview=1&hide_controls=1' + '?_req=' + new Date().getTime();
				popModel.methods.set(url,{},function () {
					
				});
			},
			pop2() {
				this.popstatus2 = true;
				console.log(this.popstatus2);
				let url = 'http://game.vanthink.cn/TB2.0/#/detail/6803?is_preview=1&hide_controls=1' + '?_req=' + new Date().getTime();
				popModel.methods.set(url,{},function () {
					
				});
			},
			imageuploaded(res) {
	          if (res.errcode == 0) {
	            this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
	          }
	        },
	        chages() {
	        	this.popstatus = false;
	        }
		},
		created() {
			let that = this;
			// this.popstatus = this.$store.isClose;
			// console.log(this.popstatus)
			this.$watch('hehe',function(newD, oldD) {

				for (let i = 0; i < that.hehe.length; i++) {
					var aa = 0;
					for (let j = 0; j < that.hehe[i].detailLi.length; j++) {
						aa += parseInt(that.hehe[i].detailLi[j].inpNum);
					};
					that.hehe[i].myTotal = aa;
				};
			}, {deep: true});
		}
	}
</script>
<style scoped>
	/*.g-core-image-upload-btn {
		position: absolute;
		width: 100px;
		height: 40px;
		background: red;
	}*/
</style>
