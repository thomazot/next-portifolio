import React, { useEffect, useState } from 'react'
import Clock from 'common/Clock'

const Hours = () => {
  const [clockSeconds, setClockSeconds] = useState(0)
  const [shuffleSeconds, setShuffleSeconds] = useState(true)

  useEffect(() => {
    const SecondsTimerID = setInterval(() => {
      const timer = new Date()
      const seconds = timer.getSeconds()

      setClockSeconds((previousClock) => {
        if (previousClock !== seconds) {
          setShuffleSeconds((previous) => !previous)
          return seconds
        }

        return previousClock
      })
    }, 600)

    return () => clearInterval(SecondsTimerID)
  }, [])

  return <Clock clock={clockSeconds} shuffle={shuffleSeconds} unit="seconds" />
}

export default Hours
