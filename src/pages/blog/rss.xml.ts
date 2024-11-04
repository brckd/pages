import { getRssString } from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "@src/consts";
import { db, posts, postEdits } from "@lib/db";
import { eq, desc, max, min } from "drizzle-orm";
import type { APIContext } from "astro";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export async function GET(context: APIContext) {
  const postTimeRanges = db
    .select({
      id: posts.id,
      oldest: min(postEdits.publishedAt).as("oldest"),
      newest: max(postEdits.publishedAt).as("newest"),
    })
    .from(posts)
    .innerJoin(postEdits, eq(postEdits.postId, posts.id))
    .groupBy(posts.id)
    .as("post_time_ranges");
  const newestPosts = await db
    .select(postEdits)
    .from(postTimeRanges)
    .innerJoin(postEdits, eq(postEdits.publishedAt, postTimeRanges.newest))
    .orderBy(desc(postTimeRanges.oldest));
  return new Response(
    await getRssString({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      site: context.site!,
      items: newestPosts.map((post) => ({
        title: post.title,
        description: post.description,
        pubDate: post.publishedAt,
        content: sanitizeHtml(marked.parse(post.content)),
        link: `/blog/${post.slug}`,
      })),
    }),
  );
}
