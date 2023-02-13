import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/VueHome.vue";
import DcHeroes from "@/pages/DcHeroes.vue";
import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";
import VueMarkdown from "@/pages/VueMarkdown.vue";

const routes = [
  { path: "", component: Home },
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  { path: "/dc-heroes", component: DcHeroes },
  { path: "/calendar", component: () => import("../pages/VueCalendar.vue") },
  { path: "/markdown", component: VueMarkdown },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
