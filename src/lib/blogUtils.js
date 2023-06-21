import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const filterBlogsByPageIndex = (blogs, pageIndex) => {
  const blogPerPage = 5
  // get the total posts from page 1 to current page
  const totalPageBlogs = +pageIndex * blogPerPage

  // get the total posts from page 1 to previous page
  const prevPageBlogs = totalPageBlogs - blogPerPage

  return blogs.filter(
    (blog, index) => index < totalPageBlogs && index >= prevPageBlogs
  )
}

export const getBlogs = (pageIndex) => {
  const dirFiles = fs.readdirSync(
    path.join(process.cwd(), 'src/pages', 'blog'),
    {
      withFileTypes: true,
    }
  )
  // returns the first 4 lines of the contents
  // function firstFourLines(file, options) {
  //   file.excerpt = file.content.split('\n').slice(0, 2).join(' ')
  // }

  const blogs = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'src/pages', 'blog', file.name),
        'utf-8'
      )
      const { data, content, excerpt } = matter(fileContent)

      const timeToRead = readingTime(content)

      const slug = file.name.replace(/.mdx$/, '')
      return { data, content, excerpt, timeToRead, slug }
    })
    .filter((post) => post)
    .sort((a, b) => new Date(b.data.publishedAt) - new Date(a.data.publishedAt))

  return filterBlogsByPageIndex(blogs, pageIndex)
}
