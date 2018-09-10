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
      component: () => import('./views/index.vue')
    }],
  },
];

export const asyncRouterMap = [
  {
    path: '/system',
    component: Home,
    hidden: false,
    name: '系统管理',
    redirect: 'noredirect', 
    meta: {
      title: '系统管理',
      icon: 'fa fa-cog'
    },
    children: [{
      path: 'limit',
      component: () => import('./views/Permission.vue'),
      name: '权限管理',
      meta: {
        title: '权限管理',
        icon: 'fa fa-folder-o'
      }
    },{
      path: 'operationDetail',
      component: () => import('./views/OperationDetail.vue'),
      name: '操作日志',
      meta: {
        title: '操作日志',
        icon: 'fa fa-id-badge'
      }
    }]
  },
  {
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
    path: '/form',
    name: '订单管理',
    component: Home,
    redirect: 'noredirect', 
    meta: {
      title: "订单管理",
      icon: "fa fa-info"
    },
    children: [
      {
        path: 'detail',
        name: '订单详情',
        component: () => import('./views/OrderDetail.vue'),
        meta: {
          title: '订单详情',
          icon: 'fa fa-laptop'
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
