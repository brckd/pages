import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URI } from "./src/consts";

export default defineConfig({
  site: SITE_URI,
  integrations: [sitemap()],
});
