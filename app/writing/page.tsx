import type { Metadata } from 'next'
import { prisma } from '@/lib/db'
import { WritingContent } from './WritingContent'

export const metadata: Metadata = { title: 'Writing' }

export default async function WritingPage() {
  const articles = await prisma.article
    .findMany({
      where: { published: true },
      orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }],
    })
    .catch(() => [])

  return <WritingContent articles={articles} />
}
