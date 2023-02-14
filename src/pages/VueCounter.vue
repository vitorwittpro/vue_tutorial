<script setup>
import { useCounterStore } from "@/stores/CounterStore";
import { useThemeStore } from "@/stores/ThemeStore";

const counter = useCounterStore();
const theme = useThemeStore();
</script>

<template>
  <div class="w-full h-screen flex justify-center" :class="theme.style">
    <div class="mt-40 p-20">
      <h1 class="font-bold text-3xl mb-10">Count: {{ counter.count }}</h1>
      <h1 class="font-bold text-3xl mb-10">
        Double Count: {{ counter.doubleCount }}
      </h1>
      <button
        class="bg-sky-400 py-5 w-full font-bold text-white text-xl hover:bg-sky-700"
        @click="counter.increment"
      >
        Click
      </button>
    </div>
  </div>
</template>
