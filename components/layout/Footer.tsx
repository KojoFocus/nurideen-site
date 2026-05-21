import Link from 'next/link'

const links = [
  { href: '/about',     label: 'About' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/writing',   label: 'Writing' },
  { href: '/contact',   label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="py-12 grid md:grid-cols-3 gap-8 border-b border-white/10">
          <div>
            <p className="font-serif italic text-white text-xl mb-2">Nurideen Abdulai</p>
            <p className="text-xs text-white/30 font-light leading-relaxed">
              Co-Founder &amp; Executive Director, ACEES<br />Accra, Greater Accra Region, Ghana
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm text-white/40 hover:text-white/80 transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Get in touch</p>
            <a href="mailto:nurideen@aceesafrica.org" className="text-sm text-white/40 hover:text-white/80 transition-colors">
              nurideen@aceesafrica.org
            </a>
            <a href="tel:+233544819500" className="text-sm text-white/40 hover:text-white/80 transition-colors">
              +233 54 481 9500
            </a>
            <a href="https://www.aceesafrica.org" target="_blank" rel="noreferrer" className="text-sm text-white/40 hover:text-white/80 transition-colors">
              aceesafrica.org
            </a>
          </div>
        </div>

        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/20">© {new Date().getFullYear()} Nurideen Abdulai. All rights reserved.</span>
          <span className="text-xs text-white/20">Accra, Ghana · Building Africa's energy future</span>
        </div>
      </div>
    </footer>
  )
}
