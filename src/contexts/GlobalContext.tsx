import { createContext, FC, useState } from 'react'

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
  const [metaTags, setMetaTags] = useState<IMetatags>({
    ...INITIAL_METATAGS,
    ...initialMetaTags
  })
  const [dataLayer, setDataLayer] = useState<IDataLayer>({
    ...INITIAL_DATALAYER,
    ...initialDataLayer
  })

  return (
    <GlobalContext.Provider
      value={{ metaTags, setMetaTags, dataLayer, setDataLayer }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
