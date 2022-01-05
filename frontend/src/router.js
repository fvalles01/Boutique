import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardModerator = () => import("./components/BoardModerator.vue")
const BoardUser = () => import("./components/BoardUser.vue")
const contact = () => import("./components/Contact.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Accueil - Boutique",
    },
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "Accueil - Boutique",
    },

  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "Connexion",
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      title: "Inscription",
    },
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "Profil",
    },
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    meta: {
      title: "Admin",
    },
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    meta: {
      title: "Modérateur",
    },
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    meta: {
      title: "Utilisateur",
    },
    // lazy-loaded
    component: BoardUser,
  },
  {
    path: "/contact",
    name: "contact",
    meta: {
      title: "Contact",
    },
    // lazy-loaded
    component: contact,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home', '/contact'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});