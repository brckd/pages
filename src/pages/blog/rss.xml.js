import { getRssString } from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@src/consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  return new Response(
    await getRssString({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      site: context.site,
      items: posts.map((post) => ({
        ...post.data,
        link: `/blog/${post.slug}/`,
      })),
    })
  );
}
