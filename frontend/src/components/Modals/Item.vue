<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-show="props.modalShow"
    @click="commonStore.toggleItemModal()"
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
        class="flex min-h-full items-end flex-col justify-end p-4 text-center sm:items-center sm:p-0"
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
          class="w-1/2 h-96 bg-white rounded-t-md flex flex-col justify-between p-2"
          @click.stop
        >
          <div>
            <div class="flex justify-between items-center">
              <div class="text-2xl font-semibold">{{ props.item.name }}</div>
              <div class="flex gap-4 text-md">
                <div class="cursor-pointer">Edit</div>
                <div class="text-red-700 cursor-pointer">Delete</div>
              </div>
            </div>
            <div class="flex justify-start text-sm">
              Item created by guest on {{ createdAt(props.item) }}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <Input
              :input-id="'name'"
              :label="'Your name'"
              :input-type="'text'"
              :div-class="'flex flex-col items-start'"
              v-model="name"
              v-bind="nameAttrs"
            />
            <span class="text-red-700 text-sm flex">{{ errors.name }}</span>
            <Button :button-text="'I can bring'" @click="updateBring(name)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/stores/commonStore";
import listsService from "@/services/lists-service";
import Input from "../Common/Input.vue";
import Button from "../Common/Button.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import type { Item } from "@/types/list";

const props = defineProps(["modalShow", "item", "listId"]);

const commonStore = useCommonStore();

const createdAt = (item: any) => {
  let date: string | string[];
  let time: string;

  if (item.createdAt) {
    date = item.createdAt.split("T")[0].split("-");
    date = date[2] + "." + date[1] + "." + date[0];

    time = item.createdAt.split("T")[1].split(".")[0];

    return `${date}, ${time}`;
  }
};

const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      name: z.string().min(1),
    })
  ),
});

const [name, nameAttrs] = defineField("name");

const updateBring = (name: any) => {
  let item: Item = {
    name: props.item.name,
    bring: {
      name,
      bring: 1,
    },
  };

  listsService.updateItem(props.listId, props.item._id, item).then((res) => {
    commonStore.toggleItemModal();
  });
};
</script>
