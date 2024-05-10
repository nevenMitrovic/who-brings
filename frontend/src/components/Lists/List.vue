<template>
  <div class="flex justify-center">
    <div class="w-1/2">
      <div class="w-full max-width-full">
        <div class="border-b border-gray-200 py-2">
          <span class="text-lg text-gray-500">Who brings list for</span>
          <div class="max-width-full truncate text-gray-500 font-bold text-xl">
            {{ list.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import listsService from "@/services/lists-service";

const route = useRoute();
const id = route.params.id as string;

let list = ref({});

onMounted(() => {
  listsService.getList(id).then((res) => {
    list.value = res;
    console.log(res);
  });
});
</script>
