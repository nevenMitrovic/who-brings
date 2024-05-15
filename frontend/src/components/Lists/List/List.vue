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
            v-if="list.date"
            class="rounded-3xl bg-gray-200 text-gray-800 flex items-center justify-center p-2 h-8 gap-4 cursor-pointer hover:bg-gray-300"
            @click="() => commonStore.toggleDateModal()"
          >
            <CalendarIcon class="h-4 w-4" />
            {{ list.date }}
          </div>
          <div
            class="rounded-3xl bg-gray-200 text-gray-800 flex items-center justify-center p-2 h-8 gap-4 cursor-pointer hover:bg-gray-300"
            @click="() => commonStore.toggleDateModal()"
            v-else
          >
            <CalendarIcon class="h-4 w-4" />
            <span>Add date</span>
          </div>
          <div
            class="rounded-3xl bg-gray-200 text-gray-800 flex items-center justify-center h-8 gap-4 p-2 cursor-pointer hover:bg-gray-300"
            @click="() => commonStore.toggleLocationModal()"
            v-if="list.location"
          >
            <MapPinIcon class="h-4 w-4" />
            <span>{{ list.location }}</span>
          </div>
          <div
            class="rounded-3xl bg-gray-200 text-gray-800 flex items-center justify-center h-8 gap-4 p-2 cursor-pointer hover:bg-gray-300"
            @click="() => commonStore.toggleLocationModal()"
            v-else
          >
            <MapPinIcon class="h-4 w-4" />
            <span>Add location</span>
          </div>
          <div
            class="rounded-3xl bg-gray-200 text-gray-800 flex items-center justify-center p-2 h-8 gap-4 cursor-pointer hover:bg-gray-300"
            @click="() => commonStore.toggleDescriptionModal()"
            v-if="!list.description"
          >
            <DocumentTextIcon class="h-4 w-4" />
            <span>Add list description</span>
          </div>
        </div>
        <div
          class="text-gray-800 flex flex-col justify-center p-2 cursor-pointer rounded-md break-words whitespace-normal border-b border-gray-200 hover:bg-gray-100"
          @click="() => commonStore.toggleDescriptionModal()"
          v-if="list.description"
        >
          <h4 class="text-gray-800 text-xs font-bold">List description:</h4>
          <span>{{ list.description }}</span>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-2">
          <Input
            :input-id="'addItem'"
            :label="'Add item:'"
            :input-type="'text'"
            :input-placeholder="'Add item ...'"
            :div-class="'w-72'"
          />
          <Button :button-text="'Submit'" :button-class="'h-10 w-28'" />
        </div>
        <div>
          <h2 class="text-2xl text-gray-800 font-bold">Items:</h2>
          <div v-for="item in list.items">
            <Item :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DateModal :modal-show="dateModalVisibility" :list="list" />
  <LocationModal :modal-show="locationModalVisibility" :list="list" />
  <DescriptionModal :modal-show="descriptionModalVisibility" :list="list" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useCommonStore } from "@/stores/commonStore";
import listsService from "@/services/lists-service";
import Input from "../../Common/Input.vue";
import Button from "../../Common/Button.vue";
import Item from "./Item.vue";
import DateModal from "../../Modals/Date.vue";
import LocationModal from "../../Modals/Location.vue";
import DescriptionModal from "@/components/Modals/Description.vue";
import {
  CalendarIcon,
  MapPinIcon,
  DocumentTextIcon,
} from "@heroicons/vue/24/outline";

const commonStore = useCommonStore();
const dateModalVisibility = computed(() => commonStore.getDateModalVisibility);
const locationModalVisibility = computed(
  () => commonStore.getLocationModalVisibility
);
const descriptionModalVisibility = computed(
  () => commonStore.getDescriptionModalVisibility
);

const route = useRoute();
const id = route.params.id as string;

let list = ref({});

onMounted(() => {
  listsService.getList(id).then((res) => {
    list.value = res;
  });
});

watch(
  [dateModalVisibility, locationModalVisibility, descriptionModalVisibility],
  () => {
    listsService.getList(id).then((res) => {
      list.value = res;
    });
  }
);
</script>
