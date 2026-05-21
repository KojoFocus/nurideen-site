import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Nurideen Abdulai — Energy Transition & Climate Advocate',
    template: '%s | Nurideen Abdulai',
  },
  description:
    'Co-Founder & Executive Director of ACEES. Energy management consultant, circular economy strategist, and climate advocate working to drive Africa\'s energy transition.',
  keywords: ['energy transition', 'climate', 'Ghana', 'ACEES', 'renewable energy', 'circular economy'],
  authors: [{ name: 'Nurideen Abdulai' }],
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    siteName: 'Nurideen Abdulai',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
