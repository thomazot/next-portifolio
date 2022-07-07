import { createContext, FC, useState } from 'react'

export const INITIAL_HEAD = {
  title: 'thomazot - Front End Developer - React,Javascript,Typescript',
  description:
    "Hello, I'm a Front-End developer with more than 14 years of development as a developer today focused on development with React, NextJS.",
  keywords:
    'Front-End,Front,End,Front End,Developer,CSS,HTML,JS,Javascript,Typescript,React,ReactJS,Stylus,SASS,SCSS,Stylus,Styled-Components,Node,NodeJS',
  canonical: 'https://www.thomazot.com.br'
}

type IGlobal = {
  head: typeof INITIAL_HEAD
  setHead: (head: typeof INITIAL_HEAD) => void
}

export const GlobalContext = createContext<IGlobal | null>(null)

export const GlobalProvider: FC<{ initial?: typeof INITIAL_HEAD }> = ({
  children,
  initial = INITIAL_HEAD
}) => {
  const [head, setHead] = useState<typeof INITIAL_HEAD>(initial)

  return (
    <GlobalContext.Provider value={{ head, setHead }}>
      {children}
    </GlobalContext.Provider>
  )
}
