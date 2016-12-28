import Vue from 'vue'
import VueRouter from 'vue-router' 
import VueResource from 'vue-resource'
import App from './App'
// import MintUI from 'mint-ui'
import ElementUI from 'element-ui'

import './css/reset.css'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-default/index.css'
import './css/index.css'
//注册插件 
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(MintUI)
Vue.use(ElementUI)

window.debug = true;
window.Vue = Vue;

const First = {
  template: '<div><h2>我是第 1 个子页面</h2></div>'
}
const Bar = { template: '<div>bar</div>' }
const User = {
  template: '<div>User {{ $route.params.userid }}'
}

import My from './views/my.vue'

import {routes} from './js/router'

const router = new VueRouter({
  routes
})

window.router = router;


/* eslint-disable no-new */
const app = new Vue({
  //template: '<App/>', 这个会覆盖挂在元素下所有内容
  router:router
}).$mount('#app')
