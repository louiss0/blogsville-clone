<script lang="ts" setup>
import useSideBarStore from "@/stores/useSideBarStore";
import Container from "./Container.vue";

const { setIsShownToTrue } = useSideBarStore();
</script>

<template>
  <nav class="bg-blue-600 text-gray-50">
    <div data-padding-layer class="py-2 px-6">
      <div data-content-layer class="flex justify-around">
        <div data-hamburger-menu @click="setIsShownToTrue">
          <svg viewBox="0 0 24 24" class="w-12 h-full">
            <path
              fill="currentColor"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            ></path>
          </svg>
        </div>
        <Container class="w-2/5 lg:w-4/5">
          <div data-padding-layer class="py-2 px-6">
            <ul data-content-layer class="flex gap-4 items-center">
              <li class="hover:bg-blue-800 hover:opacity-80">
                <div class="px-3 py-1">
                  <a class="text-lg" href="/">Home</a>
                </div>
              </li>
              <li class="hover:bg-blue-800 hover:opacity-80">
                <div class="px-3 py-1">
                  <a class="text-lg" href="/remark-showcase">Showcase</a>
                </div>
              </li>
            </ul>
          </div>
        </Container>
        <div data-element="light-dark-switch">
          <div data-padding-layer class="py-1 px-6">
            <div data-content-layer class="grid place-items-center h-full">
              <svg viewBox="0 0 24 24">
                <path
                  fill="#888888"
                  d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79l1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41l1.79-1.79zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79l-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41l-1.79 1.8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
