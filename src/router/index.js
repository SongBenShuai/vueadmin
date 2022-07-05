import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout')
    // children: [
    //   {
    //     path: 'index',
    //     name: 'index',
    //     meta: {
    //       title: '首页',
    //       // iocn: '<home-outlined/>'
    //     },
    //     component: () => import('@/views/index/index')
    //   },
    //   {
    //     path:'/404',
    //     name:'404',
    //     component:()=>import('@/views/error-page/404')
    //   },
    //   {
    //     path:'/401',
    //     name:'401',
    //     component:()=>import('../views/error-page/401')
    //   }
    // ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
