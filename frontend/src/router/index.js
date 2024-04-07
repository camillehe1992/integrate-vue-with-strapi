import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import BookView from "@/views/BookView.vue";
import RestaurantView from "@/views/RestaurantView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/book",
    name: "book",
    component: BookView,
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: RestaurantView,
  },
  {
    path: "/shopping",
    name: "shopping",
    component: ShoppingCartView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
