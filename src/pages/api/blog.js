import { getBlogs } from '@/lib/blogUtils'

export default function handler(req, res) {
  const { page } = req.query
  const blogs = getBlogs(page)

  res.status(200).json(blogs)
}
