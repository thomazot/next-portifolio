import styled, { css } from 'styled-components'

type ViewsProps = {
  center?: boolean
  direction?: 'column' | 'row'
  gap?: number | string
}

const modifiedViews = {
  center: css`
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 100%;
  `
}

const Views = styled.div<ViewsProps>`
  ${({ center, direction, gap, theme }) => css`
    display: flex;
    flex-direction: ${direction ? direction : 'row'};
    ${center && modifiedViews['center']}
    ${gap &&
    css`
      gap: ${typeof gap === 'number' ? (theme.gap / 2) * gap : gap}px;
    `}
  `}
`

export default Views
