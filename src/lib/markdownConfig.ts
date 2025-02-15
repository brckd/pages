import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkReadingTime from "./remarkReadingTime";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const remarkPlugins = [remarkReadingTime, remarkFrontmatter];
export const rehypePlugins = [rehypeSanitize];

export const processor = unified();
processor.use(remarkParse);
for (const plugin of remarkPlugins) {
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
