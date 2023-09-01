import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bricked.dev",
  integrations: [mdx(), sitemap()],
  experimental: {
    viewTransitions: true,
  },
});
