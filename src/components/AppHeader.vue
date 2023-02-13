<template>
  <nav
    class="w-full bg-gradient-to-l from-sky-400 to-sky-600 text-white px-10 py-5 text-xl font-REGULAR"
  >
    <router-link
      v-for="item in routeList"
      :key="item.to"
      class="mr-4 hover:text-sky-800"
      :to="item.to"
      >{{ item.title }}</router-link
    >
  </nav>
</template>

<script setup>
const routeList = [
  { title: "Home", to: "/" },
  { title: "DC Heroes", to: "/dc-heroes" },
  { title: "Calendar", to: "/calendar" },
  { title: "Markdown", to: "/markdown" },
];
</script>

<style></style>
