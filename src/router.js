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
  }
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
  }

]


const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})
export default router;
