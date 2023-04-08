import styled, { css } from 'styled-components'
import { SizeType } from 'styles/theme'

export type TextProps = {
  size?: SizeType
  center?: boolean
}

const Text = styled.p<TextProps>`
  ${({ theme, size = SizeType.MEDIUM, center }) => css`
    font-size: calc(${theme.typography.sizes[size]} - 2px);
    line-height: 1;

    ${center &&
    css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
    `}

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      font-size: ${theme.typography.sizes[size]};
    }
  `}
`

export default Text
