import Link from 'next/link'
import { Article } from '@/types'
import { format } from 'date-fns'

export function ArticleCard({ article, featured }: { article: Article; featured?: boolean }) {
  if (featured) {
    return (
      <Link
        href={`/writing/${article.slug}`}
        className="bg-dark block p-10 flex flex-col justify-end min-h-[320px] relative overflow-hidden group col-span-1 hover:bg-green transition-colors"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-4 bg-gold" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-medium">Featured Essay</span>
          </div>
          <h3 className="font-serif text-2xl font-normal text-white leading-snug mb-3">{article.title}</h3>
          <p className="text-xs text-white/50 leading-relaxed mb-6 font-light line-clamp-3">{article.excerpt}</p>
          <span className="text-[10px] text-white/60 border-b border-white/20 pb-0.5 group-hover:text-white transition-colors">
            Read full essay →
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/writing/${article.slug}`}
      className="bg-surface block p-8 flex flex-col justify-between group hover:bg-bg transition-colors relative"
    >
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
      <div>
        <span className="text-[9px] uppercase tracking-widest text-green-mid font-medium block mb-3">{article.category}</span>
        <h3 className="font-serif text-lg font-normal text-dark leading-snug mb-3">{article.title}</h3>
        <p className="text-xs text-muted leading-relaxed font-light line-clamp-3">{article.excerpt}</p>
      </div>
      <div className="flex justify-between items-center text-[10px] text-faint border-t border-border pt-4 mt-6">
        <span>{article.readTime}</span>
        <span>{article.publishedAt ? format(article.publishedAt, 'MMM yyyy') : ''}</span>
      </div>
    </Link>
  )
}
