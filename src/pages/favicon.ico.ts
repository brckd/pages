import type { APIRoute } from "astro";
import sharp from "sharp";
import ico from "sharp-ico";

export const GET: APIRoute = async () => {
  const buffer = await sharp("src/assets/icons/icon.png")
    .resize(32)
    .toFormat("png")
    .toBuffer();
  const icoBuffer = ico.encode([buffer]);

  return new Response(icoBuffer, {
    headers: { "Content-Type": "image/x-icon" },
  });
};
