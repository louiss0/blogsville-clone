<script lang="ts" setup>
import { useToggle } from "@vueuse/shared";
import { reactive } from "vue";

const [accordionIsShown, toggleAccordion] = useToggle(false);

defineProps<{
  question: string;
  answer: string;
}>();

const reactiveClasses = reactive({
  get classesUsedToRaiseAnElementsHeight() {
    return [
      "transition-all  duration-300 ease-in overflow-hidden",
      !accordionIsShown.value ? "h-0" : "h-full",
    ];
  },
  get classesUsedToSmoothlyRotateAnElement() {
    return [
      "transition-transform duration-300 ease-in delay-200",
      { "rotate-180": accordionIsShown.value },
    ];
  },
});
</script>

<template>
  <div class="border border-solid border-gray-300">
    <div class="px-4 py-6">
      <div class="flex justify-between items-center">
        <span class="font-bold text-lg">{{ question }}</span>
        <div :class="reactiveClasses.classesUsedToSmoothlyRotateAnElement">
          <button class="text-gray-400" @click="toggleAccordion()">
            <slot name="icon-slot"></slot>
          </button>
        </div>
      </div>
    </div>

    <div :class="reactiveClasses.classesUsedToRaiseAnElementsHeight">
      <div class="px-4 py-6">
        <p>{{ answer }}</p>
      </div>
    </div>
  </div>
</template>
