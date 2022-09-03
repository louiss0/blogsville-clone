<script lang="ts" setup>
import useSideBarStore from "@/stores/useSideBarStore";

const { getIsShown, setIsShownToFalse } = useSideBarStore();
</script>

<template>
  <div
    class="absolute w-screen h-screen z-50"
    :aria-hidden="getIsShown"
    v-show="getIsShown"
  >
    <div class="relative w-full h-full">
      <Transition
        enterActiveClass="transform transition-transform duration-300 delay-300 ease-in-out"
        enterFromClass="-translate-x-full"
        leaveToClass="-translate-x-full"
      >
        <aside
          v-show="getIsShown"
          class="absolute top-0 bottom-0 bg-gray-100 w-2/5 z-20"
        >
          <div class="px-4 py-2">
            <div class="flex justify-end" @click="setIsShownToFalse">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="#888888"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"
                />
              </svg>
            </div>
            <ul>
              <li>
                <div class="py-2 px-6">
                  <a href="/">Home</a>
                </div>
              </li>
              <li>
                <div class="py-2 px-6">
                  <a href="/remark-showcase">Showcase</a>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </Transition>
      <Transitiion
        enterActiveClass="transform transition-transform duration-400 ease-in-out"
        enterFromClass="scale-0"
        leaveToClass="scale-25"
      >
        <div
          v-show="getIsShown"
          class="w-full h-full z-10 bg-gray-500 opacity-80"
        >
          <div class="sr-only">Backdrop</div>
        </div>
      </Transitiion>
    </div>
  </div>
</template>
