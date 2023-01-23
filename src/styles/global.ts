import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --background: ${theme.colors.background};
      --color: ${theme.colors.text};
      --primary: ${theme.colors.primary};
      --secundary: ${theme.colors.secundary};
      --tertiary: ${theme.colors.tertiary};

      @media (prefers-reduced-motion: no-preference) {
        scroll-behavior: smooth;
      }
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --background: ${theme.colors.dark.background};
        --color: ${theme.colors.dark.text};
      }
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
      background: var(--background);
      color: var(--color);
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

    img {
      object-fit: cover;
    }
  `}
`
export default GlobalStyles
