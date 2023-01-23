import React, { useEffect, useState } from 'react'
import * as S from './Clock.styles'

function generatePreviousClock(clock: number, unit?: UnitType): number {
  const previous = clock - 1
  const current =
    unit === 'hours'
      ? previous === -1
        ? 23
        : previous
      : previous === -1
      ? 59
      : previous
  return current
}

type UnitType = 'hours' | 'minutes' | 'seconds'

const Clock: React.FC<{
  clock: number
  shuffle: boolean
  unit?: UnitType
}> = ({ clock, shuffle, unit }) => {
  const [previous, setPrevious] = useState(generatePreviousClock(clock, unit))

  useEffect(() => {
    setPrevious(generatePreviousClock(clock, unit))
  }, [clock, unit])

  return (
    <S.Container>
      <S.Static position="top">
        <S.StaticContent>{clock.toString().padStart(2, '0')}</S.StaticContent>
      </S.Static>
      <S.Static position="bottom">
        <S.StaticContent>
          {previous.toString().padStart(2, '0')}
        </S.StaticContent>
      </S.Static>
      <S.Animated animation={shuffle ? 'fold' : 'unfold'}>
        <S.StaticContent>
          {(shuffle ? previous : clock).toString().padStart(2, '0')}
        </S.StaticContent>
      </S.Animated>
      <S.Animated animation={!shuffle ? 'fold' : 'unfold'}>
        <S.StaticContent>
          {(!shuffle ? previous : clock).toString().padStart(2, '0')}
        </S.StaticContent>
      </S.Animated>
    </S.Container>
  )
}

export default Clock
