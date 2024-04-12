import {createRouter, createWebHistory} from "vue-router";
// Pages
import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import ResetPasswordPage from "@/pages/ResetPasswordPage.vue";
// Views
import BookView from "@/views/BookView.vue";
import EventView from "@/views/EventView.vue";
import OrderView from "@/views/OrderView.vue";
import RestaurantView from "@/views/RestaurantView.vue";
import ShoppingCartView from "@/views/ShoppingCartView.vue";

// Components
import SingleBook from "@/components/book/SingleBook.vue";
import SingleEvent from "@/components/event/SingleEvent.vue";
import SingleRestaurant from "@/components/restaurant/SingleRestaurant.vue";
import AddRestaurant from "@/components/restaurant/AddRestaurant.vue";

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
        path: "/book/:id",
        component: SingleBook,
        props: true,
      },
      {
        path: "restaurant",
        name: "restaurant",
        component: RestaurantView,
      },
      {
        path: "restaurant/:id",
        component: SingleRestaurant,
        props: true,
      },
      {
        path: "add-restaurant",
        component: AddRestaurant,
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
      {
        path: "/event/:id",
        component: SingleEvent,
        props: true,
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
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/reset-password",
    name: "resetpassword",
    component: ResetPasswordPage,
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
