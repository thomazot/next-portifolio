import { useEffect, useState } from 'react'

type UseDebaunce<T = any> = (
  value: T,
  delay?: number
) => { debouncedValue: T; loading: boolean }

const useDebounce: UseDebaunce = (value, delay = 800) => {
  const [loading, setLoading] = useState(false)
  const [debouncedValue, setDebounceValue] = useState(value)

  useEffect(() => {
    setLoading(true)
    const handler = setTimeout(() => {
      setDebounceValue(value)
      setLoading(false)
    }, delay)

    return () => {
      clearTimeout(handler)
      setLoading(false)
    }
  }, [value, delay])

  return {
    debouncedValue,
    loading
  }
}

export default useDebounce
