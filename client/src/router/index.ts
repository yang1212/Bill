import { createRouter, createWebHashHistory } from 'vue-router'

// 开启hash模式
const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('../views/index.vue'),
      redirect: 'home',
      children: [
        {
          path: '/home',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/chart',
          component: () => import('../views/Chart.vue')
        },
        {
          path: '/listDetail',
          component: () => import('../views/listDetail.vue')
        }
      ]
    }
  ]
})

export default router