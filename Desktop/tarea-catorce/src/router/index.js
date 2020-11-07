import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/contact',
    name: 'Contact',
    component: () => import ('../views/Contact.vue')
  },

  {
    path: '/users',
    name: 'Users',
    component: () => import ('../views/Users.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
