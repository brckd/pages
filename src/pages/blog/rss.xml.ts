import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@src/consts";
import type { APIContext } from "astro";

import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const processor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .use(rehypeStringify);

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  console.log(posts[0].body);
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
