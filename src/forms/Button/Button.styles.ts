import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'
import TextCommon from 'common/Text'

const modifiedButton = {
  primary: css`
    ${({ theme }) => css`
      background: ${theme.colors.primary};
      color: ${theme.colors.primaryContrast};

      &:hover {
        background: ${theme.colors.secondary};
        color: ${theme.colors.primaryContrast};
      }
    `}
  `,
  secondary: css`
    ${({ theme }) => css`
      color: ${theme.colors.primaryContrast};
      ${theme.mode === 'dark'
        ? css`
            background: none;
            border: solid 1px ${theme.colors.secondary};
          `
        : css`
            background: ${theme.colors.secondary};
            border: solid 1px ${theme.colors.secondary};
          `}

      &:hover {
        ${theme.mode === 'dark'
          ? css`
              background: ${theme.colors.secondary};
              color: ${theme.colors.secondaryContrast};
            `
          : css`
              background: none;
              color: ${theme.colors.secondary};
            `}
      }
    `}
  `,
  transparent: css`
    ${({ theme }) => css`
      background: none;
      color: ${theme.colors.primary};

      &:hover {
        color: ${theme.colors.text};
      }
    `}
  `,
  theme: css`
    ${({ theme }) => css`
      background: ${theme.colors.background};
      color: ${theme.colors.text};

      &:hover {
        background: ${theme.colors.backgroundContrast};
        color: ${theme.colors.textContrast};
      }
    `}
  `,
  'theme-inverted': css`
    ${({ theme }) => css`
      background: ${theme.mode === 'dark'
        ? theme.colors.backgroundContrast
        : theme.colors.background};
      color: ${theme.mode === 'dark'
        ? theme.colors.textContrast
        : theme.colors.text};

      &:hover {
        background: ${theme.mode === 'dark'
          ? theme.colors.background
          : theme.colors.backgroundContrast};
        color: ${theme.mode === 'dark'
          ? theme.colors.text
          : theme.colors.textContrast};
      }
    `}
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
  Omit<ButtonProps, 'loading'> & { loading: string; noText: boolean }
>`
  ${({ themeType = 'primary', inline, noText, loading = 'false' }) => css`
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 0;
    border-radius: 3px;
    height: 50px;
    font-size: 14px;
    padding: ${noText ? '16px' : '16px 32px'};
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;
    line-height: 1;

    ${noText &&
    css`
      min-width: 50px;
      max-width: 50px;
    `}
    ${inline
      ? css`
          display: inline-flex;
          width: max-content;
        `
      : css`
          display: flex;
          width: 100%;
        `}

    ${modifiedButton?.[themeType]
      ? modifiedButton[themeType]
      : modifiedButton.primary}

    &:focus {
      outline: none;
    }

    ${loading === 'true' && ButtonLoading}
  `}
`

export const Icon = styled(TextCommon)``
export const Text = styled(TextCommon)``
