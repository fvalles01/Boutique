import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Produit from '../components/Produit/ProduitVisitor.vue'
// import Inscription from '../components/Inscription/Inscription.vue'
// import Connexion from '../components/Connexion/Connexion.vue'

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Sale from '@/views/Sale.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/arnaud',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  


    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }

]

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes
})

export default router