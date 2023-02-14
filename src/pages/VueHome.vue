<script setup>
import { useCounterStore } from "@/stores/CounterStore";
import { useThemeStore } from "@/stores/ThemeStore";

const counter = useCounterStore();
const theme = useThemeStore();
</script>

<template>
  <div class="w-full h-screen flex justify-center pt-40" :class="theme.style">
    <div class="flex flex-col gap-5">
      <h1 class="font-bold text-3xl">
        Welcome {{ counter.name[counter.count] }}
      </h1>
    </div>
  </div>
</template>
