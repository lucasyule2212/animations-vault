import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Animations Vault',
  description: 'A collection of animations for study and inspiration.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          'min-h-screen bg-zinc-900 font-sans antialiased',
        )}
      >
        {children}
      </body>
    </html>
  )
}
