import Vue from 'vue'
import Router from 'vue-router'
import Home from './layout/Home.vue'

Vue.use(Router)

const routes = [
  {path:'',component:Home,children:[
    {
      path: '/order/orderDetail', component: () => import('./views/OrderDetail.vue')
    },
    {
      path: '/member/detail', component: () => import('./views/MemberDetail.vue')
    }
  ]}
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
