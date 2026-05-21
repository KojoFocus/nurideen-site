'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, Reveal, StaggerContainer, StaggerItem, motion } from '@/components/ui/motion'

const expertisePreviews = [
  { icon: '⚡', tag: 'Energy',     name: 'Energy Management & Analysis' },
  { icon: '♻️', tag: 'Systems',   name: 'Circular Economy & Nature-Based Solutions' },
  { icon: '🌱', tag: 'Transition', name: 'Renewable Energy & Just Transition' },
]

const stats = [
  { value: '10+',      label: 'Years of practice' },
  { value: '30%+',    label: 'Avg. energy savings' },
  { value: 'ACEES',   label: 'Co-founded & leads' },
  { value: 'W. Africa', label: 'Region of impact' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="max-w-7xl mx-auto border-b border-border">

        {/* Mobile-only portrait strip */}
        <div className="md:hidden relative bg-dark overflow-hidden" style={{ height: '62vw', minHeight: '240px', maxHeight: '380px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image src="/nurideen.png" alt="Nurideen Abdulai" fill sizes="100vw" className="object-cover object-top" />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(61,107,71,0.3),transparent)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark/80 to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 left-4 right-4 bg-white/8 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 flex items-center justify-between gap-3"
          >
            <div>
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/40 mb-0.5">Current role</p>
              <p className="text-xs text-white font-medium leading-snug">Co-Founder &amp; Executive Director, ACEES</p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-1.5 bg-green/20 border border-green/30 rounded-full px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[9px] font-medium text-emerald-300">Available</span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-[1fr_42%]">

          {/* Left — text */}
          <div className="relative overflow-hidden px-6 md:px-12 py-14 md:py-36 border-r border-border flex flex-col justify-center">
            {/* Dot grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,#c5cdc8_1px,transparent_1px)] [background-size:28px_28px] opacity-50 pointer-events-none" />
            {/* Green orb */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-green-soft opacity-70 blur-[90px] pointer-events-none" />
            {/* Decorative arc */}
            <svg className="absolute right-0 top-0 text-border opacity-30 pointer-events-none" width="320" height="320" fill="none" aria-hidden>
              <circle cx="320" cy="0" r="260" stroke="currentColor" strokeWidth="1" />
              <circle cx="320" cy="0" r="180" stroke="currentColor" strokeWidth="0.5" />
            </svg>

            <div className="relative">
              <FadeIn delay={0} className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-faint" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-faint">
                  Co-Founder &amp; Executive Director, ACEES · Accra, Ghana
                </span>
              </FadeIn>

              <FadeIn delay={0.12}>
                <h1 className="font-serif text-6xl md:text-7xl lg:text-[82px] font-normal text-dark leading-[0.92] tracking-tight mb-10">
                  Nurideen<br />
                  <em className="italic text-green-mid">Abdulai.</em>
                </h1>
              </FadeIn>

              <FadeIn delay={0.24} className="max-w-md mb-12">
                <p className="text-base md:text-lg text-muted font-light leading-relaxed">
                  Energy transition strategist, climate advocate, and systems thinker — building a
                  sustainable, equitable Africa from Accra, one institution at a time.
                </p>
              </FadeIn>

              <FadeIn delay={0.36} className="flex flex-wrap items-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-block bg-dark text-white text-sm font-medium px-7 py-3.5 rounded-lg hover:bg-green transition-colors"
                  >
                    Work with me →
                  </Link>
                </motion.div>
                <Link
                  href="/expertise"
                  className="text-sm text-muted hover:text-dark transition-colors border-b border-border pb-0.5 hover:border-dark"
                >
                  View expertise
                </Link>
              </FadeIn>
            </div>
          </div>

          {/* Right — portrait (desktop only) */}
          <div className="relative hidden md:block bg-dark overflow-hidden min-h-[620px]">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(61,107,71,0.35),transparent)] pointer-events-none z-10" />

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/nurideen.png"
                alt="Nurideen Abdulai"
                fill
                priority
                sizes="(max-width: 768px) 0vw, 42vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark via-dark/60 to-transparent z-10 pointer-events-none" />

            {/* Floating role card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-7 left-7 right-7 z-20 bg-white/8 backdrop-blur-md border border-white/15 rounded-xl px-5 py-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/40 mb-1">Current role</p>
                  <p className="text-sm text-white font-medium leading-snug">Co-Founder &amp; Executive Director</p>
                  <p className="text-xs text-white/40 font-light mt-0.5">Africa Center for Energy &amp; Environmental Sustainability</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 bg-green/20 border border-green/30 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-[9px] font-medium text-emerald-300 whitespace-nowrap">Available</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Stats ── */}
      <div className="max-w-7xl mx-auto border-b border-border">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
          {stats.map(({ value, label }) => (
            <StaggerItem key={label}>
              <div className="px-6 md:px-12 py-10 group hover:bg-surface transition-colors">
                <p className="font-serif text-4xl md:text-5xl text-dark mb-2 tracking-tight group-hover:text-green transition-colors">
                  {value}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-faint">{label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ── About blurb ── */}
      <div className="max-w-7xl mx-auto border-b border-border">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          <Reveal className="px-6 md:px-12 py-16 md:py-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-faint" />
              <span className="text-[10px] uppercase tracking-widest text-faint">The work</span>
            </div>
            <p className="text-xl md:text-2xl text-dark font-light leading-relaxed mb-8">
              Nurideen operates at the intersection of energy, ecology, and economic development —
              where lasting change requires both technical rigor and deep human understanding.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-xs text-green-mid border-b border-green-mid pb-0.5 hover:text-dark hover:border-dark transition-colors"
            >
              Read full profile →
            </Link>
          </Reveal>

          <Reveal delay={0.12} className="px-6 md:px-12 py-16 md:py-20 bg-surface flex flex-col justify-between gap-8 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-green-soft opacity-60 blur-3xl pointer-events-none" />
            <blockquote className="font-serif italic text-2xl md:text-3xl text-dark leading-snug relative">
              "Sustainable energy isn't a luxury for Africa — it's the foundation everything else
              must be built on."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border flex-shrink-0">
                <Image src="/nurideen.png" alt="Nurideen Abdulai" fill sizes="40px" className="object-cover object-top" />
              </div>
              <div>
                <p className="text-sm font-medium text-dark">Nurideen Abdulai</p>
                <p className="text-[10px] text-faint uppercase tracking-widest">ACEES · Accra, Ghana</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Expertise preview ── */}
      <div className="max-w-7xl mx-auto border-b border-border">
        <Reveal className="px-6 md:px-12 py-8 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-faint" />
            <span className="text-[10px] uppercase tracking-widest text-faint">Areas of expertise</span>
          </div>
          <Link href="/expertise" className="text-xs text-green-mid hover:text-dark transition-colors">
            View all six →
          </Link>
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {expertisePreviews.map(({ icon, tag, name }) => (
            <StaggerItem key={name}>
              <motion.div whileHover={{ backgroundColor: '#ffffff' }} transition={{ duration: 0.2 }}>
                <Link href="/expertise" className="group block px-6 md:px-12 py-12">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-10 h-10 rounded-xl bg-green-soft flex items-center justify-center text-base mb-5 inline-flex"
                  >
                    {icon}
                  </motion.div>
                  <span className="text-[9px] uppercase tracking-widest text-green-mid font-medium block mb-2">
                    {tag}
                  </span>
                  <p className="font-serif text-lg text-dark leading-snug group-hover:text-green transition-colors">
                    {name}
                  </p>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ── CTA ── */}
      <Reveal className="max-w-7xl mx-auto">
        <div className="bg-dark relative overflow-hidden px-6 md:px-12 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_50%,rgba(61,107,71,0.2),transparent)] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-green opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-white/20" />
              <span className="text-[10px] uppercase tracking-widest text-white/30">Get in touch</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-normal text-white leading-tight mb-4">
              Ready to create<br /><em className="italic text-gold">impact?</em>
            </h2>
            <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
              Whether you need an energy audit, grant support, a keynote speaker, or a strategic
              climate partner — reach out.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative flex-shrink-0">
            <Link
              href="/contact"
              className="inline-block bg-white text-dark text-sm font-medium px-8 py-4 rounded-lg hover:bg-green-soft transition-colors"
            >
              Start a conversation →
            </Link>
          </motion.div>
        </div>
      </Reveal>
    </>
  )
}
