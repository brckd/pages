import type { APIRoute } from "astro";

export const GET: APIRoute = (context) => {
  const sitemapURL = new URL("sitemap-index.xml", context.site);
  const content = `User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`;

  return new Response(content);
};
