import styled from 'styled-components'

export const Pinneds = styled.div`
  --background: ${({ theme }) => theme.colors.primary};
  --contrast: ${({ theme }) => theme.colors.background};
  --color: ${({ theme }) => theme.colors.primaryContrast};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryContrast};
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-flow: row wrap;
  margin: ${({ theme: { gap } }) => `-${gap / 2}px`};

  article {
    flex: 0 1 260px;
    margin: ${({ theme: { gap } }) => `${gap / 2}px`};
  }
`

export const Title = styled.h1`
  display: block;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 40px;
`
