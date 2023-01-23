import React, { useEffect, useState } from 'react'
import Clock from 'common/Clock'

const Hours = () => {
  const [clockMinutes, setClockMinutes] = useState(0)
  const [shuffleMinutes, setShuffleMinutes] = useState(true)

  useEffect(() => {
    const MinutesTimerID = setInterval(() => {
      const timer = new Date()
      const minutes = timer.getMinutes()
      setClockMinutes((previousClock) => {
        if (previousClock !== minutes) {
          setShuffleMinutes((previous) => !previous)
          return minutes
        }

        return previousClock
      })
    }, 600)

    return () => clearInterval(MinutesTimerID)
  }, [])

  return <Clock clock={clockMinutes} shuffle={shuffleMinutes} unit="minutes" />
}

export default Hours
