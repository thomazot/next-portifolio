import Text from 'common/Text/Text'
import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    user-select: none;

    &:before {
      content: '';
      display: block;
      width: 32px;
      height: 16px;
      background: ${theme.colors.primaryContrast};
      border-radius: 20px;
      border: solid 1px ${theme.colors.primary};
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);
      transition: all 0.2s ease-in-out;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 14px;
      height: 14px;
      left: 2px;
      top: 2px;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: all 0.2s ease-in-out;
    }

    ${Text} {
      margin-left: 6px;
    }
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    display: none;

    &:checked + ${Label} {
      &:before {
        background: ${theme.colors.primary};
      }

      &:after {
        left: 18px;
        background: ${theme.colors.primaryContrast};
      }
    }
  `}
`
