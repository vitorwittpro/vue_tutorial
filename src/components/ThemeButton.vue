<script setup>
import { useThemeStore } from "@/stores/ThemeStore";

const theme = useThemeStore();
</script>

<template>
  <div class="absolute right-5 top-5">
    <input type="checkbox" v-model="theme.checked" />
    <label for="checkbox">Dark</label>
  </div>
</template>
