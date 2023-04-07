import { getLocalStorage, setLocalStorage } from './localStorage'

const STORAGE_MODE = '@PREFERENCE_MODE'

export type GetPreferenceModeThemeType = 'dark' | 'light'

export function getPreferenceModeTheme(): GetPreferenceModeThemeType {
  const defaultTheme = 'dark'
  if (typeof window === 'undefined') return defaultTheme
  const localTheme = getLocalStorage<GetPreferenceModeThemeType>(STORAGE_MODE)

  if (localTheme) {
    return localTheme
  }

  const mediaQuery = '(prefers-color-scheme: dark)'
  const mql = window.matchMedia(mediaQuery)
  const hasPreference = typeof mql.matches === 'boolean'
  const currentTheme = mql.matches ? 'dark' : 'light'

  setLocalStorage(STORAGE_MODE, currentTheme)

  if (hasPreference) return currentTheme

  return defaultTheme
}

export function setPreferenceModeTheme(mode: GetPreferenceModeThemeType) {
  setLocalStorage(STORAGE_MODE, mode)
}
