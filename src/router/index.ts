import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/CreateComponent.vue')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
