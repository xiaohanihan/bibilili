import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register'
import login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {path: '/register',component: register},
  {path: '/login',component: login},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router