import styled, { css } from 'styled-components'

type ContainerType = {
  fullscreen?: boolean
  center?: boolean
}

const Container = styled.div<ContainerType>`
  ${({ theme, fullscreen, center }) => css`
    margin: 0 auto;
    position: relative;
    width: 100%;

    ${fullscreen &&
    css`
      min-height: 100%;
    `}

    ${center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    `}

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      max-width: ${theme.breakpoint.tablet};
      max-width: 90%;
    }

    @media screen and (min-width: ${theme.breakpoint.desktop}) {
      max-width: ${theme.breakpoint.desktop};
    }
  `}
`

export default Container
