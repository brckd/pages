import { defineConfig, envField } from "astro/config";
import { SITE_URI } from "./src/consts";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: SITE_URI,
  env: {
    schema: {
      DATABASE_URL: envField.string({ context: "server", access: "secret" }),
    },
  },
  security: {
    checkOrigin: import.meta.env.PROD,
  },
  adapter: import.meta.env.PROD ? vercel({}) : undefined,
  output: "server",
});
