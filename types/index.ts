export type Article = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  readTime: string
  featured: boolean
  published: boolean
  coverImage?: string | null
  publishedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export type ContactFormData = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}
