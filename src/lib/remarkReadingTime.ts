import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import type { Root } from "mdast";
import type { VFile } from "vfile";

export function remarkReadingTime() {
  return function (tree: Root, { data }: VFile) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    if (data.astro?.frontmatter) {
      data.astro.frontmatter.readingTime = readingTime;
    }
  };
}

export default remarkReadingTime;
