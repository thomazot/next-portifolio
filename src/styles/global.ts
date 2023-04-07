import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --background: ${theme.colors.background};
      --color: ${theme.colors.text};
      --primary: ${theme.colors.primary};
      --secundary: ${theme.colors.secundary};
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

    /* a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      transition: var(--transition);
      color: var(--primary);
      line-height: 1.3;

      &:hover {
        color: var(--primary);
        outline: 0px;

        &:after {
          width: 100%;
        }
      }

      &:after {
        content: '';
        display: block;
        width: 0px;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--primary);
        transition: var(--transition);
        opacity: 0.5;
        margin-top: 5px;
      }
    } */
  `}
`
export default GlobalStyles
