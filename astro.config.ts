import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import {
  SITE_URI,
  DISCORD_URI,
  GITHUB_URI,
  MATRIX_URI,
  EMAIL_URI,
  MUES_URI,
  ARTCADE_URI,
} from "./src/consts";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: SITE_URI,
  integrations: [sitemap(), compressor()],
  redirects: {
    "/dc": DISCORD_URI,
    "/gh": GITHUB_URI,
    "/mx": MATRIX_URI,
    "/em": EMAIL_URI,
    "/mu": MUES_URI,
    "/ac": ARTCADE_URI,
  },
});
