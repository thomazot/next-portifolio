import styled, { css } from 'styled-components'
import { SizeType } from 'styles/theme'

export type TextProps = {
  size?: SizeType
}

const Text = styled.p<TextProps>`
  ${({ theme, size = SizeType.MEDIUM }) => css`
    font-size: calc(${theme.typography.sizes[size]} - 2px);
    line-height: 1.3;

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      font-size: ${theme.typography.sizes[size]};
    }
  `}
`

export default Text
