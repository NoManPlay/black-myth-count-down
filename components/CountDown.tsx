'use client'

import {useState, useEffect, useRef} from 'react'
import {calculateTimeLeft, timeLeft} from '../utils'

interface CountdownProps {
  date: any
  children: (props: {isValidDate: boolean; isValidFutureDate: boolean; timeLeft: timeLeft}) => JSX.Element
}

const Countdown = ({date, children}: CountdownProps) => {
  const initialTimeLeft = calculateTimeLeft(date)
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft)
  const timer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date))
    }, 10)

    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current)
      }
    }
  }, [date])

  let isValidDate = true,
    isValidFutureDate = true

  if (timeLeft === null) isValidDate = false
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false

  return children({
    isValidDate,
    isValidFutureDate,
    timeLeft,
  })
}

export default Countdown
