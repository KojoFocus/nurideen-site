'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/about',     label: 'About' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/writing',   label: 'Writing' },
  { href: '/contact',   label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border h-14 flex items-center">
        <nav className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl text-dark italic tracking-wide hover:text-green transition-colors"
          >
            Nurideen Abdulai
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'text-sm transition-colors',
                    pathname === href
                      ? 'text-dark font-medium'
                      : 'text-muted hover:text-dark',
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-green-soft rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="text-xs font-medium text-green-mid">Available for work</span>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
            >
              <span className={cn('block w-5 h-px bg-dark transition-transform origin-center', open && 'rotate-45 translate-y-[7px]')} />
              <span className={cn('block w-5 h-px bg-dark transition-opacity', open && 'opacity-0')} />
              <span className={cn('block w-5 h-px bg-dark transition-transform origin-center', open && '-rotate-45 -translate-y-[7px]')} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 top-14 bg-surface border-t border-border">
          <nav className="px-6 py-8 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  'py-4 text-lg border-b border-border font-light transition-colors',
                  pathname === href ? 'text-dark font-medium' : 'text-muted hover:text-dark',
                )}
              >
                {label}
              </Link>
            ))}
            <div className="mt-8 flex items-center gap-2 bg-green-soft rounded-full px-4 py-2.5 self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className="text-sm font-medium text-green-mid">Available for work</span>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
