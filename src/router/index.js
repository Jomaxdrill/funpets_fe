import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import MainScreen from "../views/MainScreen.vue";
import LoginScreen from "../views/LoginScreen.vue";
<<<<<<< HEAD
import Register from "../views/Register.vue";
=======
>>>>>>> b8fc6835595b15958b0ebef0a85296712a84eb75

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Inicio",
    name: "Inicio",
    component: MainScreen,
  },
  {
    path: "/Login",
    name: "Login",
    component: LoginScreen,
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
<<<<<<< HEAD
=======
  },
  {
    path: "/Inicio",
    name: "Inicio",
    component: MainScreen,
  },
  {
    path: "/Login",
    name: "Login",
    component: LoginScreen,
>>>>>>> b8fc6835595b15958b0ebef0a85296712a84eb75
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
