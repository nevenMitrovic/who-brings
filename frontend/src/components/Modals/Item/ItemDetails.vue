<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-show="props.modalShow"
    @click="commonStore.toggleItemDetailsModal()"
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
        class="flex min-h-full items-end flex-col justify-end p-4 sm:items-center sm:p-0"
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
          class="w-1/2 bg-white rounded-t-md flex flex-col p-2"
          @click.stop
        >
          <div class="flex justify-between w-full">
            <div class="font-semibold text-2xl">Edit {{ item.name }}</div>
            <div
              class="text-lg text-sm cursor-pointer"
              @click="commonStore.toggleItemDetailsModal()"
            >
              Cancel
            </div>
          </div>
          <div class="w-full">
            <Input
              :input-id="'name'"
              :label="'Item name'"
              :input-class="'text'"
              :input-placeholder="'Add item name'"
              v-model="itemDetails.name"
            />
            <div class="flex flex-col">
              <label
                for="description"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                class="border p-2.5"
                placeholder="Add item description"
                rows="5"
                cols="40"
                maxlength="300"
                v-model="itemDetails.description"
              ></textarea>
            </div>
            <div class="flex gap-5">
              <Input
                :input-id="'amount'"
                :label="'Amount'"
                :input-type="'number'"
                :input-placeholder="'1'"
                :div-class="'w-1/2'"
                v-model="itemDetails.quantity.amount"
              />
              <div class="w-1/2">
                <label
                  for="unit"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >Unit</label
                >
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="itemDetails.quantity.unit"
                >
                  <option value="kg">Kg</option>
                  <option value="liter">Liter</option>
                  <option value="pound">Pound</option>
                  <option value="pieces">Pieces</option>
                  <option value="packs">Packs</option>
                  <option value="gallons">Gallons</option>
                  <option value="bottles">Bottles</option>
                </select>
              </div>
            </div>
            <div class="w-full pt-2">
              <Button
                :button-text="'Save item'"
                :button-class="'w-full'"
                @click="
                  updateItemDetails(props.listId, props.item._id, itemDetails)
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/stores/commonStore";
import { reactive } from "vue";
import listsService from "@/services/lists-service";
import Input from "@/components/Common/Input.vue";
import Button from "@/components/Common/Button.vue";
import type { Item } from "@/types/list";

const commonStore = useCommonStore();

const props = defineProps(["modalShow", "item", "listId"]);

const itemDetails: Item = reactive({
  name: "",
  description: "",
  quantity: { unit: "", amount: 0, collect: 0 },
});

const updateItemDetails = (listId: string, itemId: string, data: Item) => {
  if (!data.name) {
    data.name = props.item.name;
  }

  if(data.quantity?.amount > 1 && data.quantity?.unit == "") {
    data.quantity.unit = "unknown"
  }

  listsService.updateItem(listId, itemId, data).then((res) => {
    commonStore.toggleItemDetailsModal();
    commonStore.toggleItemModal();
  });
};
</script>
