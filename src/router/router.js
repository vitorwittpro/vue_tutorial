import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/VueHome.vue";
import DcHeroes from "@/pages/DcHeroes.vue";
import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";
import VueMarkdown from "@/pages/VueMarkdown.vue";
import VueCounter from "@/pages/VueCounter.vue";
import SlideCarousel from "@/pages/SliderCarousel.vue";

const routes = [
  { path: "", component: Home },
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  { path: "/dc-heroes", component: DcHeroes },
  { path: "/calendar", component: () => import("../pages/VueCalendar.vue") },
  { path: "/markdown", component: VueMarkdown },
  { path: "/counter", component: VueCounter },
  { path: "/slider", component: SlideCarousel },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
