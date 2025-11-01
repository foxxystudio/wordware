import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from './CustomCursor'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wordware',
  description: 'Impossible feels like',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
        <Script src="https://craft-gradients.artcreativecode.com/embedded.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

