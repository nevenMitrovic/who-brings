<template>
  <div
    class="relative container w-72 h-64 bg-orange-300 rounded-xl py-4 shadow-lg hover:bg-orange-200 px-1"
  >
    <div>
      <h2 v-if="createdAt == updatedAt" class="text-gray-600 text-sm font-bold">Created at</h2>
      <h2 v-else class="text-gray-600 text-sm font-bold">Updated at</h2>
      <div class="text-gray-600 text-xs">{{ date }} , {{ time }}</div>
    </div>
    <h1 class="font-bold text-lg text-gray-800 text-center py-2 max-w-full truncate">{{ list.name }}</h1>
    <span
      class="absolute right-1 bottom-1 rounded-3xl text-gray-600 hover:text-gray-800"
    >
      Click for more details
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["list"]);

let createdAt = props.list.createdAt;
let updatedAt = props.list.updatedAt;
let date: string;
let time: string;

if (createdAt && updatedAt) {
  if (createdAt == updatedAt) {
    date = createdAt.split("T")[0].split("-");
    date = date[2] + "." + date[1] + "." + date[0];

    time = createdAt.split("T")[1].split(".")[0];
  } else {
    date = updatedAt.split("T")[0].split("-");
    date = date[2] + "." + date[1] + "." + date[0];

    time = updatedAt.split("T")[1].split(".")[0];
  }
} else {
  date = 'unknown';
  time = 'unknown';
}
</script>
