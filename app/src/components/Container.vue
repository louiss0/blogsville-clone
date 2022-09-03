<script lang="ts" setup>
import { useAttrs } from "vue";
import type { HtmlHTMLAttributes } from "vue";

export interface Props extends HtmlHTMLAttributes {
  class: string;
}

const { class: $class } = useAttrs();
</script>

<template>
  <div :class="`mx-auto max-w-screen-lg ${$class}`">
    <slot> <span>Noting to contain</span> </slot>
  </div>
</template>
