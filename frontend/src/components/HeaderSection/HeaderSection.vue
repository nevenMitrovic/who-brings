<template>
  <div class="flex justify-center items-center">
    <div class="w-2/3">
      <div>
        <h2 class="font-bold text-4xl text-gray-800 py-10">
          Create simple group pack lists for your next gathering!
        </h2>
      </div>
      <div>
        <h4 class="font-medium text-2xl text-gray-500 py-10">
          Define the items your group needs for your next trip, festival or
          gathering and let the people decide who can bring what. Never have
          more than necessary and less than needed!
        </h4>
      </div>
      <div>
        <Input
          :input-id="'create'"
          :label="'The list name'"
          :input-type="'text'"
          :input-placeholder="'Prvomajski uranak'"
          :div-width="'w-60'"
        />
        <Button :button-text="'Create your list'" :button-class="'my-5'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "@/components/Common/Input.vue";
import Button from "@/components/Common/Button.vue";
</script>
