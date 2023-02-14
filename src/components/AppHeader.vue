<script setup>
import { useCounterStore } from "@/stores/CounterStore";
import ThemeButton from "./ThemeButton.vue";

const routeList = [
  { title: "Home", to: "/" },
  { title: "DC Heroes", to: "/dc-heroes" },
  { title: "Calendar", to: "/calendar" },
  { title: "Markdown", to: "/markdown" },
  { title: "Counter", to: "/counter" },
  { title: "Slider", to: "/slider" },
];

const counter = useCounterStore();
</script>

<template>
  <nav
    class="relative bg-gradient-to-l from-sky-400 to-sky-600 text-white px-10 py-5 text-xl font-bold"
  >
    <router-link
      v-for="item in routeList"
      :key="item.to"
      class="mr-4 hover:text-sky-800"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <theme-button />
  </nav>
</template>
