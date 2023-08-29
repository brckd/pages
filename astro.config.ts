import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bricked.vercel.app",
  integrations: [mdx(), sitemap()],
  experimental: {
    viewTransitions: true,
  },
});
