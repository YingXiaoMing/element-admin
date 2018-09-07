import Vue from 'vue'
import Router from 'vue-router'
import Home from './layout/Home.vue'
import App from './App.vue'

Vue.use(Router)


export const constantRouterMap = [
  { 
    path:'', 
    component: Home,
    redirect: 'index',
    hidden: true,
    children: [{
      path: 'index',
      component: () => import('./views/OrderDetail.vue')
    }],
  },
];

export const asyncRouterMap = [
  {
    menuId: 1,
    path: '/member',
    component: Home,
    name: '会员管理',
    hidden: false,
    redirect: 'noredirect', 
    meta: {
      title: "会员管理",
      icon: "fa fa-user-o"
    },
    children : [
      {
        menuId: 2,
        path: 'detail',
        component: () => import('./views/MemberDetail.vue'),
        name: '会员详情',
        meta: {
          title: '会员详情',
          icon: 'fa fa-users'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },
  {
    menuId: 3,
    path: '/form',
    name: '订单管理',
    component: Home,
    redirect: 'noredirect', 
    meta: {
      title: "订单管理",
      icon: "fa fa-user-o"
    },
    children: [
      {
        menuId: 4,
        path: 'detail',
        name: '订单详情',
        component: () => import('./views/OrderDetail.vue'),
        meta: {
          title: '订单详情',
          icon: 'fa fa-user-o'
        }
      },
      {
        menuId: 5,
        path: 'detail2',
        name: '订单资料',
        component: () => import('./views/OrderDetail.vue'),
        meta: {
          title: '订单资料',
          icon: 'fa fa-user-o'
        }
      }
    ]
  }

]

const routes = [...asyncRouterMap,...constantRouterMap];

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
export default router;
