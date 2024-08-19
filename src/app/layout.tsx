import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Newsreader } from 'next/font/google'
import localFont from 'next/font/local'

import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Animations Vault',
  description: 'A collection of animations for study and inspiration.',
}

const openRunde = localFont({
  src: [
    {
      path: '../../public/fonts/OpenRunde-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/OpenRunde-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/OpenRunde-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/OpenRunde-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-open-runde',
})

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          newsreader.variable,
          openRunde.variable,
          'min-h-screen overflow-x-hidden bg-zinc-900 font-sans antialiased',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
