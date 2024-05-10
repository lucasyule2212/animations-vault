import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

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
        className={cn(inter.className, 'min-h-screen bg-zinc-900 antialiased')}
      >
        {children}
      </body>
    </html>
  )
}
