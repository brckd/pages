import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import { SITE_URI, SITE_TITLE } from "./src/consts";
import favicons from "astro-favicons";
import mdxConfig from "./src/lib/markdownConfig";

import vercel from "@astrojs/vercel";
import netlify from "@astrojs/netlify";
const env = loadEnv(process.env.NODE_ENV!, process.cwd(), "");
const adapter = env.ADAPTER?.toLowerCase();

export default defineConfig({
  site: SITE_URI,
  integrations: [
    favicons({
      input: "src/assets/icons/icon.png",
      name: SITE_TITLE,
      short_name: SITE_TITLE,
    }),
  ],
  markdown: mdxConfig,
  adapter:
    adapter === "netlify"
      ? netlify()
      : adapter === "vercel"
        ? vercel()
        : undefined,
});
