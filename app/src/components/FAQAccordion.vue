<script lang="ts" setup>
import { useToggle } from "@vueuse/shared";

const [accordionIsShown, toggleAccordion] = useToggle();

defineProps<{
  question: string;
  answer: string;
}>();
</script>

<template>
  <div class="border border-solid bg-gray-300">
    <div class="bg-gray-200 px-4 py-6">
      <div class="flex justify-between items-center">
        <span>{{ question }}</span>
        <div
          class="transition-transform duration-500 ease-in"
          :class="{ 'rotate-y-360': accordionIsShown }"
        >
          <button class="text-gray-400" @click="toggleAccordion()">
            >
            <slot name="icon-slot"> </slot>
          </button>
        </div>
      </div>
    </div>
    <div :class="[accordionIsShown ? 'h-0' : 'min-h-fit']">
      <div
        class="transition-transform duration-300 ease-in"
        :class="[accordionIsShown ? 'scale-x-0' : 'scale-x-100']"
      >
        <div class="px-4 py-6">
          <p>{{ answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
