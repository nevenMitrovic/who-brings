<template>
  <div
    class="px-4 flex justify-between items-center h-10 rounded-sm border border-gray-100 cursor-pointer shadow-md"
    :class="item.bring == 1 && 'border-green-300 bg-green-100 shadow-green-100'"
  >
    <div class="flex items-center gap-2">
      <CheckCircleIcon class="h-6 w-6 text-gray-200" :class="item.bring == 1 && 'text-green-300'" />
      <span class="text-lg text-gray-800 font-bold">{{ item.name }}</span>
    </div>
    <div
      class="bg-gray-700 text-white rounded text-xs p-1 cursor-pointer hover:bg-gray-500 text-centre"
    >
      <span>I can bring</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/outline";

defineProps(['item']);

</script>
