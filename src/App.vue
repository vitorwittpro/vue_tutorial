<template>
  <div>
    <router-link class="mr-4" to="/">Home</router-link>
    <router-link class="mr-4" to="/dc-heroes">DC Heroes</router-link>
    <router-link class="mr-4" to="/calendar">Calendar</router-link>
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
</script>

<style></style>
