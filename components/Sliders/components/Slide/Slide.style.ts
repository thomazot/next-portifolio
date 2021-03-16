import styled from 'styled-components'

export const Slide = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  height: 100vh;
`

export const Next = styled.span`
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);

  svg {
    width: 26px;
    height: 26px;
  }

  @media (max-width: 500px) {
    bottom: 20vh;
  }
`
