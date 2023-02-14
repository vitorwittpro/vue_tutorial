<template>
  <div>
    <app-header />
    <router-view />
    <vue-counter />
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import VueCounter from "@/components/VueCounter.vue";
</script>
