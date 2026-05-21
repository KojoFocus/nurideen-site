import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
        sans:  ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg:     '#f5f2ed',
        surface:'#ffffff',
        dark:   '#1a2e1e',
        green: {
          DEFAULT: '#2a4a30',
          mid:    '#3d6b47',
          soft:   '#eaf0eb',
        },
        muted:  '#4f6255',
        faint:  '#b0bdb3',
        border: '#e2e8e3',
        gold:   '#c9a84c',
      },
      borderRadius: {
        DEFAULT: '8px',
        lg:      '12px',
        xl:      '16px',
        full:    '9999px',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body':       '#6b7c6e',
            '--tw-prose-headings':   '#1a2e1e',
            '--tw-prose-links':      '#3d6b47',
            '--tw-prose-bold':       '#1a1a1a',
            '--tw-prose-quotes':     '#1a2e1e',
            maxWidth: '100%',
            a: { textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            'h1,h2,h3': { fontFamily: 'var(--font-instrument)', fontWeight: '400' },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
