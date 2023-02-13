import { createRouter, createWebHistory } from "vue-router";

import VueHome from "@/components/VueHome.vue";
import DcHeroes from "@/components/DcHeroes.vue";
import VueCalendar from "@/components/VueCalendar.vue";

const routes = [
  { path: "/", component: VueHome },
  { path: "/dc-heroes", component: DcHeroes },
  { path: "/calendar", component: VueCalendar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
