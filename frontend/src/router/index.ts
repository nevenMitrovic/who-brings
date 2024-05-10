import { createRouter, createWebHistory } from 'vue-router'
import CreateList from '@/views/CreateList.vue'
import Dashboard from '@/views/Dashboard.vue'
import ListView from '@/views/ListView.vue'

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
      component: ListView
    }
  ]
})

export default router
