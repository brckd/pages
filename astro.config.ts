import { defineConfig } from "astro/config";
import { SITE_URI } from "./src/consts";
import favicons from "astro-favicons";

export default defineConfig({
  site: SITE_URI,
  integrations: [
    favicons({
      input: "src/assets/icons/icon.png",
      name: "Bricked",
      short_name: "Bricked",
    }),
  ],
});
