import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import shield from "@kindspells/astro-shield";

import { loadEnv } from "vite";
import vercel from "@astrojs/vercel";
import netlify from "@astrojs/netlify";
const adapters = {
  netlify: netlify(),
  vercel: vercel(),
};

import markdown from "./src/lib/markdownConfig";
import { SITE_URI } from "./src/consts";

const env = loadEnv(process.env.NODE_ENV!, process.cwd(), "");
const _adapter = env.ADAPTER?.toLowerCase();
const adapter =
  _adapter === "netlify" || _adapter === "vercel" ? _adapter : undefined;

export default defineConfig({
  site: SITE_URI,
  markdown,
  integrations: [
    mdx(),
    shield({
      securityHeaders: {
        enableOnStaticPages: adapter && {
          provider: adapter,
        },
      },
    }),
  ],
  adapter: adapter && adapters[adapter],
});
