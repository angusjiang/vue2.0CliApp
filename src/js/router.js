//webpack 提供了路由的按需加载，通过component 的回掉函数异步加载，
//若只是通过require 或是import 会立刻执行，各个模块就没办法按需加载组件，只能全局加载

var routes =　[
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['../home.vue'], resolve),
    children: [
      {
        path:'detail',
        name: 'homedetail',
        component: resolve => require(['../views/view/detail.vue'], resolve), 
      }
    ]
  },

  { 
    path: '/mine', 
    component: resolve => require(['../views/mine.vue'], resolve)
  },


  { 
  	path: '/order', 
  	component: resolve => require(['../views/order.vue'], resolve),
    children: [
      {
        path:'orderdetail',
        name: 'orderdetail',
        component: resolve => require(['../views/view/order-detail.vue'], resolve)
      },
      {
        path: 'child/:id',
        name: 'sunchild',
        component: resolve => require(['../views/view/sunchild.vue'], resolve)
      }
    ]
  },


  { 
    path: '/discovery', 
    component: resolve => require(['../views/discovery.vue'] ,resolve),
    children: [
        {
          path:'pickday',
          name: 'pickday',
          component: resolve => require(['../views/view/pickday.vue'], resolve)
        }
    ]
  },


  { //默认首页
    path: '/',
    redirect: '/home'
  },
  { //默认错误页
    path: '*',
    component: function(resolve) {
      require(['../404.vue'], resolve)
    } 
  }
]
export {routes}