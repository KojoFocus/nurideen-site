'use client'
import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, Reveal, StaggerContainer, StaggerItem, motion } from '@/components/ui/motion'

const areas = [
  {
    icon: '⚡', tag: 'Energy',
    name: 'Energy Management & Analysis',
    body: `Nurideen delivers tailored energy audits and consumption strategies that reduce operational costs and ODS emissions — built specifically for the realities of Ghanaian enterprise. Working with ACEES and CES Energy, he has helped clients achieve consistent savings above 30%.`,
    services: ['Energy audits', 'Load management', 'Demand-side intervention', 'ODS emission reduction', 'Reporting & compliance'],
  },
  {
    icon: '♻️', tag: 'Systems',
    name: 'Circular Economy & Nature-Based Solutions',
    body: `Designing regenerative systems that eliminate waste, restore natural capital, and unlock new economic value for African communities. Nurideen applies global circular economy frameworks to the specific social and ecological contexts of West Africa.`,
    services: ['Waste-stream analysis', 'Regenerative system design', 'Nature-based solution mapping', 'Community economic models', 'Policy recommendations'],
  },
  {
    icon: '🌱', tag: 'Transition',
    name: 'Renewable Energy & Just Transition',
    body: `From policy framing to on-the-ground project delivery — a clean energy shift that leaves no worker, city, or rural community behind. Nurideen's work on just transition integrates social equity, livelihood protection, and technical feasibility.`,
    services: ['Renewable energy project design', 'Just transition policy', 'Stakeholder engagement', 'Worker reskilling frameworks', 'Community energy planning'],
  },
  {
    icon: '📋', tag: 'Funding',
    name: 'Grant Applications & Project Management',
    body: `Proven record in identifying, applying for, and securing international grants, then delivering complex multi-stakeholder development projects on time and on impact. Experience spans bilateral donors, foundations, and multilateral climate funds.`,
    services: ['Grant identification & scoping', 'Proposal writing', 'Budget management', 'Stakeholder reporting', 'Project M&E'],
  },
  {
    icon: '📈', tag: 'Strategy',
    name: 'Strategic Planning & Business Development',
    body: `Data-informed growth strategy, market entry analysis, and customer service excellence — calibrated for the West African context. Nurideen supports organisations at every stage, from startup planning to institutional scaling.`,
    services: ['Strategic planning', 'Market entry', 'Business model design', 'Customer experience', 'MS Office & data analysis'],
  },
  {
    icon: '🎙️', tag: 'Advocacy',
    name: 'Climate Advocacy & Media Engagement',
    body: `Translating technical climate knowledge into public discourse and actionable policy. From radio programmes to national panel discussions, Nurideen has consistently made complex climate science accessible and politically relevant in Ghana.`,
    services: ['Media appearances', 'Policy briefs', 'Panel discussions', 'Public education', 'Stakeholder convening'],
  },
]

export default function ExpertisePage() {
  return (
    <div className="max-w-7xl mx-auto">

      {/* ── Header ── */}
      <div className="relative overflow-hidden px-6 md:px-12 py-16 border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#c5cdc8_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-green-soft opacity-50 blur-[90px] pointer-events-none" />
        {/* Large decorative text */}
        <p className="absolute right-6 md:right-12 bottom-4 font-serif italic text-[120px] text-border opacity-30 leading-none select-none pointer-events-none">
          6
        </p>

        <div className="relative">
          <FadeIn className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-faint" />
            <span className="text-[10px] uppercase tracking-widest text-faint">Expertise</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl font-normal text-dark leading-tight">
              Built on expertise.<br /><em className="italic text-green-mid">Driven by impact.</em>
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* ── Areas ── */}
      <div className="divide-y divide-border">
        {areas.map(({ icon, tag, name, body, services }, i) => (
          <Reveal key={name} delay={0}>
            <motion.div
              className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border group"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
              transition={{ duration: 0.2 }}
            >
              {/* Label col */}
              <div className="px-6 md:px-12 py-12">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  className="w-12 h-12 rounded-xl bg-green-soft flex items-center justify-center text-xl mb-5 inline-flex"
                >
                  {icon}
                </motion.div>
                <span className="text-[9px] uppercase tracking-widest text-green-mid font-medium block mb-2">{tag}</span>
                <h2 className="font-serif text-xl font-normal text-dark leading-snug group-hover:text-green transition-colors">
                  {name}
                </h2>
              </div>

              {/* Body + services col */}
              <div className="px-6 md:px-10 py-12 col-span-2 grid md:grid-cols-2 gap-8">
                <p className="text-sm text-muted leading-relaxed font-light">{body}</p>
                <ul className="space-y-2.5">
                  {services.map((s, si) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: si * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-2.5 text-xs text-muted"
                    >
                      <motion.span
                        whileHover={{ scale: 1.6 }}
                        className="w-1.5 h-1.5 rounded-full bg-green-mid flex-shrink-0"
                      />
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* ── CTA ── */}
      <Reveal className="bg-dark relative overflow-hidden px-6 md:px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(61,107,71,0.2),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative">
          <p className="font-serif italic text-2xl md:text-3xl text-white mb-2">
            Need a specialist in any of these areas?
          </p>
          <p className="text-sm text-white/40 font-light">Available for consulting, advisory, and project delivery roles.</p>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative flex-shrink-0">
          <Link
            href="/contact"
            className="inline-block bg-white text-dark text-sm font-medium px-7 py-3.5 rounded-lg hover:bg-green-soft transition-colors"
          >
            Start a conversation →
          </Link>
        </motion.div>
      </Reveal>
    </div>
  )
}
