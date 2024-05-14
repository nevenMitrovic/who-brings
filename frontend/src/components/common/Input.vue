<template>
  <div :class="divClass">
    <label
      :for="inputId"
      class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <input
      :type="inputType"
      :id="inputId"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :class="inputClass"
      :placeholder="inputPlaceholder"
      @input="handleInput($event.target?.value)"
    />
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits();
defineProps(['inputId', 'label', 'inputType', 'inputClass', 'inputPlaceholder', 'divClass']);
const handleInput = (value: string) => {
    emits('update:modelValue', value) // Emit an event to update the model in the parent component
  }
</script>
