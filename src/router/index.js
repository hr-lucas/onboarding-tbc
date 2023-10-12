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
      path: '/scolt/:id',
      name: 'scoltDetails',
      component: () => import('../views/scoltDetails/index.vue'),

    }
  ]
})

export default router
