import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // state
  const count = ref(0);
  const name = ref([
    "Vitor",
    "Eduardo",
    "Maria",
    "João",
    "Marcio",
    "Fernando",
    "Julia",
  ]);
  const doubleCount = computed(() => count.value * 2);

  // actions
  function increment() {
    count.value++;
  }

  // getters
  return { count, name, doubleCount, increment };
});
