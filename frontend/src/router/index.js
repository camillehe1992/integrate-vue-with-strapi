import {createRouter, createWebHistory} from "vue-router";
// Pages
import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
// Views
import BookView from "@/views/BookView.vue";
import EventView from "@/views/EventView.vue";
import OrderView from "@/views/OrderView.vue";
import RestaurantView from "@/views/RestaurantView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    children: [
      {
        path: "/book",
        name: "book",
        component: BookView,
      },
      {
        path: "restaurant",
        name: "restaurant",
        component: RestaurantView,
      },
      {
        path: "/order",
        name: "order",
        component: OrderView,
      },
      {
        path: "/shopping",
        name: "shopping",
        component: ShoppingCartView,
      },
      {
        path: "/event",
        name: "event",
        component: EventView,
      },
    ],
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
