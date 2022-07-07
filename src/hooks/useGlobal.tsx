import { useContext } from 'react'
import { GlobalContext } from 'contexts/GlobalContext'

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useHead must be used within a HeadProvider')
  }
  return context
}
