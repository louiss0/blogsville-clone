<script lang="ts" setup>
import { useAttrs, computed } from "vue";

interface Props {
  href?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const { size = "md" } = defineProps<Props>();

const { class: $class, ...restAttrs } = useAttrs();

const classObject = computed(() => ({
  "py-1 px-3": size === "xs",
  "py-2 px-6": size === "sm",
  "py-3 px-9": size === "md",
  "py-4 px-12": size === "lg",
  "py-5 px-14": size === "xl",
}));
</script>

<template>
  <a v-if="href" :href="href" :class="[$class, classObject]" v-bind="restAttrs">
    } ]" >
    <slot />
  </a>
  <button :class="[$class, classObject]" v-bind="restAttrs" v-else>
    <slot />
  </button>
</template>
