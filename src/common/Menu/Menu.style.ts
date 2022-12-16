import styled, { css } from 'styled-components'

export const Container = styled.nav`
  width: 300px;
  max-width: calc(100% - 68px);
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
`

const ModifiedButton = {
  Open: css`
    right: 100%;
    span {
      transform: rotate(45deg);

      &:before,
      &:after {
        transform: rotate(90deg);
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }
    }
  `,
  Close: css``
}

export const Button = styled.button<{ open: boolean }>`
  ${({ theme, open }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: ${theme.gap / 2}px;
    top: ${theme.gap / 2}px;
    z-index: 100;
    background: none;
    border: none;
    width: 58px;
    height: 58px;
    background: none;
    border-radius: 3px;
    color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    span {
      display: block;
      position: relative;
      width: 60%;

      &,
      &:before,
      &:after {
        height: 3px;
        border-radius: 2px;
        background: ${theme.colors.background};
        transition: all 0.3s ease-in-out;
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
      }

      &:before {
        top: 10px;
      }

      &:after {
        bottom: 10px;
      }
    }

    ${open && ModifiedButton.Open}
    ${!open && ModifiedButton.Close}
  `}
`

export const ModifiedList = {
  Open: css``,
  Close: css`
    visibility: hidden;
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  `
}
export const Content = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    position: relative;
    margin-left: auto;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    max-width: calc(100% - ${theme.gap}px);
    transition: all 0.3s ease-in-out;
    background: ${theme.colors.background};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    ${open && ModifiedList.Open}
    ${!open && ModifiedList.Close}
  `}
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
`

export const Item = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Link = styled.button`
  cursor: pointer;
  display: block;
  padding: ${({ theme }) => theme.gap / 2}px;
  text-decoration: none;
  color: currentColor;
  border: 0;
  background: none;
  width: 100%;
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`
