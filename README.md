# angus

> angus vue2.0 project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build


#参考 vue UI组建件库
# http://element.eleme.io/#/zh-CN/component/installation
# http://mint-ui.github.io/#!/zh-cn

#main.js 中组件是全局引入，cli的build做好了处理，开发环境全局引入文件很大，但是线上环境文件会很小，本地文件大对开发没什么影响，当然也可以异步按需引入 import {xxx} from 'ooo',实践中发现若是这种按需加载还是将ooo全部引入了，除非写全了按需加载的具体路径import {xxx} form 'node_modules/hehe/aaa/ooo',否则还是相当于全局引入

import Vue from 'vue'
import VueRouter from 'vue-router' 
import VueResource from 'vue-resource'
import App from './App'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'

import './css/reset.css'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-default/index.css'
import './css/index.css'
//注册插件 
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI)
Vue.use(ElementUI)

window.Vue = Vue;

const router = new VueRouter({
  routes
})

window.router = router;
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
