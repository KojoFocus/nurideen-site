'use client'
import { FadeIn, Reveal, StaggerContainer, StaggerItem } from '@/components/ui/motion'
import { ArticleCard } from '@/components/sections/ArticleCard'
import type { Article } from '@/types'

export function WritingContent({ articles }: { articles: Article[] }) {
  const featured = articles.find((a) => a.featured) ?? null
  const rest = articles.filter((a) => !a.featured)

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="relative overflow-hidden px-6 md:px-12 py-16 border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#c5cdc8_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-green-soft opacity-50 blur-[80px] pointer-events-none" />
        {/* Large decorative word */}
        <p className="absolute right-6 md:right-12 bottom-2 font-serif italic text-[100px] text-border opacity-25 leading-none select-none pointer-events-none">
          essays
        </p>

        <div className="relative">
          <FadeIn className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-faint" />
            <span className="text-[10px] uppercase tracking-widest text-faint">Writing</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl font-normal text-dark leading-tight">
              Ideas in<br /><em className="italic text-green-mid">long form.</em>
            </h1>
          </FadeIn>
        </div>
      </div>

      {articles.length === 0 ? (
        <Reveal className="px-6 md:px-12 py-32 text-center">
          <div className="w-14 h-14 rounded-full bg-green-soft flex items-center justify-center font-serif italic text-2xl text-green-mid mx-auto mb-5">
            ✍
          </div>
          <p className="font-serif text-2xl text-dark mb-3">Coming soon.</p>
          <p className="text-sm text-muted font-light">Essays and analysis on Africa's energy transition.</p>
        </Reveal>
      ) : (
        <div>
          {featured && (
            <Reveal className="border-b border-border">
              <ArticleCard article={featured} featured />
            </Reveal>
          )}
          {rest.length > 0 && (
            <StaggerContainer className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
              {rest.map((article) => (
                <StaggerItem key={article.id}>
                  <ArticleCard article={article} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      )}
    </div>
  )
}
