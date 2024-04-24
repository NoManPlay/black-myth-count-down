'use client'

import Countdown from '@/components/CountDown'
import {addZero} from '@/utils'
import Image from 'next/image'
import logo from '../public/logo.png';

export default function Home() {
  const date = new Date('2024-08-20 00:00:00')
  return (
    <main className="h-screen">
      <video
        preload="none"
        className="hidden md:block md:absolute md:w-full"
        autoPlay
        loop
        muted
        object-fit="fill"
      >
        <source src="/video_bg.mp4" type="video/mp4"></source>
      </video>
      <div className="absolute md:pl-[52vw] md:pt-[5vw] text-center">
        <div className="relative w-[100vw] h-[50vw] md:w-[30vw] md:h-[15vw]">
          <Image src={logo} alt="black_myth" layout="fill" objectFit="contain" placeholder='blur' />
        </div>
        <p className="relative mt-[10vw] md:mt-0 text-[8vw] md:text-[3vw]">直面天命</p>
        <div className="relative tnum tabular-nums text-[10vw] md:text-[4vw] text-[#B09B7C]">
          <Countdown date={date}>
            {({timeLeft, isValidDate}) =>
              isValidDate ? (
                <>
                  {timeLeft?.days && timeLeft.days > 99 ? (
                    <>
                      <span>{addZero(timeLeft?.days || 0)}</span>天
                      <span className="countdown">
                        <span style={{'--value': addZero(timeLeft?.hours || 0)} as React.CSSProperties}></span>:
                        <span style={{'--value': addZero(timeLeft?.minutes || 0)} as React.CSSProperties}></span>:
                        <span style={{'--value': addZero(timeLeft?.seconds || 0)} as React.CSSProperties}></span>
                      </span>
                    </>
                  ) : (
                    <span className="countdown">
                      <span style={{'--value': addZero(timeLeft?.days || 0)} as React.CSSProperties}></span>天
                      <span style={{'--value': addZero(timeLeft?.hours || 0)} as React.CSSProperties}></span>:
                      <span style={{'--value': addZero(timeLeft?.minutes || 0)} as React.CSSProperties}></span>:
                      <span style={{'--value': addZero(timeLeft?.seconds || 0)} as React.CSSProperties}></span>
                    </span>
                  )}
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
