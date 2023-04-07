import styled, { css } from 'styled-components'
import { ThemeType } from 'styles/theme'
import { ButtonProps } from './Button'

const modifiedButton = {
  primary: (theme: ThemeType & ButtonProps) => css`
    background: ${theme.colors.primary};

    &:hover {
      background: ${theme.colors.secundary};
      color: ${theme.colors.primaryContrast};
    }
  `,
  secondary: (theme: ThemeType & ButtonProps) => css`
    ${theme.mode === 'dark'
      ? css`
          background: none;
          border: solid 1px ${theme.colors.primary};
        `
      : css`
          background: ${theme.colors.primary};
          border: solid 1px ${theme.colors.primary};
        `}

    &:hover {
      ${theme.mode === 'dark'
        ? css`
            background: ${theme.colors.primary};
            color: ${theme.colors.primaryContrast};
          `
        : css`
            background: none;
            color: ${theme.colors.primary};
          `}
    }
  `
}

const ButtonLoading = css`
  ${({ theme }) => css`
    background: ${theme.colors.disabled};
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
    opacity: ${theme.opacity};
    pointer-events: none;
    position: relative;
    overflow: hidden;

    ${theme.mode === 'light'
      ? css`
          color: ${theme.colors.text};
        `
      : css`
          color: ${theme.colors.textContrast};
        `}

    &:after {
      content: '';
      min-height: 5px;
      position: absolute;
      background: #fff;
      transform: translateX(-100%);
      animation: animate 2s infinite;
      left: 0;
      top: 0;
    }
    &:before {
      content: '';
      min-height: 5px;
      position: absolute;
      background: #fff;
      transform: translateX(-100%);
      animation: animate 2s infinite;
      animation-delay: 1s;
      left: 0;
      top: 0;
    }

    @keyframes animate {
      0% {
        transform: translateX(-150%);
        min-width: 100px;
      }
      100% {
        transform: translateX(300%);
        min-width: 400px;
      }
    }
  `}
`

export const Button = styled.button<
  Omit<ButtonProps, 'loading'> & { loading: string }
>`
  ${({ theme, secondary, inline, loading = 'false' }) => css`
    border: 0;
    border-radius: 3px;
    color: ${theme.colors.primaryContrast};
    height: 50px;
    font-size: 14px;
    padding: 16px 32px;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;

    ${inline
      ? css`
          display: inline-block;
          width: max-content;
        `
      : css`
          display: block;
          width: 100%;
        `}

    ${secondary
      ? modifiedButton.secondary(theme)
      : modifiedButton.primary(theme)}

    &:focus {
      outline: none;
    }

    ${loading === 'true' && ButtonLoading}
  `}
`
