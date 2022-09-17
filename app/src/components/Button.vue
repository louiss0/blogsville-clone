<script lang="ts" setup>
import { useAttrs, ButtonHTMLAttributes } from "vue";

interface Props extends ButtonHTMLAttributes {
  href?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const { size = "md" } = defineProps<Props>();

const { class: $class, ...restAttrs } = useAttrs();

const classObject = {
  "py-1 px-3": size === "xs",
  "py-2 px-6": size === "sm",
  "py-3 px-9": size === "md",
  "py-4 px-12": size === "lg",
  "py-5 px-14": size === "xl",
};
</script>

<template>
  <template v-if="href">
    <a
      :href="href"
      :class="['inline-block', $class, classObject]"
      v-bind="restAttrs"
    >
      <slot />
    </a>
  </template>
  <template v-else>
    <button :class="[$class, classObject]" v-bind="restAttrs">
      <slot />
    </button>
  </template>
</template>
