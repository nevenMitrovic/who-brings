<template>
    <div class="container w-96 h-96 bg-blue-700">
        {{ list.name }}
    </div>
</template>

<script setup lang="ts">
defineProps(['list']);
</script>