import React, { useEffect, useState } from 'react'
import Clock from 'common/Clock'

const Hours = () => {
  const [clockHours, setClockHours] = useState(0)
  const [shuffleHours, setShuffleHours] = useState(true)

  useEffect(() => {
    const HoursTimerID = setInterval(() => {
      const timer = new Date()
      const hours = timer.getHours()
      setClockHours((previousClock) => {
        if (previousClock !== hours) {
          setShuffleHours((previous) => !previous)
          return hours
        }

        return previousClock
      })
    }, 600)

    return () => clearInterval(HoursTimerID)
  }, [])

  return <Clock clock={clockHours} shuffle={shuffleHours} unit="hours" />
}

export default Hours
