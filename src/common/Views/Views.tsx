import styled, { css } from 'styled-components'

type ViewsProps = {
  center?: boolean
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
  ${({ center }) => css`
    display: flex;
    flex-flow: row nowrap;
    ${center && modifiedViews['center']}
  `}
`

export default Views
