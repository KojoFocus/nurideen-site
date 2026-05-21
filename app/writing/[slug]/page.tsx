import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/db'
import { format } from 'date-fns'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await prisma.article.findUnique({ where: { slug } }).catch(() => null)
  if (!article) return { title: 'Not Found' }
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await prisma.article.findUnique({
    where: { slug, published: true },
  }).catch(() => null)

  if (!article) notFound()

  return (
    <article className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-dark border-b border-border px-6 md:px-12 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/writing" className="text-[9px] uppercase tracking-widest text-white/40 hover:text-white/70 transition-colors">
              ← Writing
            </Link>
            <span className="text-white/20">·</span>
            <span className="text-[9px] uppercase tracking-widest text-gold font-medium">{article.category}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-white/50 text-base leading-relaxed font-light mb-8">{article.excerpt}</p>
          <div className="flex items-center gap-4 text-[10px] text-white/30 pt-6 border-t border-white/10">
            <span>Nurideen Abdulai</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{article.publishedAt ? format(article.publishedAt, 'MMMM d, yyyy') : ''}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 md:px-12 py-16 max-w-3xl">
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:font-normal
            prose-p:text-muted prose-p:leading-relaxed prose-p:font-light
            prose-a:text-green-mid prose-strong:text-dark"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* Author card */}
      <div className="border-t border-border px-6 md:px-12 py-12 bg-bg">
        <div className="flex items-center gap-5">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border flex-shrink-0">
            <Image src="/nurideen.png" alt="Nurideen Abdulai" fill sizes="56px" className="object-cover object-top" />
          </div>
          <div>
            <p className="text-sm font-medium text-dark">Nurideen Abdulai</p>
            <p className="text-xs text-muted font-light">Co-Founder & Executive Director, ACEES · Accra, Ghana</p>
          </div>
          <Link
            href="/contact"
            className="ml-auto text-xs border border-border px-4 py-2 rounded-lg text-muted hover:border-green-mid hover:text-dark transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </article>
  )
}
