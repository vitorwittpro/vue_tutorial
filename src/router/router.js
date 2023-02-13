import { createRouter, createWebHistory } from "vue-router";

import DcHeroes from "@/views/DcHeroes.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  { path: "/", component: SignIn },
  { path: "/sign-up", component: SignUp },
  { path: "/dc-heroes", component: DcHeroes },
  {
    path: "/calendar",
    component: () => import("../views/VueCalendar.vue"), // lazy loading, load after clicked
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
