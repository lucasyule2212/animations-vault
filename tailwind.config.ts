import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        serif: ['var(--font-newsreader)'],
      },
      transitionTimingFunction: {
        'in-quad': 'var(--ease-in-quad)',
        'in-cubic': 'var(--ease-in-cubic)',
        'in-quart': 'var(--ease-in-quart)',
        'in-quint': 'var(--ease-in-quint)',
        'in-expo': 'var(--ease-in-expo)',
        'in-circ': 'var(--ease-in-circ)',

        'out-quad': 'var(--ease-out-quad)',
        'out-cubic': 'var(--ease-out-cubic)',
        'out-quart': 'var(--ease-out-quart)',
        'out-quint': 'var(--ease-out-quint)',
        'out-expo': 'var(--ease-out-expo)',
        'out-circ': 'var(--ease-out-circ)',

        'in-out-quad': 'var(--ease-in-out-quad)',
        'in-out-cubic': 'var(--ease-in-out-cubic)',
        'in-out-quart': 'var(--ease-in-out-quart)',
        'in-out-quint': 'var(--ease-in-out-quint)',
        'in-out-expo': 'var(--ease-in-out-expo)',
        'in-out-circ': 'var(--ease-in-out-circ)',
      },
      colors: {
        zinc: {
          900: '#111110',
          950: '#0d0d0c',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        orchestration: {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
            filter: 'blur(4px)',
          },
          to: { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        orchestration: 'orchestration 0.5s ease-out 120ms both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
