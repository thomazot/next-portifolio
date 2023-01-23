import styled, { css } from 'styled-components'

const Button = styled.button`
  ${({ theme }) => css`
    border: 0;
    border-radius: 3px;
    background: ${theme.colors.primary};
    color: ${theme.colors.primaryContrast};
    height: 50px;
    line-height: 50px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    &:focus {
      outline: none;
    }
    &:hover {
      background: ${theme.colors.secundary};
      color: ${theme.colors.primaryContrast};
    }
  `}
`

export default Button
