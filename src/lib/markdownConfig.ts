import remarkParse from "remark-parse";
import remarkReadingTime from "./remarkReadingTime";
import remarkFrontmatter from "remark-frontmatter";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings, {
  type Options as RehypeAutolinkHeadingsOptions,
} from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

export const rehypeAutolinkHeadingsOptions: RehypeAutolinkHeadingsOptions = {
  behavior: "prepend",
  content: {
    type: "text",
    value: "#",
  },
  properties: {
    class: "heading-anchor",
  },
};

export const remarkPlugins = [remarkReadingTime, remarkFrontmatter] as const;
export const rehypePlugins = [
  rehypeSlug,
  rehypeSanitize,
  [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
] as const;

export const processor = unified();
processor.use(remarkParse);
for (const plugin of remarkPlugins) {
  if (Array.isArray(plugin)) {
    processor.use(...plugin);
  } else {
    processor.use(plugin);
  }
}
processor.use(remarkRehype);
for (const plugin of rehypePlugins) {
  if (Array.isArray(plugin)) {
    processor.use(...plugin);
  } else {
    processor.use(plugin);
  }
}
processor.use(rehypeStringify);

export const compileOptions = {
  remarkPlugins,
  rehypePlugins,
} as const;

export default compileOptions;
