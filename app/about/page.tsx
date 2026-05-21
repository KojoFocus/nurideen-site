'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Reveal, StaggerContainer, StaggerItem, motion } from '@/components/ui/motion'

const timeline = [
  { year: '2024', event: 'Featured panelist — Just Transition & Sustainable Environment Workshop, CSIR Accra' },
  { year: '2022', event: 'Launched CES Energy Services — helping businesses reduce energy costs by 30%+' },
  { year: '2020', event: 'Expanded ACEES operations across Ghana and West Africa' },
  { year: '2016', event: 'Co-Founded Africa Center for Energy & Environmental Sustainability (ACEES)' },
  { year: '2013', event: 'Graduated — University of Energy and Natural Resources, Ghana' },
]

const facts = [
  ['Current Role',  'Co-Founder & Executive Director, ACEES'],
  ['Education',     'University of Energy and Natural Resources, Ghana'],
  ['Location',      'Accra, Greater Accra Region, Ghana'],
  ['LinkedIn',      'linkedin.com/in/nurideen-abdulai'],
  ['Organisation',  'aceesafrica.org'],
]

const tags = ['Energy Transition', 'Circular Economy', 'Climate Policy', 'Nature-Based Solutions', 'Innovation']

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto">

      {/* ── Header ── */}
      <div className="grid md:grid-cols-2 border-b border-border">

        {/* Left — portrait + quote */}
        <div className="relative border-r border-border flex flex-col">
          {/* Portrait */}
          <div className="relative bg-dark overflow-hidden" style={{ minHeight: '340px', flex: '0 0 340px' }}>
            {/* Inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(61,107,71,0.3),transparent)] z-10 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/nurideen.png"
                alt="Nurideen Abdulai"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </motion.div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-dark/80 to-transparent z-10 pointer-events-none" />

            {/* About label */}
            <FadeIn className="absolute top-6 left-6 z-20 flex items-center gap-3">
              <div className="h-px w-6 bg-white/30" />
              <span className="text-[10px] uppercase tracking-widest text-white/50">About</span>
            </FadeIn>
          </div>

          {/* Quote */}
          <div className="relative overflow-hidden px-6 md:px-12 py-12 flex-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#c5cdc8_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-green-soft opacity-60 blur-[70px] pointer-events-none" />
            <FadeIn delay={0.3} className="relative">
              <h1 className="font-serif text-4xl md:text-5xl font-normal text-dark leading-tight mb-8">
                The person behind<br /><em className="italic text-green-mid">the work.</em>
              </h1>
              <blockquote className="border-l-2 border-green pl-5 font-serif italic text-lg text-dark leading-relaxed">
                "Sustainable energy isn't a luxury for Africa — it's the foundation everything else must be built on."
              </blockquote>
            </FadeIn>
          </div>
        </div>

        {/* Right — facts */}
        <div className="bg-surface px-6 md:px-12 py-12 md:py-16 relative">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-green-soft opacity-40 blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
          <StaggerContainer className="space-y-0 divide-y divide-border relative">
            {facts.map(([label, value]) => (
              <StaggerItem key={label}>
                <div className="py-4 first:pt-0">
                  <p className="text-[9px] uppercase tracking-widest text-faint mb-1">{label}</p>
                  <p className="text-sm text-dark">{value}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="py-4">
                <p className="text-[9px] uppercase tracking-widest text-faint mb-3">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.05 }}
                      className="text-[10px] px-3 py-1.5 rounded-full bg-dark text-white/80 cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* ── Bio ── */}
      <div className="relative overflow-hidden px-6 md:px-12 py-16 border-b border-border">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="max-w-3xl space-y-6">
          {[
            `As Co-Founder and Executive Director of the Africa Center for Energy and Environmental Sustainability (ACEES), Nurideen has spent over a decade building the institutions, partnerships, and expertise that accelerate Ghana's shift to clean, affordable energy.`,
            `His career spans energy audits for Ghanaian SMEs and industrial operators, circular economy framework design, large-scale grant management, and high-profile climate advocacy — including a featured role at the Just Transition and Sustainable Environment workshop at CSIR, Accra.`,
            `Trained at the University of Energy and Natural Resources and holding a demonstrated history in the investment management sector, he brings rigorous technical grounding to every engagement — both within Ghana and internationally.`,
          ].map((para, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-base md:text-lg text-muted leading-relaxed font-light">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="bg-surface border-b border-border px-6 md:px-12 py-16 relative overflow-hidden">
        <svg className="absolute right-0 top-0 text-border opacity-30 pointer-events-none" width="360" height="360" fill="none" aria-hidden>
          <circle cx="360" cy="0" r="300" stroke="currentColor" strokeWidth="1" />
          <circle cx="360" cy="0" r="200" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        <Reveal className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-dark">Career timeline</h2>
        </Reveal>

        <StaggerContainer className="max-w-2xl">
          {timeline.map(({ year, event }) => (
            <StaggerItem key={year}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="flex gap-8 py-6 border-b border-border last:border-0 first:pt-0"
              >
                <span className="font-serif italic text-2xl text-faint w-16 flex-shrink-0">{year}</span>
                <p className="text-sm text-muted leading-relaxed font-light">{event}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ── CTA ── */}
      <Reveal className="px-6 md:px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-sm text-muted font-light max-w-md">
          Interested in partnering, speaking invitations, or a consulting brief?
        </p>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/contact"
            className="inline-block bg-dark text-white text-sm font-medium px-7 py-3.5 rounded-lg hover:bg-green transition-colors"
          >
            Get in touch →
          </Link>
        </motion.div>
      </Reveal>
    </div>
  )
}
