import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Produit from '../components/Produit/Produit.vue'
import Inscription from '../components/Inscription/Inscription.vue'
import Connexion from '../components/Connexion/Connexion.vue'



const routes = [
  {
    path: '/',
    name: 'produit',
    component: Produit
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: Inscription

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: Connexion
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  mode: "history",
  routes
})

export default router
