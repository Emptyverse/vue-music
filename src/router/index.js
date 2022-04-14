import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
