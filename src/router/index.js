import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('@/views/CalculatorView.vue')
    },
    {
      path: '/day2',
      name: 'day2',
      component: () => import('@/views/Day2.vue')
    },
  ]
})

export default router
