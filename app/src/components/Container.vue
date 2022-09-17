<script lang="ts" setup>
import { HtmlHTMLAttributes, useAttrs } from "vue";

const { class: $class, ...restAttrs } = useAttrs();

interface Props extends HtmlHTMLAttributes {}

defineProps<Props>();
</script>

<template>
  <div :class="`mx-auto max-w-screen-lg ${$class}`" v-bind="restAttrs">
    <slot> <span>Noting to contain</span> </slot>
  </div>
</template>
