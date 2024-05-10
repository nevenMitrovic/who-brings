<template>
  <div class="grid grid-cols-4 justify-items-center gap-2 p-4">
    <div v-for="list in lists" class="cursor-pointer">
      <List :list="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import List from "./List.vue";
import listsService from "@/services/lists-service";
import { onMounted, ref } from "vue";

const lists = ref([]);

onMounted(() => {
  listsService.getLists().then((res) => (lists.value = res));
});
</script>
