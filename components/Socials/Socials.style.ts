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

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`

export const Link = styled.a`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  border: solid 2px ${({ theme }) => theme.colors.background};

  svg {
    width: 40px;
    height: 40px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
