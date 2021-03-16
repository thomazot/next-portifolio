import styled from 'styled-components'

export const Slide = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  height: 100vh;
  max-height: 100%;
`

export const Next = styled.span`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  svg {
    width: 26px;
    height: 26px;
  }
`
