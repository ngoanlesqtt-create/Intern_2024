import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Default from "../Pages/DefaultLayout/Default.vue";
import Login from "@/Pages/Login/Login.vue";
import Register from "@/Pages/Register/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Default,
      children: [
        {
          path: "",
          component: HomeView,
        },
        {
          path: "/login",
          component: Login,
        },
        {
          path: "register",
          component: Register,
        },
      ],
    },
  ],
});

export default router;
