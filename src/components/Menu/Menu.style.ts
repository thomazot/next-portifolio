import styled, { css } from 'styled-components'
import ButtonDefault from '../../forms/Button'

const ModifiedButton = {
  Open: css`
    ${() => css`
      span {
        &:nth-child(1) {
          top: 15px;
          width: 0%;
          left: 50%;
        }

        &:nth-child(2) {
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }

        &:nth-child(4) {
          top: 15px;
          width: 0%;
          left: 50%;
        }
      }
    `}
  `,
  Close: css``
}

export const ButtonSpan = styled.span`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    height: 1px;
    width: calc(100% - 10px);
    background: ${theme.colors.primary};
    border-radius: 9px;
    opacity: 1;
    left: 5px;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 7px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 15px;
    }

    &:nth-child(4) {
      top: 23px;
    }
  `}
`

export const Button = styled(ButtonDefault)<{ open: boolean }>`
  ${({ theme, open }) => css`
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out;
    margin: ${theme.gap / 2}px;
    cursor: pointer;
    background: none;
    padding: 5px;

    &:hover {
      background: none;
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
    transform: translate3d(-100%, 0, 0);
  `
}
export const Content = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    min-height: 100vh;
    max-height: 100%;
    width: 300px;
    max-width: calc(100% - 58px);
    transition: all 0.3s ease-in-out;
    background: ${theme.colors.backgroundContrast};
    color: ${theme.colors.textContrast};
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

export const Link = styled.a`
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
type OverlayType = {
  show?: boolean
}
export const Overlay = styled.div<OverlayType>`
  ${({ show = false }) => css`
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    ${show
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}
  `}
`
