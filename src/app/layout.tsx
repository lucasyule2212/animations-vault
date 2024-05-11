import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Newsreader } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Animations Vault',
  description: 'A collection of animations for study and inspiration.',
}

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={cn(
            GeistSans.variable,
            newsreader.variable,
            'min-h-screen bg-zinc-900 font-sans antialiased',
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
