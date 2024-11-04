import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { db, posts, postEdits } from "@lib/db";
import { generateIdFromEntropySize } from "lucia";

export const edit = defineAction({
  accept: "form",
  input: z.object({
    id: z.string().optional(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
  }),
  handler: async ({ id, slug, title, description, content }, { locals }) => {
    const { user } = locals;
    if (!user)
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "You need to be logged in to edit this post.",
      });

    if (!id) {
      id = generateIdFromEntropySize(10);
      await db.insert(posts).values({ id });
    }

    await db.insert(postEdits).values({
      id: generateIdFromEntropySize(10),
      postId: id,
      slug,
      title,
      description,
      content,
    });
  },
});
