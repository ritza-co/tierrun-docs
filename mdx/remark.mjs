import { mdxAnnotations } from 'mdx-annotations'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'

// mdx-annotations -Markdoc style annotation for MDX
// remark-gfm - To support Github Flavoured Markdown support
export const remarkPlugins = [
  mdxAnnotations.remark,
  remarkGfm,
  remarkFrontmatter,
]
