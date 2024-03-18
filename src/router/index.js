import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import homepages from '../pages/home.vue'
import computerprogramming from '../pages/computerprogramming.vue'
import ccc from '../ccc/home-ccc.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/home'
  },
  {
    path:'/CCC',
    name:'ccc',
    component:ccc
  },
  {
    path:'/home',
    name:'Pages',
    component:homepages
  },
  {
    path:'/computer-programming',
    name:'computer-programming',
    component:computerprogramming
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
