import { defineConfig } from "astro/config";
import "dotenv/config";

const url = process.env.URL && new URL(process.env.URL);

export default defineConfig({
  site: url && url.origin,
  base: url && url.pathname,
});
