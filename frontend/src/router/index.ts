import { createRouter, createWebHistory } from 'vue-router'
import CreateList from '@/views/CreateList.vue'
import Dashboard from '@/views/Dashboard.vue'
import List from '@/components/Lists/List.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'createList',
      component: CreateList
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/:id',
      name: 'list',
      component: List
    }
  ]
})

export default router
