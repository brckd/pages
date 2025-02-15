import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import { SITE_URI } from "./src/consts";
import favicons from "astro-favicons";
import mdxConfig from "./src/lib/markdownConfig";

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
  adapter: import.meta.env.PROD ? vercel({ edgeMiddleware: true }) : undefined,
});
