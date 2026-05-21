'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FadeIn, Reveal, StaggerContainer, StaggerItem, motion } from '@/components/ui/motion'

const contactLinks = [
  { icon: '💼', label: 'LinkedIn',     value: 'Nurideen Abdulai',    href: 'https://www.linkedin.com/in/nurideen-abdulai-a5704659/', active: true },
  { icon: '📞', label: 'Phone',        value: '+233 54 481 9500',    href: 'tel:+233544819500' },
  { icon: '🌐', label: 'Organisation', value: 'aceesafrica.org',     href: 'http://www.aceesafrica.org' },
]

const inputClass =
  'w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-dark placeholder:text-faint focus:outline-none focus:border-green-mid focus:ring-2 focus:ring-green-mid/10 transition-all'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus('sent'); form.reset() }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[80vh]">

      {/* ── Left — info ── */}
      <div className="relative overflow-hidden px-6 md:px-12 py-20 border-r border-border">
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#c5cdc8_1px,transparent_1px)] [background-size:28px_28px] opacity-30 pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-green-soft opacity-60 blur-[90px] pointer-events-none" />

        <div className="relative">
          <FadeIn className="flex items-center gap-3 mb-6">
            <div className="h-px w-6 bg-faint" />
            <span className="text-[10px] uppercase tracking-widest text-faint">Get in touch</span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-dark leading-snug mb-5">
              Let's work on<br />something <em className="italic text-green-mid">meaningful.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-sm text-muted leading-relaxed mb-10 font-light max-w-sm">
              Whether it's an energy consulting brief, grant collaboration, speaking invitation, or a
              conversation about Africa's climate future — reach out.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-3">
            {contactLinks.map(({ icon, label, value, href, active }) => (
              <StaggerItem key={label}>
                <motion.a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="flex items-center gap-4 bg-surface border border-border rounded-xl px-5 py-4 hover:border-green-mid transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                    className="w-10 h-10 rounded-xl bg-green-soft flex items-center justify-center text-base flex-shrink-0"
                  >
                    {icon}
                  </motion.div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-faint mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-dark">{value}</p>
                  </div>
                  {active && (
                    <div className="ml-auto flex items-center gap-1.5 bg-green-soft rounded-full px-2.5 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[9px] font-medium text-green-mid">Active</span>
                    </div>
                  )}
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* ── Right — form ── */}
      <div className="bg-bg px-6 md:px-12 py-20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-green-soft opacity-30 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />

        {status === 'sent' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center gap-5"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-green-soft flex items-center justify-center text-2xl"
            >
              ✓
            </motion.div>
            <h2 className="font-serif text-2xl text-dark">Message sent!</h2>
            <p className="text-sm text-muted font-light">Nurideen typically replies within 24 hours.</p>
            <button
              onClick={() => setStatus('idle')}
              className="text-xs text-green-mid border-b border-green-mid pb-px mt-2 hover:text-dark hover:border-dark transition-colors"
            >
              Send another →
            </button>
          </motion.div>
        ) : (
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-4 relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'name',  label: 'Name*',  type: 'text',  placeholder: 'Jane Smith',     required: true },
                  { name: 'email', label: 'Email*', type: 'email', placeholder: 'jane@email.com', required: true },
                ].map(({ name, label, type, placeholder, required }) => (
                  <motion.div key={name} whileFocus={{ scale: 1.01 }}>
                    <label className="block text-[9px] uppercase tracking-widest text-muted mb-1.5">{label}</label>
                    <input name={name} type={type} placeholder={placeholder} required={required} className={inputClass} />
                  </motion.div>
                ))}
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-muted mb-1.5">Phone</label>
                <input name="phone" type="tel" placeholder="+1234567890" className={inputClass} />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-muted mb-1.5">Subject</label>
                <input name="subject" type="text" placeholder="Energy audit / Speaking / Partnership…" required className={inputClass} />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-muted mb-1.5">Message*</label>
                <textarea name="message" rows={5} placeholder="Tell me about your project or enquiry…" required className={`${inputClass} resize-none`} />
              </div>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-500"
                >
                  Something went wrong. Please try again or contact directly.
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-dark text-white text-sm font-medium py-3.5 rounded-lg hover:bg-green transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
                      className="inline-block w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full"
                    />
                    Sending…
                  </span>
                ) : 'Submit'}
              </motion.button>

              <div className="flex items-center gap-3 bg-surface border border-border rounded-xl px-4 py-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/nurideen.png" alt="Nurideen Abdulai" fill sizes="32px" className="object-cover object-top" />
                </div>
                <p className="text-xs text-muted font-light">nurideen@aceesafrica.org</p>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[9px] text-green-mid font-medium whitespace-nowrap">Replies within 24hrs</span>
                </div>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </div>
  )
}
