import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URI } from "./src/consts";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: SITE_URI,
  integrations: [sitemap(), compressor()],
});
