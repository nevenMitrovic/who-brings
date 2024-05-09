<template>
  <div class="container">
    <!-- <div v-for="list in lists">
      <List :list="list" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import List from "./List.vue";
import listsService from "@/services/lists-service";

listsService.getLists()
.then(res => console.log(res))
</script>
