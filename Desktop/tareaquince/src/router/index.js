import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
    {
    path: '/users',
    name: 'Users',
    component: () => import ('../views/Users.vue')
  },

  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import ('../views/Editar.vue')

  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
