import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The art of content',
  description: 'The art of content',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
