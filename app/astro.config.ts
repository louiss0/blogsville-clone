import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

import vueJSX from  "@vitejs/plugin-vue-jsx";

import HtmlDirectives from "remark-html-directives";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: ["remark-directive", HtmlDirectives],
  },
  integrations: [tailwind(), vue()],
  server: {
    host: true,
  },
  vite: {
    plugins: [
      vueJSX()
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    ssr: {
      external: ["svgo"],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
