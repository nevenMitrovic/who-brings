<template>
  <div
    class="relative container w-72 h-64 bg-orange-300 rounded-xl py-4 shadow-lg hover:bg-orange-200"
  >
    <h1 class="font-bold text-lg text-gray-800 text-center">{{ list.name }}</h1>
    <span
      class="absolute right-1 bottom-1 rounded-3xl text-gray-600 hover:text-gray-800"
    >
      Click for more details
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps(["list"]);
</script>
