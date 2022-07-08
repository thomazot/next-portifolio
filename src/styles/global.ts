import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --primary: ${theme.colors.primary};
      --secundary: ${theme.colors.secundary};
      --tertiary: ${theme.colors.tertiary};
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body,
    html,
    #__next,
    #root {
      height: 100%;
      position: relative;
    }

    body {
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      font: 400 16px Roboto, sans-serif;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.text};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.background};
    }
  `}
`
export default GlobalStyles
