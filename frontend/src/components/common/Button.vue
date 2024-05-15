<template>
  <button
    type="button"
    :class="buttonClass"
    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    {{ buttonText }}
  </button>
</template>

<script setup lang="ts">
defineProps(['buttonText', 'buttonClass']);
</script>
