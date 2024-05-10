<template>
  <div class="grid grid-cols-4 justify-items-center gap-2 p-4">
    <div v-for="list in lists" class="cursor-pointer" :key="list._id">
      <RouterLink :to="{ params: { id: list._id }, name: 'list' }">
        <ListCard :list="list" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListCard from "./ListCard.vue";
import listsService from "@/services/lists-service";
import { onMounted, ref } from "vue";

const lists = ref([]);

onMounted(() => {
  listsService.getLists().then((res) => (lists.value = res));
});
</script>
