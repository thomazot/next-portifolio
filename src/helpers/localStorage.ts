export const getLocalStorage = <R = any>(id: string): R | undefined => {
  if (
    typeof window === 'undefined' ||
    typeof window.localStorage === 'undefined'
  )
    return undefined
  return localStorage.getItem(id) as R | undefined
}

export const setLocalStorage = (id: string, value: string) => {
  if (
    typeof window !== 'undefined' &&
    typeof window.localStorage !== 'undefined'
  )
    localStorage.setItem(id, value)
}
