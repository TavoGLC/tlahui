import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tlahuizcalpantecuhtli',
  description: 'SARS-Cov-2 Forecasting with machine learning',
  openGraph: {
    title: 'Tlahuizcalpantecuhtli',
    description: 'SARS-Cov-2 Forecasting forecasting with machine learning',
    url: 'https://tlahui.vercel.app/',
    siteName: 'Tlahuizcalpantecuhtli',
    images: [
      {
        url: 'https://tlahui.vercel.app/social-media-image.jpg', // Must be an absolute URL
        width: 640,
        height: 427,
      }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
