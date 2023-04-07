import { createContext, FC, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { dark, light } from 'styles/theme'
import {
  getPreferenceModeTheme,
  GetPreferenceModeThemeType,
  setPreferenceModeTheme
} from 'helpers/preferenceModeTheme'
import Views from 'common/Views/Views'
import Checkbox from 'forms/Checkobox/Checkbox'

const INITIAL_METATAGS = {
  title: '',
  description: '',
  keywords:
    'Front-End,Front,End,Front End,Developer,CSS,HTML,JS,Javascript,Typescript,React,ReactJS,Stylus,SASS,SCSS,Stylus,Styled-Components,Node,NodeJS',
  canonical: 'https://www.thomazot.com.br',
  robots: 'index, follow'
}
const INITIAL_DATALAYER = {
  pageTypeName: '',
  url: ''
}

type IMetatags = typeof INITIAL_METATAGS

export type IDataLayer = typeof INITIAL_DATALAYER

type IGlobal = {
  metaTags: IMetatags
  setMetaTags: (metatags: IMetatags) => void
  dataLayer: IDataLayer
  setDataLayer: (datalayer: IDataLayer) => void
  setModeTheme: (mode: GetPreferenceModeThemeType) => void
}

export const GlobalContext = createContext<IGlobal | null>(null)

type IGlobalProvider = {
  initialMetaTags: IMetatags
  initialDataLayer: IDataLayer
  children: React.ReactNode | React.ReactNode[]
}

export const GlobalProvider: FC<IGlobalProvider> = ({
  children,
  initialMetaTags,
  initialDataLayer
}) => {
  const [mode, setMode] = useState(getPreferenceModeTheme())
  const [theme, setTheme] = useState(dark)

  const [metaTags, setMetaTags] = useState<IMetatags>({
    ...INITIAL_METATAGS,
    ...initialMetaTags
  })
  const [dataLayer, setDataLayer] = useState<IDataLayer>({
    ...INITIAL_DATALAYER,
    ...initialDataLayer
  })

  function setModeTheme(mode: GetPreferenceModeThemeType) {
    setMode(mode)
    setPreferenceModeTheme(mode)
  }

  useEffect(() => {
    if (mode) setTheme(mode === 'dark' ? dark : light)
  }, [mode])

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider
        value={{ metaTags, setMetaTags, dataLayer, setDataLayer, setModeTheme }}
      >
        <Views
          style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            zIndex: 2
          }}
        >
          <Checkbox
            checked={mode === 'dark'}
            id="mode-theme"
            label="Dark mode"
            onChange={(e) =>
              setModeTheme(e.currentTarget.checked ? 'dark' : 'light')
            }
          />
        </Views>
        {children}
      </GlobalContext.Provider>
    </ThemeProvider>
  )
}
