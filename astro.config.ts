import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import markdown from "./src/lib/markdownConfig";
import { SITE_URI } from "./src/consts";

import { loadEnv } from "vite";
import vercel from "@astrojs/vercel";
import netlify from "@astrojs/netlify";

const env = loadEnv(process.env.NODE_ENV!, process.cwd(), "");
const adapter = env.ADAPTER?.toLowerCase();

export default defineConfig({
  site: SITE_URI,
  markdown,
  integrations: [mdx()],
  adapter:
    adapter === "netlify"
      ? netlify()
      : adapter === "vercel"
        ? vercel()
        : undefined,
});
