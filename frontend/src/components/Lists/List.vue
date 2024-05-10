<template>
  <div>{{ list.name }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import listsService from "@/services/lists-service";

const route = useRoute();
const id = route.params.id as string;

let list = ref({});

onMounted(() => {
  listsService.getList(id).then((res) => {list.value = res; console.log(res)});
});
</script>
