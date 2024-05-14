<template>
  <div class="flex justify-center">
    <div class="w-1/2">
      <div class="w-full max-width-full">
        <div class="border-b border-gray-200 py-2">
          <span class="text-lg text-gray-500">Who brings list for</span>
          <div class="max-width-full truncate text-gray-800 font-bold text-2xl">
            {{ list.name }}
          </div>
        </div>
        <div class="border-b border-gray-200 py-2 flex gap-2">
          <div
            class="rounded-3xl bg-gray-200 text-gray-800 flex items-center justify-center w-36 h-8 gap-4 cursor-pointer hover:bg-gray-300"
          >
            <CalendarIcon class="h-4 w-4" />
            <span>Add date</span>
          </div>

          <div
            class="rounded-3xl bg-gray-200 text-gray-800 flex items-center justify-center w-36 h-8 gap-4 cursor-pointer hover:bg-gray-300"
          >
            <MapPinIcon class="h-4 w-4" />
            <span>Add location</span>
          </div>
          <div
            class="rounded-3xl bg-gray-200 text-gray-800 flex items-center justify-center w-52 h-8 gap-4 cursor-pointer hover:bg-gray-300"
          >
            <DocumentTextIcon class="h-4 w-4" />
            <span>Add list description</span>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-2">
          <Input
            :input-id="'addItem'"
            :label="'Add item:'"
            :input-type="'text'"
            :input-placeholder="'Add item ...'"
            :div-width="'w-72'"
          />
          <Button :button-text="'Submit'" :button-class="'h-10 w-28'" />
        </div>
        <div>
          <h2 class="text-2xl text-gray-800 font-bold">Items:</h2>
          <div
            class="bg-gray-300 px-4 flex justify-between items-center h-10 rounded-sm"
          >
            <div class="flex items-center gap-2">
              <CheckCircleIcon class="h-6 w-6 text-gray-200" />
              <span class="text-lg text-gray-800 font-bold">Item</span>
            </div>
            <div
              class="bg-gray-700 text-white rounded text-xs p-1 cursor-pointer hover:bg-gray-500 text-centre"
            >
              <span>I can bring</span>
            </div>
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
import Input from "../Common/Input.vue";
import Button from "../Common/Button.vue";
import {
  CalendarIcon,
  MapPinIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from "@heroicons/vue/24/outline";

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
