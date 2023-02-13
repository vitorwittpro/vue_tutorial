<template>
  <div class="w-full flex justify-center">
    <div
      class="flex flex-col mt-60 px-20 py-12 rounded-md shadow-[1px_1px_5px_2px_rgba(0,0,0,0.3)]"
    >
      <h1 class="font-bold text-4xl mb-10">Sign up</h1>
      <input
        class="border-solid border-2 rounded-full mb-4 p-4 text-xl focus:outline-none"
        type="text"
        placeholder="Type your email"
      />
      <input
        class="border-solid border-2 rounded-full mb-4 p-4 text-xl focus:outline-none"
        type="text"
        placeholder="Type your password"
      />
      <button
        class="bg-sky-400 p-4 font-bold text-white text-2xl rounded-full hover:text-sky-400 hover:shadow-[0_0_0_1px_#0ea5e9] hover:bg-white"
      >
        Sign Up
      </button>
    </div>
  </div>
</template>

<script setup></script>
