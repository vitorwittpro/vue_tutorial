<script setup>
import { ref } from "vue";
import { useThemeStore } from "@/stores/ThemeStore";

const theme = useThemeStore();

const text = ref("");
</script>

<template>
  <div class="flex w-full flex-wrap" :class="theme.style">
    <h1 class="w-full text-center my-5 font-bold text-3xl">Markdown App</h1>
    <section class="w-10/12 flex m-auto h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full bg-transparent"
          v-model="text"
          name=""
          id=""
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-200 text-black">
        {{ text }}
      </article>
    </section>
  </div>
</template>
