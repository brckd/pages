/* eslint-disable @typescript-eslint/no-require-imports */

import { type Config } from "postcss-load-config";

const config: Config = {
  plugins: [
    require("postcss-import"),
    require("postcss-url"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};

export default config;
