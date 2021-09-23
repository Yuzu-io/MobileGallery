import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/pc',
    name: 'pc',
    component: () => import('@/views/pc')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layout'),
    children: [
      {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        name: 'index',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/index')
      },
      {
        path: '/photo1',
        name: 'photo1',
        meta: {
          title: '图库1'
        },
        component: () => import('@/views/photo1')
      },
      {
        path: '/photo2',
        name: 'photo2',
        meta: {
          title: '图库2'
        },
        component: () => import('@/views/photo2')
      },
      {
        path: '/photo3',
        name: 'photo3',
        meta: {
          title: '图库3'
        },
        component: () => import('@/views/photo3')
      }
    ]
  }
]

// 防止路由冗余
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
