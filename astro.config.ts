import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import netlify from "@astrojs/netlify";

import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import markdown from "./src/lib/markdownConfig";
import { SITE_URI } from "./src/consts";

const env = loadEnv(process.env.NODE_ENV!, process.cwd(), "");
const adapter = env.ADAPTER?.toLowerCase();

export default defineConfig({
  site: SITE_URI,
  markdown,
  integrations: [mdx(), sitemap()],
  adapter:
    adapter === "netlify"
      ? netlify()
      : adapter === "vercel"
        ? vercel()
        : undefined,
});
