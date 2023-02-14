<script setup>
import { useCounterStore } from "@/stores/CounterStore";

const counter = useCounterStore();
</script>

<template>
  <div class="fixed right-10 bottom-16">
    <div class="w-20 h-20 bg-sky-400 text-center rounded-full">
      <h1 class="font-bold text-white text-3xl p-5">{{ counter.count }}</h1>
    </div>
    <div
      class="mt-5 w-20 h-20 bg-red-700 text-center rounded-full"
      @click="counter.increment"
    >
      <button class="font-bold text-white text-3xl p-5">+</button>
    </div>
  </div>
</template>
