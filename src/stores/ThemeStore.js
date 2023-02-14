import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const checked = ref(true);
  const style = computed(() => {
    return checked.value ? "bg-black text-white" : "";
  });

  return { checked, style };
});
