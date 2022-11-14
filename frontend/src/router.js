import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import NewRestaurant from "@/components/restaurant/NewRestaurant.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new-restaurant",
    name: "NewRestaurant",
    component: NewRestaurant,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
