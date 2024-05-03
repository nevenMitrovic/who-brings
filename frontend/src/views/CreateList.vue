<template>
  <Navigation />
  <Input :input-id="'create'" :label="'The list name'" :input-type="'text'" :input-placeholder="'Prvomajski uranak'" :div-width="'w-60'" />
</template>

<script setup lang="ts">
import Navigation from "@/components/Common/Navigation.vue";
import Input from "@/components/Common/Input.vue";
</script>
