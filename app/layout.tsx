import localFont from 'next/font/local'
import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics} from '@vercel/analytics/react'
import './globals.css'

const MiSans = localFont({
  src: [
    {path: 'fonts/woff2/MiSans-Thin.woff2', weight: '100', style: 'normal'},
    {path: 'fonts/woff2/MiSans-ExtraLight.woff2', weight: '200', style: 'normal'},
    {path: 'fonts/woff2/MiSans-Light.woff2', weight: '300', style: 'normal'},
    {path: 'fonts/woff2/MiSans-Normal.woff2', weight: '400', style: 'normal'},
    {path: 'fonts/woff2/MiSans-Medium.woff2', weight: '500', style: 'normal'},
    {path: 'fonts/woff2/MiSans-Demibold.woff2', weight: '600', style: 'normal'},
    {path: 'fonts/woff2/MiSans-Semibold.woff2', weight: '700', style: 'normal'},
    {path: 'fonts/woff2/MiSans-Bold.woff2', weight: '800', style: 'normal'},
    {path: 'fonts/woff2/MiSans-Heavy.woff2', weight: '900', style: 'normal'},
  ],
  variable: '--font-misans',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${MiSans.variable} max-md:bg-[url('/img_bg_m.png')] max-md:bg-[length:100%] max-md:bg-no-repeat w-full`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
