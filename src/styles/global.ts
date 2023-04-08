import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --background: ${theme.colors.background};
      --color: ${theme.colors.text};
      --primary: ${theme.colors.primary};
      --secondary: ${theme.colors.secondary};
      --tertiary: ${theme.colors.tertiary};

      --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

      @media (prefers-reduced-motion: no-preference) {
        scroll-behavior: smooth;
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

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: ${theme.colors.text};
      -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.background} inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    .overlay {
      max-width: 100%;
      max-height: 100%;
      overflow: hidden;
    }
  `}
`
export default GlobalStyles
