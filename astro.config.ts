import { defineConfig } from "astro/config";
import { SITE_URI } from "./src/consts";
import favicons from "astro-favicons";
import mdxConfig from "./src/lib/markdownConfig";

import vercel from "@astrojs/vercel";
import netlify from "@astrojs/netlify";
const adapter: string = import.meta.env.ADAPTER?.toLowerCase();

export default defineConfig({
  site: SITE_URI,
  integrations: [
    favicons({
      input: "src/assets/icons/icon.png",
      name: "Bricked",
      short_name: "Bricked",
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
