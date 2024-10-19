import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, PT_Serif_Caption } from 'next/font/google'
import ThemeProvider from '@/providers/ThemeProvider'
import NextAuthProvider from '@/providers/NextAuthProvider/NextAuthProvider'

const font = PT_Serif_Caption({ display: 'swap', weight: '400', subsets: ['cyrillic'] })


export const metadata: Metadata = {
  title: 'Pharmacy',
  description: 'Pharmacy app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider>
          <NextAuthProvider>
            {children}
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
