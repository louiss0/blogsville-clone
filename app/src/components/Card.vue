<script lang="ts" setup>
import Gap from "./Gap.vue";

interface Props {
  title: string;
  src: string;
  paragraph: string;
  createdAt: string;
  readTime: number;
  isFirst?: true;
}

const { title } = defineProps<Props>();

const slugifiedTitle = title.toLowerCase().replace(/\s+/g, "-");
</script>

<template>
  <a
    class="grid"
    :href="slugifiedTitle"
    :class="isFirst && 'place-items-center text-center'"
  >
    <img :src="src" alt="" class="w-full" />
    <Gap :spaces="1.5" />
    <div class="text-gray-400 uppercase">
      <div class="flex gap-4 text-xs sm:text-base">
        <span>{{ createdAt }}</span>
        <span>{{ readTime }} Min Read</span>
      </div>
    </div>
    <Gap :spaces="1.25" />
    <div :class="isFirst ? 'text-3xl' : 'text-2xl'">{{ title }}</div>
    <Gap :spaces="1" />
    <p class="font-light">
      {{ paragraph }}
    </p>
  </a>
</template>
