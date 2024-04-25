import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics} from '@vercel/analytics/react'
import Image from 'next/image'
import Metrics from './metrics'

import './globals.css'
import bg from '../public/img_bg.png'
import bg_m from '../public/img_bg_m.png'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="w-full">
        <Image
          className="max-md:hidden"
          alt="bg"
          src={bg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          loading="lazy"
          objectPosition="center top"
          style={{objectFit: 'contain'}}
        />
        <Image
          className="md:hidden"
          alt="bg_m"
          src={bg_m}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          loading="lazy"
          style={{objectFit: 'cover'}}
        />
        {children}
        <SpeedInsights />
        <Analytics />
        <Metrics />
      </body>
    </html>
  )
}
