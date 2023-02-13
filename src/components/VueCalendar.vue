<script setup>
import { computed, reactive } from "vue";

const week_days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const currentDate = reactive({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
});

const currentMonthName = computed(() => {
  return new Date(currentDate.year, currentDate.month)
    .toLocaleString("default", {
      month: "long",
    })
    .toUpperCase();
});

const daysInMonth = (year, month) => {
  return new Date(year, month + 1, 0, 1).getDate();
};

const startDay = () => {
  return new Date(currentDate.year, currentDate.month).getDay();
};

function handleNext() {
  currentDate.month++;
  console.log(currentDate.month);
}

function handlePrev() {
  currentDate.month--;
  console.log(currentDate.month);
}
</script>

<template>
  <div class="w-full flex">
    <div class="m-auto mt-20">
      <h1 class="text-3xl text-center font-bold">Vue Calendar</h1>
      <section class="flex flex-row justify-between mx-4 mt-10">
        <h2 class="font-bold">{{ currentMonthName }}</h2>
        <h2 class="font-bold">{{ currentDate.year }}</h2>
      </section>
      <section class="flex flex-row mt-5">
        <p
          class="h-10 text-center"
          style="width: 14.28%"
          v-for="day in week_days"
          :key="day"
        >
          {{ day }}
        </p>
      </section>
      <section class="flex flex-wrap mt-2">
        <p
          class="h-10 text-center"
          style="width: 14.28%"
          v-for="num in startDay()"
          :key="num"
        ></p>
        <p
          class="h-10 text-center"
          style="width: 14.28%"
          v-for="num in daysInMonth(currentDate.year, currentDate.month)"
          :key="num"
        >
          {{ num }}
        </p>
      </section>
      <div class="w-full flex justify-between p-4">
        <button
          v-on:click="handlePrev"
          class="px-10 py-2 rounded-full text-white font-bold text-1xl bg-sky-500 hover:bg-sky-800"
        >
          Prev
        </button>
        <button
          v-on:click="handleNext"
          class="px-10 py-2 rounded-full text-white font-bold text-1xl bg-sky-500 hover:bg-sky-800"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
