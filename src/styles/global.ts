import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body, html, #__next, #root {
    height: 100%;
    position: relative;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.text};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background};
  }
`
export default GlobalStyles
