import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import netlify from "@astrojs/netlify";
import { FontaineTransform } from "fontaine";
import type { RedirectConfig } from "astro";
import icon from "astro-icon";
type IconOptions = Parameters<typeof icon>[0];

import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { join, dirname } from "node:path";

import markdown from "./src/lib/markdownConfig";
import { SITE_URI } from "./src/consts";

const env = loadEnv(process.env.NODE_ENV!, process.cwd(), "");
const adapter = env.ADAPTER?.toLowerCase();

const iconOptions: IconOptions = {
  include: {
    lucide: [
      "arrow-right",
      "arrow-left",
      "chevron-right",
      "copyright",
      "rss",
      "dot",
    ],
  },
};

const redirects: Record<string, RedirectConfig> = {
  "/blog/magically-style-your-desktop-with-stylix": "/blog/magic-stylix",
  "/blog/my-first-custom-linux-setup": "/blog/arch-setup",
  "/blog/celebrating-a-new-domain": "/blog/new-domain",
  "/blog/welcome-to-my-blog": "/blog/welcome",
  "/blog/every-minute-counts": "/blog/read-counters",
  "/blog/introducing-tags": "/blog/blog-tags",
  "/blog/undergoing-an-overhaul": "/blog/online-presence-v2",
  "/blog/the-glow-up-is-real": "/blog/online-presence-v3",
  "/blog/a-sight-to-behold": "/blog/blog-images",
};

export default defineConfig({
  site: SITE_URI,
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "X-Content-Type-Options": "nosniff",
    },
  },
  redirects,
  markdown,
  integrations: [mdx(), sitemap(), icon(iconOptions)],
  adapter:
    adapter === "netlify"
      ? netlify()
      : adapter === "vercel"
        ? vercel()
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
