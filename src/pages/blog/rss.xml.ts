import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@src/consts";
import type { APIContext } from "astro";
import { processor } from "@lib/markdownConfig";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    trailingSlash: false,
    items: await Promise.all(
      posts.map(async (post) => ({
        link: `/blog/${post.slug}`,
        ...post.data,
        content: (await processor.process(post.body)).toString(),
      })),
    ),
  });
}
