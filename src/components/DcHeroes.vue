<script setup>
import { reactive, ref, computed } from "vue";

const dcHeroes = reactive([
  { name: "Batman" },
  { name: "Arrow" },
  { name: "Wonder Woman" },
  { name: "Flash" },
  { name: "Supergirl" },
]);

const newHero = ref("");

const heroCounter = computed(() => {
  return dcHeroes.length;
});

const addHero = () => {
  if (newHero.value !== "") {
    dcHeroes.unshift({ name: newHero.value });
    newHero.value = "";
  }
};

const deleteHero = (index) => {
  // solution 1
  dcHeroes.splice(index, 1);
};
</script>

<template>
  <div class="w-full flex">
    <div class="mx-auto mt-40">
      <h1 class="text-3xl font-bold mb-10">DC Heroes: {{ heroCounter }}</h1>
      <div class="flex-column">
        <ul class="flex-column">
          <li
            class="flex justify-between"
            v-for="(hero, index) in dcHeroes"
            :key="hero.name"
          >
            <div>
              {{ hero.name }}
            </div>
            <button @click="deleteHero(index)">
              <strong>x</strong>
            </button>
          </li>
        </ul>
        <form class="mt-10" @submit.prevent="addHero">
          <input
            class="border-solid border-2 rounded-lg mr-5 mb-2 px-3 py-1 focus:outline-none"
            v-model.trim="newHero"
            placeholder="Type hero name..."
          />
          <button
            class="text-white bg-sky-500 rounded-full px-5 py-1 hover:bg-sky-700"
            type="submit"
          >
            Add hero
          </button>
        </form>
        <small>Total in the list: {{ heroCounter }} heroes</small>
      </div>
    </div>
  </div>
</template>
