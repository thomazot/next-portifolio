import styled from 'styled-components'

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
`

export const Container = styled.div`
  display: block;
`

export const Title = styled.h2`
  padding-bottom: ${({ theme: { gap } }) => `${gap / 2}px`};
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
    margin: 16px;

    svg {
      width: 40px;
      height: 40px;
    }

    span {
      display: none;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`
