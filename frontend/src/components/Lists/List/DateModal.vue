<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-show="props.modalShow"
  >
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="p-2">
            <div class="text-xl py-2">Edit date</div>
            <Input
              :label="'Start datetime'"
              :input-type="'date'"
              :input-class="'w-40'"
              v-model="date"
            />
          </div>
          <div
            class="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
          >
            <button
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              @click="updateDate"
            >
              Save
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              @click="() => commonStore.toggleDateModal()"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../../Common/Input.vue";
import { useCommonStore } from "@/stores/commonStore";
import listsService from "@/services/lists-service";
import { type List } from "@/types/list";
import { ref } from "vue";

const props = defineProps(["modalShow", "list"]);

const commonStore = useCommonStore();

let date = ref("");

const updateDate = (list: any) => {
  let newDate: string | string[] = date.value.split('-');
  newDate = newDate[2] + '.' + newDate[1] + '.' +  newDate[0];
  list.date = newDate;

  listsService.updateList(props.list._id, list)
  .then(res => commonStore.toggleDateModal())
};
</script>
