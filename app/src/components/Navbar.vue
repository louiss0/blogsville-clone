<script lang="tsx" setup>
import { NavLinks } from "@/types";
import { useToggle } from "@vueuse/shared";
import Container from "./Container.vue";

const [showGridIcon, toggleGridIcon] = useToggle(true);

const links: ReadonlyArray<NavLinks> = [
  { path: "/", text: "Home" },
  { path: "/categories", text: "Categories" },
  { path: "/about", text: "About" },
  { path: "/membership", text: "Membership" },
  { path: "/contact", text: "Contact" },
];
</script>

<template>
  <nav class="font-display border-b-2 border-gray-400 border-solid">
    <div class="uppercase">
      <Container class="w-5/6 max-w-screen-xl font-bold">
        <div data-padding-layer class="py-3 px-6">
          <div
            data-content-layer
            class="flex items-center justify-between h-16"
          >
            <a href="/">
              <div class="px-3 py-6">
                <img
                  src="@/images/621f991fcec6662e2f39abbf_logo.svg"
                  alt="Blogsville"
                />
              </div>
            </a>

            <ul class="hidden lg:block">
              <div class="flex items-center w-3/5 h-full">
                <li
                  v-for="{ path, text } of links"
                  class="grid place-items-center flex-1 h-full"
                >
                  <a :href="path">
                    <div class="px-3 py-6">
                      {{ text }}
                    </div>
                  </a>
                </li>
                <div class="flex gap-2">
                  <SearchIcon />
                  <div class="relative">
                    <div class="absolute -top-3 -right-3">
                      <div class="bg-green-300 rounded-full">
                        <div class="py-1 px-1">0</div>
                      </div>
                    </div>
                    <ShoppingCartIcon />
                  </div>
                </div>
              </div>
            </ul>
            <button class="lg:hidden" @click="toggleGridIcon()">
              <Transition
                mode="out-in"
                enter-active-class="transform transition-transform ease-out duration-300"
                enter-from-class="scale-0"
                enter-to-class="scale-100"
                leave-active-class="transform transition-transform ease-in duration-300"
                leave-from-class="scale-100"
                leave-to-class="scale-25"
              >
                <template v-if="showGridIcon">
                  <GridIcon />
                </template>
                <template v-else>
                  <CloseIcon />
                </template>
              </Transition>
            </button>
          </div>
        </div>
      </Container>
      <div v-show="!showGridIcon" class="absolute left-0 right-0 top-14 z-50">
        <div class="bg-white">
          <div class="p-4">
            <ul class="grid gap-2 font-bold">
              <template v-for="{ path, text } of links" :key="text">
                <li>
                  <a :href="path">{{ text }}</a>
                </li>
              </template>
            </ul>
            <div class="grid gap-3">
              <SearchIcon />
              <div class="relative justify-self-start">
                <div class="absolute -top-3 -right-3">
                  <div class="bg-green-300 rounded-full">
                    <div class="py-1 px-1">0</div>
                  </div>
                </div>
                <ShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="tsx">
export default {
  components: {
    GridIcon() {
      return (
        <svg class="w-8 h-8" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"
          />
        </svg>
      );
    },

    SearchIcon() {
      return (
        <svg class="w-8 h-8" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
          />
        </svg>
      );
    },

    ShoppingCartIcon() {
      return (
        <svg class="w-8 h-8" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"
          />
        </svg>
      );
    },

    CloseIcon() {
      return (
        <svg class="w-8 h-8" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z"
          />
        </svg>
      );
    },
  },
};
</script>
