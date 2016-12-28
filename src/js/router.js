var routes =　[
  {
    path: '/home',
    name: 'home',
    component: function(resolve) {
      require(['../home.vue'], resolve)
    },
    children: [
      {
        path:'detail',
        name: 'homedetail',
        component: require('../views/view/detail.vue')
      }
    ]
  },
  {
  	path: '/my',
  	component: require('../views/my.vue')
  },
  { 
  	path: '/order', 
  	component: require('../views/order.vue')
  },
  { 
    path: '/discovery', 
    component: require('../views/discovery.vue') 
  },
  { //默认首页
    path: '/',
    redirect: '/home'
  },
  { //默认错误页
    path: '*',
    component: require('../404.vue')
  }
]
export {routes}