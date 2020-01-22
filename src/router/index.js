import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JokesDisplay from "../views/JokesDisplay";

Vue.use(VueRouter);
let routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/category/:category",
    name: "JokesDisplay",
    component: JokesDisplay
  },
  { path: "*", name: "home", component: Home },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
