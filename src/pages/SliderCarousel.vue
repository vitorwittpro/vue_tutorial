<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useThemeStore } from "@/stores/ThemeStore";

const theme = useThemeStore();

const currentSlide = ref(0);
let interval;

onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value === 2 ? (currentSlide.value = 0) : currentSlide.value++;
    console.log(currentSlide.value);
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="flex flex-wrap w-full h-screen" :class="theme.style">
    <div v-if="currentSlide === 0" class="absolute w-full h-1/2 bg-green-700">
      0
    </div>
    <div v-if="currentSlide === 1" class="absolute w-full h-1/2 bg-red-700">
      1
    </div>
    <div v-if="currentSlide === 2" class="absolute w-full h-1/2 bg-gray-700">
      2
    </div>
  </div>
</template>
