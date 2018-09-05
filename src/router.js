import Vue from 'vue'
import Router from 'vue-router'
import Home from './layout/Home.vue'
import App from './App.vue'

Vue.use(Router)

const routes = [
  {path:'',
  component:Home,
  meta: {
    keepAlive: true
  },
  children:[
    {
      path: '/order/orderDetail', component: () => import('./views/OrderDetail.vue')
    },
    {
      path: '/member/detail', component: () => import('./views/MemberDetail.vue')
    }
  ]}
]
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
export default router;
