import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import "dotenv/config";

const url = process.env.URL && new URL(process.env.URL);

export default defineConfig({
  site: url && url.origin,
  base: url && url.pathname,
  integrations: [mdx(), sitemap()],
});
