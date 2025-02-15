import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkReadingTime from "remark-reading-time";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const remarkPlugins = [remarkFrontmatter, remarkReadingTime];
export const rehypePlugins = [rehypeSanitize];

export const processor = unified();
processor.use(remarkParse);
for (const plugin of remarkPlugins) {
  //@ts-expect-error invalid types
  processor.use(plugin);
}
processor.use(remarkRehype);
for (const plugin of rehypePlugins) {
  processor.use(plugin);
}
processor.use(rehypeStringify);

export const compileOptions = {
  rehypePlugins,
  remarkPlugins,
};

export default compileOptions;
