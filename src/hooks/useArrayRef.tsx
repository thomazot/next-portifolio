import { RefObject, useRef } from 'react'

export function useArrayRef(): [
  RefObject<HTMLDivElement[]>,
  (ref: never) => RefObject<HTMLDivElement> | null
] {
  const refs = useRef([])
  refs.current = []
  return [refs, (ref) => ref && refs.current.push(ref)]
}
