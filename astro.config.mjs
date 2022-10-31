import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://t2k-group.co.uk",
  integrations: [tailwind(), sitemap(), robotsTxt(), compress()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  }
});