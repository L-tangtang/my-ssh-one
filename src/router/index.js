import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Main from '../views/Mian.vue'
import Shop from '../views/Shop.vue'
import My from '../views/My.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/home/main',
    children: [
      {
        path: '/home/main',
        // component: () => import('../views/Mian')
        component: Main
      },
      {
        path: '/home/shop',
        component: Shop,
        // component: () => import('../views/Shop')
      },
      {
        path: '/home/my',
        component: My,
        // component: () => import('../views/My')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
