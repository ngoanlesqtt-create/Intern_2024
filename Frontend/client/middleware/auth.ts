import { isAuthenticated } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  if (!isAuthenticated()) {
    return navigateTo("/login");
  }
});
