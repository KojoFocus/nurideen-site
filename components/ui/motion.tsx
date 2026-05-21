'use client'
import { motion, type Variants } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const upVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.75, ease } },
}

const staggerVariants: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.11 } },
}

/* Scroll-reveal: fades + slides up on enter */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: upVariants.hidden, show: { ...upVariants.show as object, transition: { duration: 0.75, ease, delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Hero entrance: immediate animate (no scroll trigger) */
export function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Stagger parent — wrap StaggerItems inside */
export function StaggerContainer({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ ...staggerVariants, show: { transition: { staggerChildren: 0.1, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Stagger child */
export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={upVariants} className={className}>
      {children}
    </motion.div>
  )
}

/* Inline motion exports for one-off use */
export { motion }
