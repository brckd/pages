import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import netlify from "@astrojs/netlify";
import { FontaineTransform } from "fontaine";

import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { join, dirname } from "node:path";

import markdown from "./src/lib/markdownConfig";
import { SITE_URI } from "./src/consts";

const env = loadEnv(process.env.NODE_ENV!, process.cwd(), "");
const adapter = env.ADAPTER?.toLowerCase();

export default defineConfig({
  site: SITE_URI,
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=300, must-revalidate",
    },
  },
  markdown,
  integrations: [mdx(), sitemap()],
  adapter:
    adapter === "netlify"
      ? netlify({
          cacheOnDemandPages: true,
        })
      : adapter === "vercel"
        ? vercel({
            isr: true,
          })
        : undefined,
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ["Noto Sans", "Roboto", "Arial"],
        resolvePath: (id) =>
          new URL(join(dirname(import.meta.url), "node_modules", id)),
      }),
    ],
  },
});
