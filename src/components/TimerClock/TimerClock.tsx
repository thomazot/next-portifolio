import React, { useEffect, useState } from 'react'
import Clock from 'common/Clock'

export type TimerClockProps = {
  type: 'hours' | 'minutes' | 'seconds'
}

const TimerClock: React.FC<TimerClockProps> = ({ type }) => {
  const [clock, setClock] = useState(0)
  const [shuffle, setHours] = useState(true)

  useEffect(() => {
    const HoursTimerID = setInterval(() => {
      const timer = new Date()
      const clockTime = {
        hours: timer.getHours(),
        minutes: timer.getMinutes(),
        seconds: timer.getSeconds()
      }
      setClock((previousClock) => {
        if (previousClock !== clockTime[type]) {
          setHours((previous) => !previous)
          return clockTime[type]
        }

        return previousClock
      })
    }, 600)

    return () => clearInterval(HoursTimerID)
  }, [type])

  return <Clock clock={clock} shuffle={shuffle} unit={type} />
}

export default TimerClock
