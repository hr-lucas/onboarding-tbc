import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/acompanhante/:id',
      name: 'scoltDetails',
      component: () => import('../views/scoltDetails/index.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/politics/index.vue'),
    }
  ]
})

export default router
