import styled from 'styled-components'

export const Slide = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
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
    position: relative;
    animation: 0.8s linear 0.8s infinite next-animate;
    fill: currentColor;
  }

  @media (max-width: 500px) {
    bottom: 20vh;
  }

  @keyframes next-animate {
    from {
      bottom: -5px;
    }
    to {
      bottom: 0;
    }
  }
`
export const SlideContainer = styled.div`
  background: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.secundaryContrast};
`
