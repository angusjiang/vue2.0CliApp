var routes =　[
  {
    path: '/home',
    component: require('../home.vue'),
    children: [
      {
        path:'detail/:id',
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