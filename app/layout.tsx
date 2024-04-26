import {SpeedInsights} from '@vercel/speed-insights/next'
import {Analytics} from '@vercel/analytics/react'
import Image from 'next/image'
import Metrics from './metrics'
import {Metadata} from 'next'
import localFont from 'next/font/local'

import './globals.css'
import bg from '../public/img_bg.png'
import bg_m from '../public/img_bg_m.png'

const MiSans = localFont({src: './font/MiSans-Normal.ttf', variable: '--font-misans'})

export const metadata: Metadata = {
  title: '黑神话悟空发售倒计时',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`w-full ${MiSans.variable}`}>
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
