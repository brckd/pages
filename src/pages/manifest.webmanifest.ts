import type { APIRoute } from "astro";
import type { WebAppManifest } from "web-app-manifest";
import { BACKGROUND_COLOR, SITE_TITLE, THEME_COLOR } from "@src/consts";
import { getImage } from "astro:assets";
import icon from "@assets/icons/icon.png";

const iconSizes = [192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    iconSizes.map(async (size) => {
      const { src, options } = await getImage({
        src: icon,
        width: size,
        height: size,
        format: "png",
      });
      return {
        src,
        type: `image/${options.format}`,
        sizes: `${options.width}x${options.height}`,
      };
    }),
  );

  const manifest: WebAppManifest = {
    name: SITE_TITLE,
    short_name: SITE_TITLE,
    start_url: "/",
    display: "standalone",
    theme_color: THEME_COLOR,
    background_color: BACKGROUND_COLOR,
    icons,
  };

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": "application/json" },
  });
};
