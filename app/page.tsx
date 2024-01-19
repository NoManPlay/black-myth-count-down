'use client'

import Countdown from '@/components/CountDown'
import {addZero} from '@/utils'
import Image from 'next/image'

export default function Home() {
  const date = new Date('2024-08-20 00:00:00')
  return (
    <main className="h-screen">
      <video
        className="hidden md:block md:absolute md:w-full"
        poster="/img_bg.png"
        autoPlay
        loop
        muted
        object-fit="fill"
      >
        <source src="/video_bg.mp4" type="video/mp4"></source>
      </video>
      <div className="absolute md:pl-[52vw] md:pt-[5vw] text-center">
        <div className="relative w-[100vw] h-[50vw] md:w-[30vw] md:h-[15vw]">
          <Image src="/logo.png" alt="black_myth" layout="fill" priority objectFit="contain" />
        </div>
        <p className="relative mt-[10vw] md:mt-0 text-[8vw] md:text-[3vw]">直面天命</p>
        <div className="relative tnum tabular-nums text-[10vw] md:text-[4vw] text-[#B09B7C]">
          <Countdown date={date}>
            {({timeLeft, isValidDate}) =>
              isValidDate ? (
                <>
                  <div>
                    <span>{addZero(timeLeft?.days || 0)}</span>
                    <span>天</span>
                    <span>{addZero(timeLeft?.hours || 0)}</span>
                    <span>:</span>
                    <span>{addZero(timeLeft?.minutes || 0)}</span>
                    <span>:</span>
                    <span>{addZero(timeLeft?.seconds || 0)}</span>
                  </div>
                </>
              ) : (
                <div>直面天命</div>
              )
            }
          </Countdown>
        </div>
      </div>
    </main>
  )
}
