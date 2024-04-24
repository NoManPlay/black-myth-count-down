import localFont from 'next/font/local'
import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics} from '@vercel/analytics/react'
import './globals.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="max-md:bg-[url('/img_bg_m.png')] max-md:bg-[length:100%] max-md:bg-no-repeat w-full">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
