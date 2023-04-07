import styled, { css } from 'styled-components'
import { ThemeType } from 'styles/theme'

type ButtonProps = {
  secondary?: boolean
  inline?: boolean
}

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

const Button = styled.button<ButtonProps>`
  ${({ theme, secondary, inline }) => css`
    border: 0;
    border-radius: 3px;
    color: ${theme.colors.primaryContrast};
    height: 50px;
    font-size: 14px;
    padding: 16px 32px;
    cursor: pointer;

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
  `}
`

export default Button
